"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <SectionReveal id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-12 h-0.5 bg-[var(--accent)] mx-auto mb-8" />

        <p className="text-[var(--text-secondary)] mb-10 leading-relaxed">
          I&apos;m always open to discussing AI engineering, multi-agent systems,
          or interesting collaboration opportunities. Feel free to reach out.
        </p>

        <motion.a
          href={`mailto:${personalInfo.email}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="inline-block px-8 py-3.5 bg-[var(--accent)] text-white rounded-lg font-medium text-sm
            hover:bg-[var(--accent-light)] transition-colors duration-200"
        >
          Say Hello
        </motion.a>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent-light)] transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent-light)] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.73a1.77 1.77 0 110-3.54 1.77 1.77 0 010 3.54zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.77C14.4 7.3 20 7.13 20 12.6V19z" />
            </svg>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[var(--text-muted)] hover:text-[var(--accent-light)] transition-colors duration-200"
            aria-label="Email"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>
    </SectionReveal>
  );
}
