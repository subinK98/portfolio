"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = React.useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      } catch {
        // Ignore clipboard failures silently
      }
    },
    [value],
  );

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy to clipboard"
      className="relative inline-flex items-center gap-1.5 rounded-md border border-border bg-background/60 px-2.5 py-1 backdrop-blur-sm hover:bg-secondary transition-colors"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            key="copied"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[var(--brand)]"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Copied
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <rect
                x="8"
                y="8"
                width="12"
                height="12"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
            Copy
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
