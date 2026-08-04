"use client";

import { motion } from "framer-motion";

type SkillGroup = {
  category: string;
  items: string[];
  accent?: boolean;
};

const skillGroups: SkillGroup[] = [
  {
    category: "Planning & Design",
    items: [
      "서비스 기획",
      "화면기획서 (WBS)",
      "IA 설계",
      "사용자 리서치",
      "Figma",
      "와이어프레임",
      "프로토타이핑",
    ],
  },
  {
    category: "AI-Assisted Development",
    accent: true,
    items: [
      "Claude Code",
      "프롬프트 세분화",
      "레포 학습 기반 구현",
      "Nuxt (Vue)",
      "Next.js (React)",
      "MVP 구현",
    ],
  },
  {
    category: "Development Basics",
    items: ["HTML", "CSS", "JavaScript", "React", "Vue", "Git"],
  },
  {
    category: "Collaboration",
    items: [
      "Notion",
      "Slack",
      "Redmine",
      "산출물 표준화",
      "이해관계자 커뮤니케이션",
      "QA 테스트 케이스",
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.5 }}
        className="mb-10 flex items-baseline gap-4"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          / 03
        </span>
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
          Skills
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`rounded-2xl border p-6 md:p-8 ${
              group.accent
                ? "border-[var(--brand)]/30 bg-[var(--brand)]/[0.03]"
                : "border-border bg-card"
            }`}
          >
            <div className="flex items-center gap-2 mb-5">
              {group.accent && (
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand)]" />
                </span>
              )}
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {group.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`px-3 py-1.5 text-sm rounded-lg ${
                    group.accent
                      ? "bg-background border border-[var(--brand)]/20"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
