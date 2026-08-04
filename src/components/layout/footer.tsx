import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.nameKo} · Built with Claude Code
        </div>
        <div className="flex items-center gap-6 font-mono text-xs text-muted-foreground">
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-foreground transition-colors"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
