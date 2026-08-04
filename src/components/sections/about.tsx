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
      <motion.div {...fadeUp} className="mb-10 flex items-baseline gap-4">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          / 01
        </span>
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
          About
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-4">
        {/* Bio - large card */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="md:col-span-4 rounded-2xl border border-border bg-card p-8 md:p-10"
        >
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-snug text-balance">
            사용자 문제를 관찰하고,
            <br />
            <span className="text-muted-foreground">
              데이터로 근거를 만들어,
            </span>
            <br />
            AI로 실행까지 이어냅니다.
          </h3>
          <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
            공공 SI, 스타트업 서비스, O2O 플랫폼까지 다양한 도메인에서 기획을
            경험했습니다. 특히 최근에는 Claude Code를 활용해 기획한 어드민을
            직접 프론트엔드까지 구현하며, 개발 리소스가 부족한 환경에서 실행
            속도를 3배 이상 끌어올렸습니다.
          </p>
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
