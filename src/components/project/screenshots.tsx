"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Screenshot presented as a phone screen with subtle chrome and shadow.
 * The image should already contain the phone status bar area (9:41 etc).
 */
export function PhoneShot({
  src,
  alt,
  label,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center ${className}`}
    >
      <div className="relative w-full max-w-[240px] aspect-[9/19.5] rounded-[2.2rem] overflow-hidden ring-1 ring-border shadow-xl bg-card">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 45vw, 240px"
          className="object-cover"
          priority={priority}
        />
      </div>
      {label && (
        <div className="mt-3 text-xs text-muted-foreground font-mono text-center max-w-[220px]">
          {label}
        </div>
      )}
    </motion.div>
  );
}

/**
 * Row / grid of phone shots.
 */
export function PhoneShotGrid({
  items,
  cols = 4,
}: {
  items: { src: string; alt: string; label?: string }[];
  cols?: 2 | 3 | 4 | 5;
}) {
  const gridClass =
    cols === 5
      ? "grid-cols-2 md:grid-cols-5"
      : cols === 4
        ? "grid-cols-2 md:grid-cols-4"
        : cols === 3
          ? "grid-cols-2 md:grid-cols-3"
          : "grid-cols-2";

  return (
    <div className={`not-prose my-6 grid ${gridClass} gap-4 md:gap-6`}>
      {items.map((item, i) => (
        <PhoneShot key={i} {...item} />
      ))}
    </div>
  );
}

/**
 * Admin/desktop screenshot with browser chrome (macOS style).
 */
export function BrowserShot({
  src,
  alt,
  label,
  url,
  className = "",
}: {
  src: string;
  alt: string;
  label?: string;
  url?: string;
  className?: string;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className={`not-prose my-6 ${className}`}
    >
      <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/60">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          {url && (
            <div className="ml-3 flex-1 px-3 py-1 rounded-md bg-background/60 font-mono text-[11px] text-muted-foreground truncate">
              {url}
            </div>
          )}
        </div>
        <div className="relative aspect-[16/10] bg-background">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover object-top"
          />
        </div>
      </div>
      {label && (
        <figcaption className="mt-3 text-xs text-muted-foreground text-center font-mono">
          {label}
        </figcaption>
      )}
    </motion.figure>
  );
}

/**
 * Generic figure - full-width image (e.g. a reference photo, diagram export).
 */
export function ImageFigure({
  src,
  alt,
  label,
  aspect = "16/10",
  contain = false,
}: {
  src: string;
  alt: string;
  label?: string;
  aspect?: string;
  contain?: boolean;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="not-prose my-6"
    >
      <div
        className="relative rounded-2xl overflow-hidden border border-border bg-card"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 800px"
          className={contain ? "object-contain" : "object-cover"}
        />
      </div>
      {label && (
        <figcaption className="mt-3 text-xs text-muted-foreground text-center font-mono">
          {label}
        </figcaption>
      )}
    </motion.figure>
  );
}

/**
 * Two-column mockup comparison (Before/After).
 */
export function ScreenshotBeforeAfter({
  before,
  after,
  type = "phone",
}: {
  before: { src: string; alt: string; label?: string };
  after: { src: string; alt: string; label?: string };
  type?: "phone" | "browser";
}) {
  const Component = type === "phone" ? PhoneShot : ImageFigure;
  return (
    <div className="not-prose my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3 text-center">
          Before
        </div>
        <Component {...before} />
      </div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--brand)] mb-3 text-center">
          After
        </div>
        <Component {...after} />
      </div>
    </div>
  );
}
