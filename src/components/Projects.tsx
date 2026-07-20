"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <SectionReveal id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">
          Things I&apos;ve <span className="gradient-text">Built</span>
        </h2>
        <div className="w-12 h-0.5 bg-[var(--accent)] mb-10" />

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="group relative p-6 rounded-xl border border-[var(--border)]
                bg-[var(--bg-card)] hover:border-[var(--border-hover)]
                hover:bg-[var(--bg-card-hover)] transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-light)] transition-colors duration-200">
                    {project.name}
                  </h3>
                  <p className="text-xs text-[var(--accent)] mt-0.5"
                    style={{ fontFamily: "var(--font-mono)" }}>
                    {project.highlight}
                  </p>
                </div>

                {project.links.length > 0 && (
                  <div className="flex gap-3 shrink-0">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-light)] transition-colors flex items-center gap-1"
                      >
                        {link.label === "GitHub" ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-md bg-[var(--accent-glow)] text-[var(--accent-light)] border border-[var(--accent)]/20"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
