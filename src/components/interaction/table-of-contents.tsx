"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type TOCItem = {
  id: string;
  label: string;
  number: string;
};

export function TableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = React.useState<string>(items[0]?.id ?? "");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the first entry in view (closest to top)
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Case study contents"
      className="hidden lg:block sticky top-24 self-start"
    >
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
        On this page
      </div>
      <ol className="space-y-2 border-l border-border">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "group flex items-baseline gap-3 pl-4 -ml-px border-l text-sm transition-all py-1",
                  isActive
                    ? "border-[var(--brand)] text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground/80",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[10px] tabular-nums transition-colors",
                    isActive ? "text-[var(--brand)]" : "text-muted-foreground/60",
                  )}
                >
                  {item.number}
                </span>
                <span className="text-[13px] leading-snug">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
