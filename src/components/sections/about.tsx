"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { CareerTimeline } from "@/components/diagrams/career-timeline";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <motion.div
        {...fadeUp}
        className="mb-12 flex items-end justify-between gap-4"
      >
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            / 01 · About
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-medium tracking-tight leading-tight text-balance">
            공공 SI에서
            <br />
            <span className="text-muted-foreground">O2O 플랫폼까지.</span>
          </h2>
        </div>
      </motion.div>

      {/* Bento grid: bio + status + focus + tools */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-4 mb-4 md:mb-6">
        {/* Bio - concise */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="md:col-span-4 rounded-2xl border border-border bg-card p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
            bio.md
          </div>
          <p className="text-lg md:text-xl leading-relaxed text-foreground/85 text-pretty max-w-xl">
            <strong>공공 SI · 헬스케어 · O2O</strong>까지 다른 도메인을 거친 1년차
            서비스 기획자. 최근에는 <strong>Claude Code로 어드민 프론트를 직접
            구현</strong>하며 기획과 개발의 벽을 낮추는 방식을 실험하고 있습니다.
          </p>
        </motion.div>

        {/* Status */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2 rounded-2xl border border-border bg-card p-6 flex flex-col justify-between min-h-[200px]"
        >
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
              Current
            </div>
            <div className="text-lg font-medium leading-tight">
              {siteConfig.currentRole}
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand)] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
            </span>
            <span className="font-mono">Since 2026.03</span>
          </div>
        </motion.div>

        {/* Focus */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="md:col-span-3 rounded-2xl border border-border bg-card p-6"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
            Focus
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-[var(--brand)]">▸</span>
              <span>서비스 기획 · IA 설계</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--brand)]">▸</span>
              <span>AI 활용 프로토타이핑</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--brand)]">▸</span>
              <span>어드민 프론트엔드 구현</span>
            </li>
          </ul>
        </motion.div>

        {/* Now (build with) */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-3 rounded-2xl border border-border bg-card p-6"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
            Now Building With
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Figma",
              "Notion",
              "Confluence",
              "MS Office",
              "Slack",
              "Claude Code",
              "Git",
              "GitHub",
              "Vercel",
            ].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Full-width Career Timeline */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="rounded-2xl border border-border bg-card p-6 md:p-10"
      >
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Career · 2021 → Now
          </div>
          <div className="hidden md:block text-xs text-muted-foreground">
            시간순 · 회사 이력
          </div>
        </div>
        <CareerTimeline />
      </motion.div>
    </section>
  );
}
