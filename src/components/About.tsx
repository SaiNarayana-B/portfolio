"use client";

import SectionReveal from "./SectionReveal";
import { personalInfo, education } from "@/data/portfolio";

export default function About() {
  return (
    <SectionReveal id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-12 h-0.5 bg-[var(--accent)] mb-8" />

        <div className="grid md:grid-cols-[1fr_auto] gap-12">
          <div>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4 text-base">
              I work at the intersection of large language models and production engineering.
              At Quantiphi, I&apos;ve built multi-agent systems that cut pipeline runtimes by 95%,
              shipped NL2SQL agents for enterprise platforms, and optimized inference costs by 80%
              through prompt restructuring and caching strategies.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6 text-base">
              Outside work, I ship open source — my tool{" "}
              <a href="https://github.com/SaiNarayana-B/patchwork" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-light)] hover:underline">patchwork-conventions</a>{" "}
              is published on PyPI and MCP Registry, and integrates with Claude Code, Cursor, and GitHub Copilot.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 text-xs rounded-md bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)]">
                📍 {personalInfo.location}
              </span>
              <span className="px-3 py-1.5 text-xs rounded-md bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)]">
                🎓 {education.degree} · {education.institution}
              </span>
              <span className="px-3 py-1.5 text-xs rounded-md bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)]">
                📊 CGPA: {education.cgpa}
              </span>
              <span className="px-3 py-1.5 text-xs rounded-md bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)]">
                📅 {education.period}
              </span>
            </div>
          </div>

          {/* Quick stats */}
          <div className="flex md:flex-col gap-6 md:gap-4 md:pl-8 md:border-l md:border-[var(--border)]">
            <div>
              <p className="text-2xl font-bold text-[var(--accent-light)]">1.5+</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--accent-light)]">95%</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">Runtime Reduction</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--accent-light)]">4</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
