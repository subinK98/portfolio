"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type CoverProps = { className?: string };

/**
 * Care-X: 2 phone screens angled on brand gradient background.
 * Designed for both large (featured) and small card variants.
 */
export function CareXCover({ className }: CoverProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[oklch(0.72_0.19_155/0.18)] via-[oklch(0.72_0.19_155/0.06)] to-transparent ${className ?? ""}`}
    >
      {/* Grid backdrop */}
      <div className="absolute inset-0 grid-bg text-[var(--brand)]/25" />

      {/* Brand glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[var(--brand)]/25 blur-3xl" />

      {/* 2 phone screens */}
      <div className="absolute inset-0 flex items-center justify-center gap-3 md:gap-6 p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -6 }}
          whileInView={{ opacity: 1, y: 0, rotate: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-[36%] max-w-[160px] aspect-[9/19.5] rounded-[1.4rem] overflow-hidden ring-1 ring-white/40 shadow-2xl"
        >
          <Image
            src="/images/projects/care-x/app-02-home.png"
            alt="Care-X app home"
            fill
            sizes="200px"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 6 }}
          whileInView={{ opacity: 1, y: 0, rotate: 6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-[36%] max-w-[160px] aspect-[9/19.5] rounded-[1.4rem] overflow-hidden ring-1 ring-white/40 shadow-2xl"
        >
          <Image
            src="/images/projects/care-x/app-03-qr-scan.png"
            alt="Care-X QR scan"
            fill
            sizes="200px"
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Corner badge */}
      <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-[var(--brand)]/90 bg-background/60 backdrop-blur-sm px-2 py-1 rounded-full">
        [ 4-service · QR native ]
      </div>
    </div>
  );
}

/**
 * 중장년고용: Single phone screen centered on blue gradient background.
 */
export function EmploymentCover({ className }: CoverProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-blue-500/[0.12] via-blue-500/[0.04] to-transparent ${className ?? ""}`}
    >
      <div className="absolute inset-0 grid-bg text-blue-500/15" />
      <div className="absolute -top-20 right-0 w-64 h-64 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative h-[130%] max-h-[220px] aspect-[9/19.5] rounded-2xl overflow-hidden ring-1 ring-white/40 shadow-xl"
        >
          <Image
            src="/images/projects/middle-aged-employment/mobile-01-career-list.png"
            alt="중장년내일센터 모바일"
            fill
            sizes="160px"
            className="object-cover object-top"
          />
        </motion.div>
      </div>

      <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-blue-500/90 bg-background/60 backdrop-blur-sm px-2 py-1 rounded-full">
        [ 공공 SI · 모바일 신규 ]
      </div>
    </div>
  );
}

/**
 * PetcareLab: Wide screenshot showing multiple health app screens.
 */
export function PetcareCover({ className }: CoverProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-orange-500/[0.12] via-pink-500/[0.04] to-transparent ${className ?? ""}`}
    >
      <div className="absolute inset-0 grid-bg text-orange-500/15" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-orange-500/15 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="absolute inset-0 flex items-center justify-center p-4"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/projects/petcarelab/ui-screens.png"
            alt="PetcareLab UI screens"
            fill
            sizes="600px"
            className="object-contain object-center"
          />
        </div>
      </motion.div>

      <div className="absolute top-4 left-4 z-10 font-mono text-[10px] uppercase tracking-widest text-orange-600/90 bg-background/70 backdrop-blur-sm px-2 py-1 rounded-full">
        [ healthcare · IA 재설계 ]
      </div>
    </div>
  );
}

/**
 * Baby Monitor: Composite hardware + web UI showing IoT project reality.
 */
export function BabyMonitorCover({ className }: CoverProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-purple-500/[0.12] via-violet-500/[0.04] to-transparent ${className ?? ""}`}
    >
      <div className="absolute inset-0 grid-bg text-purple-500/15" />
      <div className="absolute -top-16 left-0 w-56 h-56 rounded-full bg-purple-500/15 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="absolute inset-0 flex items-center justify-center p-4"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/projects/baby-monitor/hardware-and-ui.png"
            alt="Baby monitor hardware and UI"
            fill
            sizes="600px"
            className="object-contain object-center"
          />
        </div>
      </motion.div>

      <div className="absolute top-4 left-4 z-10 font-mono text-[10px] uppercase tracking-widest text-purple-600/90 bg-background/70 backdrop-blur-sm px-2 py-1 rounded-full">
        [ IoT · HW+SW+Web ]
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
