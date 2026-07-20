"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <SectionReveal id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <div className="w-12 h-0.5 bg-[var(--accent)] mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: catIndex * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all duration-300"
            >
              <h3
                className="text-xs font-medium tracking-wider uppercase text-[var(--accent-light)] mb-4 pb-2 border-b border-[var(--border)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.2,
                      delay: catIndex * 0.08 + i * 0.02,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="px-2.5 py-1 text-xs rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)]
                      border border-[var(--border)] hover:border-[var(--accent)]/40
                      hover:text-[var(--accent-light)] hover:bg-[var(--accent-glow)]
                      transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
