"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function GlowingSphere({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#6366f1"
          transparent
          opacity={0.15}
          wireframe
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function GlowingTorus({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial
          color="#818cf8"
          transparent
          opacity={0.1}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function GlowingOctahedron({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#a78bfa"
          transparent
          opacity={0.12}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function FloatingGeometry() {
  return (
    <group>
      <GlowingSphere position={[-6, 3, -3]} scale={1.5} />
      <GlowingSphere position={[7, -2, -4]} scale={1} />
      <GlowingTorus position={[5, 4, -5]} scale={1.2} />
      <GlowingTorus position={[-4, -4, -3]} scale={0.8} />
      <GlowingOctahedron position={[-7, -1, -2]} scale={0.7} />
      <GlowingOctahedron position={[3, 2, -6]} scale={0.9} />
    </group>
  );
}
