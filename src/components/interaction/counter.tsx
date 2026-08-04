"use client";

import * as React from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

/**
 * Extracts numeric portion and suffix from a display string.
 * Examples: "33%" → { num: 33, suffix: "%" }, "10 → 1" → passthrough
 */
function parseMetric(value: string): { num: number | null; prefix: string; suffix: string } {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { num: null, prefix: value, suffix: "" };
  const [, prefix, num, suffix] = match;
  return { num: Number(num), prefix, suffix };
}

export function Counter({
  value,
  className = "",
  duration = 1.4,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const parsed = React.useMemo(() => parseMetric(value), [value]);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    parsed.num !== null && Number.isInteger(parsed.num)
      ? Math.round(latest).toString()
      : latest.toFixed(1),
  );

  React.useEffect(() => {
    if (!inView || parsed.num === null) return;
    const controls = animate(count, parsed.num, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, parsed.num, count, duration]);

  if (parsed.num === null) {
    return <span ref={ref} className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      <motion.span>{rounded}</motion.span>
      {parsed.suffix}
    </span>
  );
}
