"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = false,
  className,
  speed = 40,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  speed?: number;
}) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:2rem] [gap:var(--gap)]",
        className,
      )}
      style={
        {
          "--duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 [gap:var(--gap)] animate-marquee",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
