"use client";

import { motion } from "framer-motion";

/**
 * Full architecture diagram showing 4 services + users + data flow
 */
export function CareXArchitecture() {
  return (
    <div className="not-prose my-8 rounded-2xl border border-border bg-card p-6 md:p-10">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
        System Architecture
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
        {/* Left column: User-facing */}
        <div className="space-y-3">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--brand)] mb-3">
            User-Facing
          </div>
          <ServiceNode
            title="고객 앱"
            desc="QR 스캔 · 결제"
            iconContent="📱"
            accent
          />
          <ServiceNode
            title="키오스크"
            desc="매장 앞 결제 접점"
            iconContent="🖥️"
            accent
          />
        </div>

        {/* Center: Backend */}
        <div className="flex flex-col items-center gap-3">
          <div className="hidden lg:block h-px w-16 bg-gradient-to-r from-transparent via-[var(--brand)]/40 to-transparent" />
          <div className="rounded-2xl border-2 border-dashed border-[var(--brand)]/40 bg-[var(--brand)]/5 p-6 text-center min-w-[140px]">
            <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-2">
              Backend / API
            </div>
            <div className="font-medium text-sm">Care-X Server</div>
            <div className="mt-3 flex justify-center gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]"
                />
              ))}
            </div>
          </div>
          <div className="hidden lg:block h-px w-16 bg-gradient-to-r from-transparent via-[var(--brand)]/40 to-transparent" />
        </div>

        {/* Right column: Operator */}
        <div className="space-y-3">
          <div className="font-mono text-[10px] uppercase tracking-widest text-blue-500 mb-3 lg:text-right">
            Operator
          </div>
          <ServiceNode
            title="점주 어드민"
            desc="상품·기기·결제 승인"
            iconContent="🏪"
          />
          <ServiceNode
            title="관리자 어드민"
            desc="가맹점·정책 통제"
            iconContent="⚙️"
          />
        </div>
      </div>

      {/* Caption */}
      <p className="mt-8 pt-6 border-t border-border text-xs text-muted-foreground text-center font-mono">
        하나의 백엔드가 4개 인터페이스를 유기적으로 연결
      </p>
    </div>
  );
}

function ServiceNode({
  title,
  desc,
  iconContent,
  accent = false,
}: {
  title: string;
  desc: string;
  iconContent: string;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: accent ? -12 : 12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-3 rounded-xl border p-4 ${
        accent
          ? "border-[var(--brand)]/30 bg-[var(--brand)]/[0.04]"
          : "border-blue-500/20 bg-blue-500/[0.03]"
      }`}
    >
      <div className="text-2xl">{iconContent}</div>
      <div className="flex-1">
        <div className="font-medium text-sm">{title}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
    </motion.div>
  );
}

/**
 * QR flow diagram - horizontal step flow
 */
export function CareXFlow() {
  const steps = [
    { icon: "📷", label: "QR 스캔", detail: "매장 QR 스티커" },
    { icon: "🛍️", label: "상품 확인", detail: "점주 설정 상품" },
    { icon: "💳", label: "앱 결제", detail: "카드/간편결제" },
    { icon: "✅", label: "점주 승인", detail: "어드민에서" },
    { icon: "🚿", label: "세차 시작", detail: "" },
  ];

  return (
    <div className="not-prose my-8 rounded-2xl border border-border bg-card p-6 md:p-8 overflow-hidden">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
        User Flow · 카드 없이 세차 완결
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-2 overflow-x-auto">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-3 flex-1">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex-1 min-w-0 rounded-xl border border-border bg-background p-4 text-center"
            >
              <div className="text-2xl mb-2">{step.icon}</div>
              <div className="font-medium text-sm mb-0.5">{step.label}</div>
              {step.detail && (
                <div className="text-[10px] text-muted-foreground">
                  {step.detail}
                </div>
              )}
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                className="hidden md:block text-[var(--brand)] text-lg"
              >
                →
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * AI development story visualization - two boxes showing before/after
 */
export function AIDevJourney() {
  return (
    <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* 1st attempt */}
      <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.03] p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs font-mono font-bold">
            1
          </span>
          <span className="font-medium text-sm">점주어드민 · 시행착오</span>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-amber-500">×</span>
            <span className="text-muted-foreground">원하는 디자인 안 나옴</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-500">×</span>
            <span className="text-muted-foreground">기능 구현 실패</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-500">×</span>
            <span className="text-muted-foreground">프롬프트 수정 반복</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-amber-500/20">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Learning
          </div>
          <div className="text-xs mt-1">
            컨벤션 학습이 프롬프트보다 먼저다
          </div>
        </div>
      </div>

      {/* 2nd attempt */}
      <div className="rounded-2xl border border-[var(--brand)]/30 bg-[var(--brand)]/[0.05] p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-6 rounded-full bg-[var(--brand)]/20 text-[var(--brand)] flex items-center justify-center text-xs font-mono font-bold">
            2
          </span>
          <span className="font-medium text-sm">관리자어드민 · 적용</span>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[var(--brand)]">✓</span>
            <span>세분화된 프롬프트 설계</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--brand)]">✓</span>
            <span>대부분 1회 시도로 구현</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--brand)]">✓</span>
            <span>팀 컨벤션 자동 준수</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[var(--brand)]/20">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Outcome
          </div>
          <div className="text-xs mt-1">
            개발 리드타임 33% 단축
          </div>
        </div>
      </div>
    </div>
  );
}
