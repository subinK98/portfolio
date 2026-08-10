"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { Marquee } from "@/components/interaction/marquee";

const HIGHLIGHTS = [
  "Care-X · QR 세차 플랫폼",
  "4개 서비스 · 최소 팀 리드",
  "AI로 개발 리드타임 33%↓",
  "5억 공공 SI 주니어 단독",
  "화면기획서 이슈 10 → 1",
  "React · Nuxt · Next.js",
  "Claude Code Native",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex flex-col">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-bg text-foreground/[0.04] dark:text-foreground/[0.06] mask-fade-b" />
        {/* Animated brand blob */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
          className="absolute top-1/4 -left-32 w-[520px] h-[520px] rounded-full bg-[var(--brand)]/25 blur-3xl animate-blob"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.3 }}
          className="absolute top-1/2 right-0 w-[420px] h-[420px] rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 blur-3xl animate-blob"
          style={{ animationDelay: "-4s" }}
        />
        {/* Watermark initials */}
        <div className="absolute -bottom-16 -right-8 md:right-8 select-none pointer-events-none">
          <div className="text-[220px] md:text-[380px] leading-none font-medium tracking-[-0.06em] text-foreground/[0.03] dark:text-foreground/[0.04]">
            SB
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pt-16 pb-8 md:pt-24 md:pb-14 flex-1 flex flex-col">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-16 md:mb-24"
        >
          <div className="flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand)] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Open to opportunities
            </span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hidden sm:block">
            Portfolio · 2026
          </span>
        </motion.div>

        {/* Massive headline */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-[13vw] md:text-[9.5vw] lg:text-[8.5rem] font-medium tracking-[-0.055em] leading-[0.88] text-balance"
          >
            기획을,
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">AI로 실행</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-[8px] md:h-[14px] bg-[var(--brand)]/40 origin-left -z-0"
              />
            </span>
            <span className="text-muted-foreground">까지.</span>
          </motion.h1>

          {/* Subtitle - shorter, punchier */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 md:mt-12 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            <span className="text-foreground font-medium">
              {siteConfig.nameKo}
            </span>
            <br />
            Claude Code로 기획한 서비스를 프론트엔드까지 직접 구현하는 1년차
            서비스 기획자.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:scale-[1.02] transition-transform"
            >
              최근 프로젝트 보기
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
            >
              이메일 보내기
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="border-y border-border/60 bg-background/50 backdrop-blur-sm py-4 relative"
      >
        <Marquee speed={35} className="mask-fade-lr">
          {HIGHLIGHTS.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-8 px-4 font-mono text-xs uppercase tracking-widest text-muted-foreground"
            >
              <span>{item}</span>
              <span className="text-[var(--brand)]">◆</span>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
