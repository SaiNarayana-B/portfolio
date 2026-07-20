"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 1800;
const CONNECTION_DISTANCE = 2.2;
const MOUSE_INFLUENCE = 3;

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const targetMouseRef = useRef(new THREE.Vector2(0, 0));

  const particles = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      velocities[i3] = (Math.random() - 0.5) * 0.008;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.008;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.004;

      sizes[i] = Math.random() * 2 + 0.5;
    }

    return { positions, velocities, sizes };
  }, []);

  const lineGeometry = useMemo(() => {
    const maxLines = PARTICLE_COUNT * 6;
    const positions = new Float32Array(maxLines * 6);
    const colors = new Float32Array(maxLines * 6);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setDrawRange(0, 0);
    return geometry;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetMouseRef.current.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return;

    // Smooth mouse interpolation
    mouseRef.current.lerp(targetMouseRef.current, 0.05);

    const positions = pointsRef.current.geometry.attributes.position
      .array as Float32Array;
    const time = state.clock.elapsedTime;

    // Update particle positions
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      positions[i3] += particles.velocities[i3];
      positions[i3 + 1] += particles.velocities[i3 + 1];
      positions[i3 + 2] += particles.velocities[i3 + 2];

      // Gentle wave motion
      positions[i3 + 1] += Math.sin(time * 0.3 + positions[i3] * 0.1) * 0.002;

      // Mouse influence
      const dx = positions[i3] - mouseRef.current.x * MOUSE_INFLUENCE;
      const dy = positions[i3 + 1] - mouseRef.current.y * MOUSE_INFLUENCE;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 3) {
        const force = (3 - dist) * 0.003;
        positions[i3] += dx * force;
        positions[i3 + 1] += dy * force;
      }

      // Boundary wrapping
      if (positions[i3] > 10) positions[i3] = -10;
      if (positions[i3] < -10) positions[i3] = 10;
      if (positions[i3 + 1] > 10) positions[i3 + 1] = -10;
      if (positions[i3 + 1] < -10) positions[i3 + 1] = 10;
      if (positions[i3 + 2] > 5) positions[i3 + 2] = -5;
      if (positions[i3 + 2] < -5) positions[i3 + 2] = 5;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Draw connections
    const linePositions = lineGeometry.attributes.position
      .array as Float32Array;
    const lineColors = lineGeometry.attributes.color.array as Float32Array;
    let lineIndex = 0;

    for (let i = 0; i < PARTICLE_COUNT && lineIndex < linePositions.length / 6; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT && lineIndex < linePositions.length / 6; j++) {
        const i3 = i * 3;
        const j3 = j * 3;
        const dx = positions[i3] - positions[j3];
        const dy = positions[i3 + 1] - positions[j3 + 1];
        const dz = positions[i3 + 2] - positions[j3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < CONNECTION_DISTANCE) {
          const alpha = 1 - distance / CONNECTION_DISTANCE;
          const li = lineIndex * 6;

          linePositions[li] = positions[i3];
          linePositions[li + 1] = positions[i3 + 1];
          linePositions[li + 2] = positions[i3 + 2];
          linePositions[li + 3] = positions[j3];
          linePositions[li + 4] = positions[j3 + 1];
          linePositions[li + 5] = positions[j3 + 2];

          // Indigo accent color for connections
          lineColors[li] = 0.39 * alpha;
          lineColors[li + 1] = 0.4 * alpha;
          lineColors[li + 2] = 0.95 * alpha;
          lineColors[li + 3] = 0.39 * alpha;
          lineColors[li + 4] = 0.4 * alpha;
          lineColors[li + 5] = 0.95 * alpha;

          lineIndex++;
        }
      }
    }

    lineGeometry.setDrawRange(0, lineIndex * 2);
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.color.needsUpdate = true;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry ref={(geo) => {
          if (geo && !geo.getAttribute("position")) {
            geo.setAttribute("position", new THREE.BufferAttribute(particles.positions, 3));
            geo.setAttribute("size", new THREE.BufferAttribute(particles.sizes, 1));
          }
        }} />
        <pointsMaterial
          size={0.04}
          color="#6366f1"
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}
