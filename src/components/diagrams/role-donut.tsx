"use client";

import * as React from "react";
import { motion } from "framer-motion";

type Slice = {
  label: string;
  value: number;
  color: string;
};

export function RoleDonut({
  slices,
  centerLabel = "My Role",
  centerValue = "100%",
}: {
  slices: Slice[];
  centerLabel?: string;
  centerValue?: string;
}) {
  const total = slices.reduce((s, x) => s + x.value, 0);
  const radius = 70;
  const stroke = 18;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="not-prose my-6 rounded-2xl border border-border bg-card p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Donut chart */}
        <div className="relative flex justify-center">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="-rotate-90"
          >
            {/* Background ring */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke="var(--border)"
              strokeWidth={stroke}
            />
            {slices.map((slice, i) => {
              const length = (slice.value / total) * circumference;
              const dash = `${length} ${circumference}`;
              const currentOffset = offset;
              offset += length;
              return (
                <motion.circle
                  key={slice.label}
                  cx="100"
                  cy="100"
                  r={radius}
                  fill="none"
                  stroke={slice.color}
                  strokeWidth={stroke}
                  strokeDasharray={dash}
                  strokeDashoffset={-currentOffset}
                  strokeLinecap="butt"
                  initial={{ opacity: 0, pathLength: 0 }}
                  whileInView={{ opacity: 1, pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                />
              );
            })}
          </svg>
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-3xl font-medium tracking-tight">
              {centerValue}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
              {centerLabel}
            </div>
          </div>
        </div>

        {/* Legend */}
        <ul className="space-y-3">
          {slices.map((slice, i) => (
            <motion.li
              key={slice.label}
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <span
                className="w-3 h-3 rounded-sm shrink-0"
                style={{ background: slice.color }}
              />
              <div className="flex-1 flex items-baseline justify-between gap-2 border-b border-border pb-2">
                <span className="text-sm">{slice.label}</span>
                <span className="font-mono text-sm tabular-nums font-medium">
                  {slice.value}%
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
