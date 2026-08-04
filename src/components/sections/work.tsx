"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { allProjects, type Project } from "@/lib/projects";

const statusLabel: Record<Project["status"], string> = {
  shipped: "Shipped",
  "mvp-complete": "MVP Complete",
  "not-launched": "Not Launched",
  student: "Team Project",
};

const statusColor: Record<Project["status"], string> = {
  shipped: "bg-[var(--brand)]/20 text-[var(--brand)] border-[var(--brand)]/30",
  "mvp-complete":
    "bg-[var(--brand)]/20 text-[var(--brand)] border-[var(--brand)]/30",
  "not-launched": "bg-muted text-muted-foreground border-border",
  student: "bg-muted text-muted-foreground border-border",
};

export function Work() {
  const projects = allProjects();
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex items-baseline gap-4"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          / 02
        </span>
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
          Selected Work
        </h2>
      </motion.div>

      {/* Featured project - large hero card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <ProjectCard project={featured} featured />
      </motion.div>

      {/* Rest of projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rest.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );

  function ProjectCard({
    project,
    featured = false,
  }: {
    project: Project;
    featured?: boolean;
  }) {
    return (
      <Link
        href={`/projects/${project.slug}`}
        className={`group relative block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-foreground/30 ${
          featured ? "p-8 md:p-12" : "p-6 md:p-8"
        }`}
      >
        {/* Top row: period, status */}
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">
            {project.period}
          </span>
          <span
            className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest rounded-full border ${statusColor[project.status]}`}
          >
            {statusLabel[project.status]}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-medium tracking-tight leading-tight ${
            featured ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`mt-2 text-muted-foreground ${
            featured ? "text-lg md:text-xl" : "text-sm"
          }`}
        >
          {project.subtitle}
        </p>

        {/* Tagline */}
        <p
          className={`text-foreground/80 leading-relaxed text-pretty ${
            featured ? "mt-8 text-base md:text-lg max-w-xl" : "mt-6 text-sm"
          }`}
        >
          {project.tagline}
        </p>

        {/* Metrics */}
        {featured && (
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="text-2xl md:text-3xl font-medium tracking-tight">
                  {m.value}
                </div>
                <div className="mt-1 text-[11px] text-muted-foreground leading-snug">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.tags.slice(0, featured ? 4 : 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <div className="mt-8 flex items-center gap-2 text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
          <span>Read case study</span>
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </Link>
    );
  }
}
