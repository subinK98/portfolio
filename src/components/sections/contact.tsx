"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4 rounded-2xl border border-border bg-card p-10 md:p-14"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            / 04 · Contact
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-balance">
            흥미로운 프로젝트에
            <br />
            <span className="italic font-serif">함께</span>하고 싶어요.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-md text-pretty">
            채용 · 협업 · 커피챗 무엇이든 편하게 연락 주세요. 보통 24시간 이내에
            답변드립니다.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-10 inline-flex items-center gap-3 group"
          >
            <span className="text-xl md:text-2xl font-mono underline underline-offset-4 decoration-muted-foreground group-hover:decoration-foreground transition-colors">
              {siteConfig.email}
            </span>
            <span className="text-xl transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2 flex flex-col gap-4"
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="group flex-1 rounded-2xl border border-border bg-card p-6 hover:border-foreground/30 transition-colors flex flex-col justify-between"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              GitHub
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-medium">코드 저장소</span>
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </div>
          </a>
          <div className="flex-1 rounded-2xl border border-border bg-card p-6 flex flex-col justify-between">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Location
            </div>
            <div className="mt-4 text-lg font-medium">
              {siteConfig.location}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
