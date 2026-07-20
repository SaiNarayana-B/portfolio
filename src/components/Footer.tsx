"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[var(--text-muted)]">
          Designed & Built by Sai Narayana B
        </p>
        <p
          className="text-xs text-[var(--text-muted)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
