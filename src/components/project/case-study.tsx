"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { Counter } from "@/components/interaction/counter";
import {
  TableOfContents,
  type TOCItem,
} from "@/components/interaction/table-of-contents";

const statusLabel: Record<Project["status"], string> = {
  shipped: "Shipped",
  "mvp-complete": "MVP Complete",
  "not-launched": "Not Launched",
  student: "Team Project",
};

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[var(--brand)]/10 blur-3xl" />
        <div className="absolute inset-0 grid-bg text-foreground/[0.03] dark:text-foreground/[0.05] mask-fade-b" />
      </div>

      <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <span>←</span>
          <span>Back to work</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span className="font-mono text-xs text-muted-foreground">
            {project.period}
          </span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span className="font-mono text-xs text-muted-foreground">
            {project.company}
          </span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest rounded-full border border-[var(--brand)]/30 bg-[var(--brand)]/10 text-[var(--brand)]">
            {statusLabel[project.status]}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.045em] leading-[0.92] text-balance mb-5"
        >
          {project.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-2xl"
        >
          {project.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border"
        >
          <MetaCell label="Role" value={project.role} />
          <MetaCell label="Contribution" value={`${project.contribution}%`} />
          <MetaCell label="Period" value={project.period} />
          <MetaCell label="Type" value={statusLabel[project.status]} />
        </motion.div>
      </div>
    </section>
  );
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
        {label}
      </div>
      <div className="text-sm font-medium">{value}</div>
    </div>
  );
}

/**
 * Layout wrapper for case study body with sidebar TOC.
 */
export function CaseStudyBody({
  toc,
  children,
}: {
  toc: TOCItem[];
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 lg:gap-16">
        <div className="min-w-0">{children}</div>
        <aside className="min-w-0">
          <TableOfContents items={toc} />
        </aside>
      </div>
    </div>
  );
}

export function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-16 scroll-mt-24"
    >
      <div className="flex items-baseline gap-4 mb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          / {number}
        </span>
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
          {title}
        </h2>
      </div>
      <div className="space-y-5 text-base leading-relaxed text-foreground/85 text-pretty">
        {children}
      </div>
    </motion.section>
  );
}

export function MetricGrid({
  items,
}: {
  items: { value: string; label: string; sub?: string }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose my-6">
      {items.map((m) => (
        <div
          key={m.label}
          className="rounded-2xl border border-border bg-card p-6 hover:border-[var(--brand)]/30 transition-colors"
        >
          <Counter
            value={m.value}
            className="block text-3xl md:text-4xl font-medium tracking-tight text-[var(--brand)]"
          />
          <div className="mt-2 text-sm font-medium">{m.label}</div>
          {m.sub && (
            <div className="mt-1 text-xs text-muted-foreground">{m.sub}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export function Callout({
  variant = "default",
  label,
  children,
}: {
  variant?: "default" | "brand" | "warning";
  label?: string;
  children: React.ReactNode;
}) {
  const variants = {
    default: "border-border bg-secondary/40",
    brand: "border-[var(--brand)]/30 bg-[var(--brand)]/[0.05]",
    warning: "border-amber-500/30 bg-amber-500/[0.05]",
  };
  return (
    <div
      className={`not-prose my-6 rounded-xl border p-6 ${variants[variant]}`}
    >
      {label && (
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
          {label}
        </div>
      )}
      <div className="text-base leading-relaxed text-pretty">{children}</div>
    </div>
  );
}

export function Quote({
  children,
  cite,
}: {
  children: React.ReactNode;
  cite?: string;
}) {
  return (
    <blockquote className="not-prose my-8 border-l-2 border-[var(--brand)] pl-6 py-2">
      <p className="text-lg md:text-xl font-medium italic text-foreground/90 leading-relaxed text-pretty">
        {children}
      </p>
      {cite && (
        <footer className="mt-3 font-mono text-xs text-muted-foreground">
          — {cite}
        </footer>
      )}
    </blockquote>
  );
}

export function BeforeAfter({
  before,
  after,
}: {
  before: { title: string; items: string[] };
  after: { title: string; items: string[] };
}) {
  return (
    <div className="not-prose my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
          Before
        </div>
        <div className="text-lg font-medium mb-4">{before.title}</div>
        <ul className="space-y-2 text-sm text-foreground/80">
          {before.items.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-muted-foreground">–</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-[var(--brand)]/30 bg-[var(--brand)]/[0.03] p-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--brand)] mb-2">
          After
        </div>
        <div className="text-lg font-medium mb-4">{after.title}</div>
        <ul className="space-y-2 text-sm text-foreground/80">
          {after.items.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[var(--brand)]">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function NextProject({
  current,
  all,
}: {
  current: Project;
  all: Project[];
}) {
  const currentIdx = all.findIndex((p) => p.slug === current.slug);
  const next = all[(currentIdx + 1) % all.length];
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 mt-8 border-t border-border">
      <Link href={`/projects/${next.slug}`} className="group block">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
          Next Project · {String(currentIdx + 2).padStart(2, "0")} / {String(all.length).padStart(2, "0")}
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <div className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
              {next.title}
            </div>
            <div className="mt-2 text-muted-foreground">{next.subtitle}</div>
          </div>
          <span className="text-2xl transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </Link>
    </section>
  );
}
