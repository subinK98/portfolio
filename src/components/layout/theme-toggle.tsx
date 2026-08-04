"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && (resolvedTheme ?? theme) === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group relative inline-flex h-9 w-16 items-center rounded-full border border-border bg-secondary/50 transition-colors hover:bg-secondary",
        className,
      )}
    >
      <span
        className={cn(
          "absolute top-1 h-7 w-7 rounded-full bg-foreground shadow-sm transition-all duration-300",
          isDark ? "left-8" : "left-1",
        )}
      />
      <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-[10px] font-mono font-medium text-muted-foreground">
        {!isDark ? "" : "L"}
      </span>
      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-mono font-medium text-muted-foreground">
        {isDark ? "" : "D"}
      </span>
    </button>
  );
}
