"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/interaction/marquee";

type Skill = {
  name: string;
  level?: "core" | "proficient" | "familiar";
};

type SkillGroup = {
  id: string;
  category: string;
  hint: string;
  icon: string;
  featured?: boolean;
  items: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    id: "ai",
    category: "AI-Assisted Development",
    hint: "AI로 실행력 확장",
    icon: "◆",
    featured: true,
    items: [
      { name: "Claude Code", level: "core" },
      { name: "프롬프트 세분화", level: "proficient" },
      { name: "레포 학습 세팅", level: "core" },
      { name: "Nuxt (Vue)", level: "familiar" },
      { name: "Next.js (React)", level: "familiar" },
      { name: "MVP 구현", level: "core" },
    ],
  },
  {
    id: "planning",
    category: "Planning & Design",
    hint: "기획의 뼈대",
    icon: "◈",
    items: [
      { name: "서비스 기획", level: "core" },
      { name: "화면기획서", level: "core" },
      { name: "IA 설계", level: "core" },
      { name: "사용자 리서치", level: "proficient" },
      { name: "Figma", level: "proficient" },
      { name: "와이어프레임", level: "core" },
      { name: "프로토타이핑", level: "proficient" },
    ],
  },
  {
    id: "dev",
    category: "Development Basics",
    hint: "직접 만들 수 있는 것들",
    icon: "◇",
    items: [
      { name: "HTML/CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Vue" },
      { name: "Git" },
    ],
  },
  {
    id: "collab",
    category: "Collaboration",
    hint: "협업과 커뮤니케이션",
    icon: "◉",
    items: [
      { name: "Notion", level: "proficient" },
      { name: "Slack", level: "core" },
      { name: "Redmine" },
      { name: "산출물 표준화", level: "core" },
      { name: "이해관계자 커뮤니케이션" },
      { name: "QA 테스트 케이스" },
    ],
  },
];

const MARQUEE_TAGS = [
  "Claude Code",
  "Figma",
  "Nuxt.js",
  "Next.js",
  "React",
  "Vue",
  "Notion",
  "TypeScript",
  "Public SI",
  "O2O",
  "Service Planning",
  "Prompt Engineering",
];

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-end justify-between gap-4"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              / 03 · Toolkit
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-medium tracking-tight leading-tight text-balance">
              도구는 많이 안 씁니다.
              <br />
              <span className="text-muted-foreground">
                필요한 것만 깊게.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Bento grid: featured card is 2-col wide */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.id}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border transition-all hover:-translate-y-0.5 ${
                group.featured
                  ? "md:col-span-2 lg:row-span-2 border-[var(--brand)]/30 bg-[var(--brand)]/[0.03]"
                  : "border-border bg-card hover:border-foreground/30"
              }`}
            >
              {group.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand)] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand)]" />
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--brand)]">
                    Primary
                  </span>
                </div>
              )}

              <div className="p-6 md:p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div
                    className={`text-2xl mb-3 ${group.featured ? "text-[var(--brand)]" : "text-muted-foreground/60"}`}
                  >
                    {group.icon}
                  </div>
                  <h3
                    className={`font-medium tracking-tight ${
                      group.featured ? "text-xl md:text-2xl" : "text-base"
                    }`}
                  >
                    {group.category}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {group.hint}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <SkillTag key={skill.name} skill={skill} featured={group.featured} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom marquee for atmosphere */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 py-4 border-y border-border/40 bg-secondary/20"
      >
        <Marquee speed={45} className="mask-fade-lr">
          {MARQUEE_TAGS.map((tag, i) => (
            <div
              key={i}
              className="flex items-center gap-6 px-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/60"
            >
              <span>{tag}</span>
              <span className="text-[var(--brand)]/40">·</span>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}

function SkillTag({
  skill,
  featured,
}: {
  skill: Skill;
  featured?: boolean;
}) {
  const level = skill.level ?? "familiar";
  const filled = level === "core" ? 3 : level === "proficient" ? 2 : 1;

  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-1.5 text-xs rounded-md border transition-all hover:border-foreground/40 ${
        featured
          ? "border-[var(--brand)]/20 bg-background/60"
          : "border-border bg-background"
      }`}
    >
      <span className="text-foreground/90">{skill.name}</span>
      <span className="flex items-center gap-0.5" aria-label={`proficiency: ${level}`}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`w-1 h-1 rounded-full transition-colors ${
              i < filled
                ? featured
                  ? "bg-[var(--brand)]"
                  : "bg-foreground"
                : "bg-border"
            }`}
          />
        ))}
      </span>
    </span>
  );
}
