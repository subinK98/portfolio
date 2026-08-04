"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-40">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-3 py-1 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand)] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Open to new opportunities
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.04em] leading-[0.95] text-balance"
        >
          기획하고,{" "}
          <span className="text-muted-foreground">AI로</span>
          <br />
          직접 <span className="italic font-serif">구현</span>
          까지 하는
          <br />
          주니어 기획자.
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 max-w-2xl"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            안녕하세요, <span className="text-foreground font-medium">{siteConfig.nameKo}</span>입니다.
            <br />
            리소스가 부족한 환경에서, 도구와 프로세스로 실행력을 확장해온 1년차 서비스 기획자입니다.
            Claude Code로 기획한 서비스를 직접 프론트엔드까지 구현합니다.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
          >
            Work 보기
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Decorative background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.015] dark:opacity-[0.04]">
        <div className="h-full w-full noise-bg text-foreground" />
      </div>
    </section>
  );
}
