"use client";

import { motion } from "framer-motion";

/**
 * Baby Monitor system data flow diagram
 * Band → Server → Web / Mobile → Actuator (Mobile)
 */
export function BabyMonitorSystemFlow() {
  return (
    <div className="not-prose my-6 rounded-2xl border border-border bg-card p-6 md:p-10">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-8">
        Data Flow · 밴드 → 서버 → 웹 / 모빌
      </div>

      <svg
        viewBox="0 0 720 340"
        className="w-full h-auto max-h-[420px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker
            id="arrow"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
          </marker>
        </defs>

        {/* Baby (input) */}
        <FlowNode x={40} y={140} width={100} height={60} label="👶 영유아" sub="입력 대상" />

        {/* Band (sensor) */}
        <FlowNode
          x={180}
          y={60}
          width={130}
          height={60}
          label="⌚ 발목 밴드"
          sub="심박·체온·자세"
          accent
        />
        {/* Camera+Deep learning */}
        <FlowNode
          x={180}
          y={220}
          width={130}
          height={60}
          label="🎥 카메라 + DL"
          sub="울음 분석"
          accent
        />

        {/* Server */}
        <FlowNode
          x={370}
          y={140}
          width={130}
          height={60}
          label="☁ 서버"
          sub="센싱 데이터 통합"
          brand
        />

        {/* Web UI */}
        <FlowNode
          x={560}
          y={40}
          width={130}
          height={60}
          label="🖥 웹 UI (React)"
          sub="실시간 모니터링"
        />
        {/* Alert / SMS */}
        <FlowNode
          x={560}
          y={140}
          width={130}
          height={60}
          label="🔔 알림 전송"
          sub="상태 이상 시"
        />
        {/* Mobile actuator */}
        <FlowNode
          x={560}
          y={240}
          width={130}
          height={60}
          label="🎵 모빌 제어"
          sub="자동 회전"
        />

        {/* Arrows */}
        <g
          stroke="oklch(0.72 0.19 155 / 0.6)"
          strokeWidth="1.5"
          fill="none"
          markerEnd="url(#arrow)"
          className="text-[var(--brand)]"
        >
          <AnimatedPath d="M 140 160 L 175 95" delay={0.2} />
          <AnimatedPath d="M 140 185 L 175 245" delay={0.3} />
          <AnimatedPath d="M 310 95 L 365 155" delay={0.5} />
          <AnimatedPath d="M 310 245 L 365 185" delay={0.6} />
          <AnimatedPath d="M 500 155 L 555 80" delay={0.8} />
          <AnimatedPath d="M 500 170 L 555 170" delay={0.9} />
          <AnimatedPath d="M 500 185 L 555 260" delay={1.0} />
        </g>
      </svg>

      <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
        <LegendDot color="oklch(0.72 0.19 155)" label="Sensor" />
        <LegendDot color="oklch(0.72 0.19 155 / 0.6)" label="Backend" />
        <LegendDot color="var(--border)" label="Output" />
      </div>
    </div>
  );
}

function FlowNode({
  x,
  y,
  width,
  height,
  label,
  sub,
  accent = false,
  brand = false,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  sub?: string;
  accent?: boolean;
  brand?: boolean;
}) {
  const fill = brand
    ? "oklch(0.72 0.19 155 / 0.12)"
    : accent
      ? "oklch(0.72 0.19 155 / 0.06)"
      : "var(--background)";
  const stroke = brand
    ? "oklch(0.72 0.19 155 / 0.5)"
    : accent
      ? "oklch(0.72 0.19 155 / 0.3)"
      : "var(--border)";

  return (
    <motion.g
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="10"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
      />
      <text
        x={x + width / 2}
        y={y + height / 2 - (sub ? 6 : 0)}
        textAnchor="middle"
        fontSize="13"
        fontWeight="500"
        className="fill-foreground"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + width / 2}
          y={y + height / 2 + 14}
          textAnchor="middle"
          fontSize="10"
          fontFamily="ui-monospace, monospace"
          className="fill-muted-foreground"
        >
          {sub}
        </text>
      )}
    </motion.g>
  );
}

function AnimatedPath({ d, delay }: { d: string; delay: number }) {
  return (
    <motion.path
      d={d}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    />
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
      <span
        className="w-2.5 h-2.5 rounded-sm"
        style={{ background: color }}
      />
      <span className="font-mono">{label}</span>
    </div>
  );
}
