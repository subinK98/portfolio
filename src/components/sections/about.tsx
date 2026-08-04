"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <motion.div {...fadeUp} className="mb-12 flex items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            / 01 · About
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-medium tracking-tight leading-tight text-balance">
            공공 SI에서
            <br />
            <span className="text-muted-foreground">
              O2O 플랫폼까지.
            </span>
          </h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-4">
        {/* Bio - large card */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="md:col-span-4 rounded-2xl border border-border bg-card p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
            bio.md
          </div>
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/85 text-pretty">
            <p>
              1년차 서비스 기획자입니다. 노사발전재단 <strong>5억 규모의 공공
              SI</strong>에 주니어 단독으로 참여했고, 스타트업 헬스케어 앱의
              IA를 재설계했으며, 지금은 세차 O2O 플랫폼 <strong>Care-X의 4개
              서비스</strong>를 최소 팀에서 담당하고 있습니다.
            </p>
            <p>
              최근에는 Claude Code로 어드민 프론트엔드까지 직접 구현하면서,{" "}
              <strong>기획→개발 사이의 벽을 낮추는 방식</strong>을 실험하고
              있습니다. 개발 리소스가 부족한 환경일수록 이 방식이 결정적인
              차이를 만들었습니다.
            </p>
          </div>
        </motion.div>

        {/* Status */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2 rounded-2xl border border-border bg-card p-6 flex flex-col justify-between min-h-[220px]"
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
          className="md:col-span-2 rounded-2xl border border-border bg-card p-6"
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

        {/* Experience */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2 rounded-2xl border border-border bg-card p-6"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
            Experience
          </div>
          <div className="space-y-3 text-sm">
            <div>
              <div className="font-medium">에이프</div>
              <div className="text-xs text-muted-foreground font-mono">
                2026.03 – Present · 서비스 기획
              </div>
            </div>
            <div>
              <div className="font-medium">소프트시그널</div>
              <div className="text-xs text-muted-foreground font-mono">
                2025.03 – 2025.08 · 서비스 기획
              </div>
            </div>
            <div>
              <div className="font-medium">에이아이댑스</div>
              <div className="text-xs text-muted-foreground font-mono">
                2023.08 – 2023.12 · 플랫폼사업팀
              </div>
            </div>
          </div>
        </motion.div>

        {/* Now (build with) */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="md:col-span-2 rounded-2xl border border-border bg-card p-6"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
            Now Building With
          </div>
          <div className="flex flex-wrap gap-2">
            {["Figma", "Claude Code", "Notion", "Nuxt", "Next.js", "Vercel"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
