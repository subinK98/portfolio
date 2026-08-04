"use client";

import { motion } from "framer-motion";

type CoverProps = { className?: string };

export function CareXCover({ className }: CoverProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[oklch(0.72_0.19_155/0.15)] via-[oklch(0.72_0.19_155/0.05)] to-transparent ${className ?? ""}`}
    >
      {/* Grid backdrop */}
      <div className="absolute inset-0 grid-bg text-[var(--brand)]/20" />

      {/* 4 service nodes with connecting lines */}
      <svg
        viewBox="0 0 400 240"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Connecting lines */}
        <g stroke="oklch(0.72 0.19 155 / 0.35)" strokeWidth="1" fill="none">
          <path d="M 90 60 L 200 120 L 310 60" />
          <path d="M 90 180 L 200 120 L 310 180" />
          <path d="M 90 60 L 90 180" strokeDasharray="3 3" />
          <path d="M 310 60 L 310 180" strokeDasharray="3 3" />
        </g>
        {/* Center hub */}
        <circle cx="200" cy="120" r="18" fill="oklch(0.72 0.19 155)" opacity="0.9" />
        <circle cx="200" cy="120" r="28" fill="none" stroke="oklch(0.72 0.19 155)" strokeWidth="1" opacity="0.5">
          <animate attributeName="r" values="28;44;28" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* 4 corner nodes */}
        {[
          { x: 90, y: 60, label: "App" },
          { x: 310, y: 60, label: "Kiosk" },
          { x: 90, y: 180, label: "Store" },
          { x: 310, y: 180, label: "Admin" },
        ].map((node) => (
          <g key={node.label}>
            <circle
              cx={node.x}
              cy={node.y}
              r="10"
              fill="var(--card)"
              stroke="oklch(0.72 0.19 155)"
              strokeWidth="1.5"
            />
            <text
              x={node.x}
              y={node.y + 26}
              textAnchor="middle"
              className="fill-current text-[var(--brand)]"
              fontSize="10"
              fontFamily="monospace"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Corner badge */}
      <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-[var(--brand)]/80">
        [ 4-service architecture ]
      </div>
    </div>
  );
}

export function EmploymentCover({ className }: CoverProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-blue-500/[0.08] via-blue-500/[0.02] to-transparent ${className ?? ""}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Mobile frame with issue count animation */}
        <div className="flex items-end gap-4 md:gap-8">
          {[10, 7, 4, 2, 1].map((count, i) => (
            <motion.div
              key={i}
              initial={{ height: 0, opacity: 0 }}
              whileInView={{
                height: `${count * 10}px`,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="w-8 md:w-10 rounded-t-md bg-gradient-to-t from-blue-500/40 to-blue-500/60 relative"
            >
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 font-mono text-[10px] text-muted-foreground">
                {count}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-blue-500/80">
        [ 리뷰 이슈 10 → 1 ]
      </div>
    </div>
  );
}

export function PetcareCover({ className }: CoverProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-orange-500/[0.08] via-pink-500/[0.03] to-transparent ${className ?? ""}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Health status dots grid */}
        <div className="grid grid-cols-8 gap-1.5">
          {Array.from({ length: 40 }).map((_, i) => {
            const status = i % 7 === 0 ? "danger" : i % 4 === 0 ? "warn" : "ok";
            const color =
              status === "danger"
                ? "bg-red-400/60"
                : status === "warn"
                  ? "bg-amber-400/60"
                  : "bg-emerald-400/50";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.015,
                  ease: "easeOut",
                }}
                className={`w-3 h-3 rounded-sm ${color}`}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-orange-500/80">
        [ health signals ]
      </div>
    </div>
  );
}

export function BabyMonitorCover({ className }: CoverProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-purple-500/[0.08] via-violet-500/[0.02] to-transparent ${className ?? ""}`}
    >
      <div className="absolute inset-0 flex items-center justify-center px-8">
        {/* Heartbeat waveform */}
        <svg
          viewBox="0 0 400 100"
          className="w-full max-w-md"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M 0 50 L 40 50 L 55 50 L 70 20 L 85 80 L 100 40 L 115 50 L 180 50 L 195 50 L 210 30 L 225 70 L 240 50 L 320 50 L 335 10 L 350 90 L 365 50 L 400 50"
            fill="none"
            stroke="oklch(0.6 0.2 300)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-purple-500/80">
        [ vital signs ]
      </div>
    </div>
  );
}

export function ProjectCover({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  switch (slug) {
    case "care-x":
      return <CareXCover className={className} />;
    case "middle-aged-employment":
      return <EmploymentCover className={className} />;
    case "petcarelab":
      return <PetcareCover className={className} />;
    case "baby-monitor":
      return <BabyMonitorCover className={className} />;
    default:
      return null;
  }
}
