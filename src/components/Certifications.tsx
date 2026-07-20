"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { certifications, education } from "@/data/portfolio";

export default function Certifications() {
  return (
    <SectionReveal id="certifications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">
          Certifications & <span className="gradient-text">Education</span>
        </h2>
        <div className="w-12 h-0.5 bg-[var(--accent)] mb-10" />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Certifications */}
          <div>
            <h3
              className="text-sm font-medium text-[var(--accent-light)] mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.a
                  key={cert.name}
                  href={cert.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.1,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="flex items-start gap-3 p-4 rounded-lg border border-[var(--border)] bg-[var(--bg-card)]
                    hover:border-[var(--accent)]/40 hover:bg-[var(--bg-card-hover)] transition-all duration-200 group cursor-pointer block"
                >
                  <div className="w-8 h-8 rounded-md bg-[var(--accent-glow)] flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-light)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-light)] transition-colors">
                      {cert.name}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--text-muted)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3
              className="text-sm font-medium text-[var(--accent-light)] mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Education
            </h3>
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="p-6 rounded-lg border border-[var(--border)] bg-[var(--bg-card)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-glow)] flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent-light)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {education.institution}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                {education.degree}
              </p>
              <div className="flex gap-4 mt-3">
                <span
                  className="text-xs text-[var(--text-muted)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {education.period}
                </span>
                <span
                  className="text-xs text-[var(--accent-light)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  CGPA: {education.cgpa}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
