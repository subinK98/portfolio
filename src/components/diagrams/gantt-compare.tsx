"use client";

import { motion } from "framer-motion";

type GanttBar = {
  label: string;
  units: number; // e.g. weeks or months
  color: "muted" | "brand";
  sublabel?: string;
};

export function GanttCompare({
  bars,
  unit = "개월",
  maxUnits,
  highlight,
  caption,
}: {
  bars: GanttBar[];
  unit?: string;
  maxUnits?: number;
  highlight?: string;
  caption?: string;
}) {
  const max = maxUnits ?? Math.max(...bars.map((b) => b.units));
  const scale = Array.from({ length: max }, (_, i) => i + 1);

  return (
    <div className="not-prose my-6 rounded-2xl border border-border bg-card p-6 md:p-8">
      {/* Scale header */}
      <div className="relative mb-4 pl-24 md:pl-32">
        <div className="grid" style={{ gridTemplateColumns: `repeat(${max}, 1fr)` }}>
          {scale.map((s) => (
            <div
              key={s}
              className="text-center font-mono text-[10px] text-muted-foreground/60 border-l border-border/40 last:border-r pl-1 py-1"
            >
              {s}{unit}
            </div>
          ))}
        </div>
      </div>

      {/* Bars */}
      <div className="space-y-4">
        {bars.map((bar, i) => (
          <div key={bar.label} className="flex items-center gap-4">
            <div className="w-20 md:w-28 shrink-0 text-right">
              <div className="text-sm font-medium leading-tight">
                {bar.label}
              </div>
              {bar.sublabel && (
                <div className="text-[10px] text-muted-foreground font-mono">
                  {bar.sublabel}
                </div>
              )}
            </div>
            <div className="flex-1 relative h-10">
              {/* Background track */}
              <div className="absolute inset-0 rounded-md bg-border/30" />
              {/* Bar */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(bar.units / max) * 100}%` }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`absolute inset-y-0 left-0 rounded-md flex items-center justify-end px-3 ${
                  bar.color === "brand"
                    ? "bg-gradient-to-r from-[var(--brand)]/70 to-[var(--brand)]"
                    : "bg-secondary"
                }`}
              >
                <span
                  className={`font-mono text-xs font-medium ${
                    bar.color === "brand"
                      ? "text-background"
                      : "text-foreground/70"
                  }`}
                >
                  {bar.units}{unit}
                </span>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {highlight && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-6 pt-4 border-t border-border flex items-center justify-center gap-2"
        >
          <span className="text-lg text-[var(--brand)]">↓</span>
          <span className="text-sm font-medium">{highlight}</span>
        </motion.div>
      )}

      {caption && (
        <p className="mt-4 text-xs text-muted-foreground text-center font-mono">
          {caption}
        </p>
      )}
    </div>
  );
}
