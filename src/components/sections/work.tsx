"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { allProjects, type Project } from "@/lib/projects";
import { ProjectCover } from "@/components/project/project-cover";
import { Counter } from "@/components/interaction/counter";

const statusLabel: Record<Project["status"], string> = {
  shipped: "Shipped",
  "mvp-complete": "MVP Complete",
  "not-launched": "Not Launched",
  student: "Team Project",
};

export function Work() {
  const projects = allProjects();
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex items-end justify-between gap-4"
      >
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            / 02 · Selected Work
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-medium tracking-tight leading-tight text-balance">
            리소스가 부족할수록,
            <br />
            <span className="text-muted-foreground">
              실행력이 결과를 만든다.
            </span>
          </h2>
        </div>
      </motion.div>

      {/* Featured project - hero card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-5"
      >
        <FeaturedCard project={featured} />
      </motion.div>

      {/* Rest of projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <SmallCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-3xl border border-border bg-card transition-all hover:border-foreground/30 hover:shadow-2xl hover:shadow-[var(--brand)]/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        {/* Cover area */}
        <div className="lg:col-span-3 relative h-64 lg:h-auto lg:min-h-[440px]">
          <ProjectCover slug={project.slug} className="absolute inset-0" />
        </div>

        {/* Content */}
        <div className="lg:col-span-2 p-8 md:p-10 flex flex-col justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest rounded-full bg-[var(--brand)] text-background">
                Featured
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest rounded-full border border-border text-muted-foreground">
                {statusLabel[project.status]}
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-none mb-3">
              {project.title}
            </h3>
            <p className="text-lg text-muted-foreground">{project.subtitle}</p>

            <p className="mt-6 text-sm text-foreground/80 leading-relaxed text-pretty">
              {project.tagline}
            </p>
          </div>

          <div>
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pb-6 border-b border-border">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <Counter
                    value={m.value}
                    className="block text-2xl font-medium tracking-tight text-[var(--brand)]"
                  />
                  <div className="mt-1 text-[10px] text-muted-foreground leading-snug">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Meta row */}
            <div className="mt-5 flex items-center justify-between text-xs">
              <span className="font-mono text-muted-foreground">
                {project.period} · {project.company}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-foreground/70 group-hover:text-foreground transition-colors">
                Case study
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function SmallCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-foreground/30 hover:-translate-y-1"
    >
      <div className="relative h-40 overflow-hidden">
        <ProjectCover slug={project.slug} className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest rounded-full border border-border text-muted-foreground">
            {statusLabel[project.status]}
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">
            {project.period}
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-medium tracking-tight leading-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
            {project.subtitle}
          </p>
        </div>
        <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2">
          {project.tagline}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-mono text-[10px] text-muted-foreground">
            {project.company}
          </span>
          <span className="text-lg text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
