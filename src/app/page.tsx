"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const Scene = dynamic(() => import("@/components/three/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />

      {/* Hero with 3D background */}
      <div className="relative">
        <Scene />
        <Hero />
        {/* Gradient fade from hero into content */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[var(--bg-primary)] z-10" />
      </div>

      {/* Content sections with solid bg */}
      <div className="relative z-10 bg-[var(--bg-primary)]">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
