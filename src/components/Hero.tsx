"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 z-10">
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <p
            className="text-sm tracking-widest text-[var(--accent-light)] mb-4 uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {personalInfo.title}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build multi-agent systems, RAG pipelines, and ship open-source tools
          that make AI development faster. Currently at{" "}
          <span className="text-[var(--text-primary)] font-medium">Quantiphi</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-medium text-sm
              hover:bg-[var(--accent-light)] transition-all duration-200 active:scale-[0.97]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[var(--border)] text-[var(--text-secondary)] rounded-lg font-medium text-sm
              hover:border-[var(--accent)] hover:text-[var(--accent-light)] transition-all duration-200 active:scale-[0.97]"
          >
            Get in Touch
          </a>
        </motion.div>


      </div>
    </section>
  );
}
