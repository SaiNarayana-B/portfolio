"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];

  return (
    <SectionReveal id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-12 h-0.5 bg-[var(--accent)] mb-10" />

        <div className="grid md:grid-cols-[200px_1fr] gap-6">
          {/* Tabs */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`text-left px-4 py-3 rounded-lg text-sm whitespace-nowrap transition-all duration-200 ${
                  activeIndex === i
                    ? "bg-[var(--accent-glow)] text-[var(--accent-light)] border border-[var(--accent)]/30"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
                }`}
              >
                <span className="font-medium">{exp.company}</span>
                <br />
                <span className="text-xs text-[var(--text-muted)]">{exp.period}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  {active.role}
                </h3>
                <p className="text-sm text-[var(--accent-light)]">
                  {active.company} · {active.location}
                </p>
                <p
                  className="text-xs text-[var(--text-muted)] mt-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {active.period}
                </p>
              </div>

              <ul className="space-y-3">
                {active.highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.05,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="flex gap-3 text-sm text-[var(--text-secondary)] leading-relaxed"
                  >
                    <span className="text-[var(--accent)] mt-1.5 shrink-0">▹</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionReveal>
  );
}
