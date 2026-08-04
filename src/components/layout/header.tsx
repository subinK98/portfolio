"use client";

import Link from "next/link";
import { navigation, siteConfig } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight hover:opacity-70 transition-opacity"
        >
          {siteConfig.name.toLowerCase().replace(" ", ".")}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
