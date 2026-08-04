"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { CopyButton } from "@/components/interaction/copy-button";
import { KSTClock } from "@/components/interaction/kst-clock";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {/* Left: main CTA + email */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="md:col-span-4 rounded-2xl border border-border bg-card p-10 md:p-14 relative overflow-hidden"
        >
          {/* Subtle brand glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[var(--brand)]/10 blur-3xl" />

          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
              / 04 · Contact
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-balance">
              흥미로운 프로젝트에
              <br />
              <span className="italic font-serif">함께</span>하고 싶어요.
            </h2>

            {/* Email row with copy */}
            <div className="mt-10 flex flex-wrap items-center gap-3 group">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-xl md:text-2xl font-mono underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors"
              >
                {siteConfig.email}
              </a>
              <CopyButton value={siteConfig.email} />
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Send
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              채용 · 협업 · 커피챗 무엇이든 편하게 연락 주세요. 보통 24시간 이내에
              답변드립니다.
            </p>
          </div>
        </motion.div>

        {/* Right column: time & location */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {/* KST time card */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 rounded-2xl border border-border bg-card p-6 flex flex-col justify-between min-h-[160px]"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Local Time
            </div>
            <div className="mt-4">
              <KSTClock />
              <div className="mt-2 text-xs text-muted-foreground">
                답장 가능 · 서울 (UTC+9)
              </div>
            </div>
          </motion.div>

          {/* GitHub card */}
          <motion.a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex-1 rounded-2xl border border-border bg-card p-6 hover:border-foreground/30 transition-colors flex flex-col justify-between min-h-[140px]"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              GitHub
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-base font-medium">@subinK98</span>
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
