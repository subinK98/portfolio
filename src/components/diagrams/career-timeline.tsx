"use client";

import { motion } from "framer-motion";

type Milestone = {
  year: string;
  label: string;
  role: string;
  detail: string;
  highlight?: boolean;
  gap?: boolean;
};

const MILESTONES: Milestone[] = [
  {
    year: "2021 – 2022",
    label: "학생 팀 프로젝트",
    role: "PM · React",
    detail: "영유아 육아 장치",
  },
  {
    year: "2023",
    label: "에이아이댑스",
    role: "플랫폼사업팀",
    detail: "PetcareLab UI/UX",
  },
  {
    year: "2025.03–08",
    label: "소프트시그널",
    role: "서비스 기획",
    detail: "노사발전재단 SI",
  },
  {
    year: "2025.09 – 2026.02",
    label: "Career Break",
    role: "회복 · 리스킬링",
    detail: "AI 활용 학습",
    gap: true,
  },
  {
    year: "2026.03 – Now",
    label: "에이프",
    role: "서비스 기획",
    detail: "Care-X 4개 서비스",
    highlight: true,
  },
];

export function CareerTimeline() {
  return (
    <div className="not-prose relative">
      {/* Horizontal line */}
      <div className="absolute left-0 right-0 top-[52px] h-px bg-border" />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 right-0 top-[52px] h-px bg-[var(--brand)] origin-left"
      />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {MILESTONES.map((m, i) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="relative"
          >
            {/* Year label above */}
            <div className="mb-3 h-8 flex items-end">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground leading-tight">
                {m.year}
              </span>
            </div>

            {/* Dot on line */}
            <div className="relative h-6 flex items-center justify-start">
              {m.gap ? (
                <div className="w-3 h-3 rounded-full border-2 border-dashed border-muted-foreground/40 bg-background" />
              ) : m.highlight ? (
                <div className="relative">
                  <span className="absolute -inset-1.5 rounded-full bg-[var(--brand)]/25 animate-ping" />
                  <div className="relative w-3.5 h-3.5 rounded-full bg-[var(--brand)] ring-2 ring-background" />
                </div>
              ) : (
                <div className="w-3 h-3 rounded-full bg-foreground ring-2 ring-background" />
              )}
            </div>

            {/* Content below */}
            <div className="mt-3">
              <div
                className={`text-sm font-medium leading-tight ${
                  m.gap ? "text-muted-foreground italic" : ""
                }`}
              >
                {m.label}
              </div>
              <div className="mt-0.5 text-[11px] text-muted-foreground font-mono">
                {m.role}
              </div>
              <div className="mt-1 text-xs text-foreground/60 leading-snug">
                {m.detail}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
