"use client";

import { motion } from "framer-motion";

/**
 * Middle-aged Employment: Communication channel comparison
 * Before: many disparate sources → 나 (chaos)
 * After: 나 → single channel → stakeholders (order)
 */
export function ChannelFlowCompare() {
  return (
    <div className="not-prose my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Before */}
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
          Before · 분산된 소통
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 min-h-[200px]">
          {/* Left: multiple sources */}
          <div className="space-y-2">
            {[
              { icon: "📞", label: "구두" },
              { icon: "💬", label: "메신저" },
              { icon: "📧", label: "이메일" },
              { icon: "👥", label: "PM · 개발자" },
              { icon: "🏢", label: "사업 관계자" },
            ].map((source, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2 rounded-md border border-border bg-background px-2 py-1.5 text-xs"
              >
                <span>{source.icon}</span>
                <span className="text-foreground/80">{source.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Arrows converging */}
          <div className="relative flex flex-col items-center gap-1 text-muted-foreground text-lg">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05 }}
              >
                →
              </motion.span>
            ))}
          </div>

          {/* Right: overwhelmed me */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-2 border-amber-500/40 bg-amber-500/5 flex items-center justify-center">
                <span className="text-3xl">🥵</span>
              </div>
              <div className="mt-2 text-center text-xs font-medium">기획자</div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-border/60 text-center">
          <div className="text-xs text-muted-foreground">
            히스토리 추적 어려움 · 재작성 반복
          </div>
        </div>
      </div>

      {/* After */}
      <div className="rounded-2xl border border-[var(--brand)]/30 bg-[var(--brand)]/[0.03] p-6 md:p-8">
        <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--brand)] mb-6">
          After · 단일 채널
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 min-h-[200px]">
          {/* Left: focused me */}
          <div className="flex justify-center">
            <div>
              <div className="w-20 h-20 rounded-full border-2 border-[var(--brand)]/40 bg-[var(--brand)]/10 flex items-center justify-center">
                <span className="text-3xl">😌</span>
              </div>
              <div className="mt-2 text-center text-xs font-medium">기획자</div>
              <div className="text-center text-[10px] text-muted-foreground font-mono">
                Email + Phone
              </div>
            </div>
          </div>

          {/* Single arrow */}
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-4xl text-[var(--brand)]"
            >
              →
            </motion.div>
          </div>

          {/* Right: stakeholders */}
          <div className="flex flex-col items-center gap-2">
            <motion.div
              initial={{ opacity: 0, x: 6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center gap-2 rounded-lg border border-[var(--brand)]/20 bg-background px-4 py-3"
            >
              <span className="text-2xl">🏢</span>
              <span className="text-xs font-medium">사업 관계자</span>
              <span className="text-[10px] text-muted-foreground">
                (PM · 개발자 포함)
              </span>
            </motion.div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[var(--brand)]/20 text-center">
          <div className="text-xs text-foreground/80">
            히스토리 · 일정 관리 일원화
          </div>
        </div>
      </div>
    </div>
  );
}
