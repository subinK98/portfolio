"use client";

import { motion } from "framer-motion";

type Member = {
  role: string;
  count: number;
  self?: boolean;
};

export function TeamDiagram({
  lead,
  members,
  caption,
}: {
  lead?: Member;
  members: Member[];
  caption?: string;
}) {
  return (
    <div className="not-prose my-6 rounded-2xl border border-border bg-card p-8 md:p-10">
      {/* Lead node */}
      {lead && (
        <div className="flex flex-col items-center">
          <MemberNode member={lead} />
          {/* Vertical connector */}
          <div className="h-6 w-px bg-border" />
        </div>
      )}

      {/* Horizontal connector between children */}
      {lead && members.length > 1 && (
        <div className="relative mx-auto max-w-4xl">
          <div
            className="absolute left-[10%] right-[10%] top-0 h-px bg-border"
            aria-hidden
          />
        </div>
      )}

      {/* Team members grid */}
      <div className={`grid gap-3 ${gridColsFor(members.length)}`}>
        {members.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col items-center"
          >
            {lead && <div className="h-6 w-px bg-border" />}
            <MemberNode member={member} />
          </motion.div>
        ))}
      </div>

      {caption && (
        <p className="mt-6 pt-6 border-t border-border text-xs text-muted-foreground text-center font-mono">
          {caption}
        </p>
      )}
    </div>
  );
}

function MemberNode({ member }: { member: Member }) {
  return (
    <div className="relative">
      {member.self && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest rounded-full bg-[var(--brand)] text-background whitespace-nowrap">
          You
        </span>
      )}
      <div
        className={`min-w-[110px] rounded-xl border px-4 py-3 text-center ${
          member.self
            ? "border-[var(--brand)]/40 bg-[var(--brand)]/[0.08] shadow-lg shadow-[var(--brand)]/10"
            : "border-border bg-background"
        }`}
      >
        <div className="text-sm font-medium">{member.role}</div>
        <div className="mt-1 font-mono text-[10px] text-muted-foreground">
          × {member.count}
        </div>
      </div>
    </div>
  );
}

function gridColsFor(n: number): string {
  if (n <= 2) return "grid-cols-2 max-w-md mx-auto";
  if (n === 3) return "grid-cols-3 max-w-xl mx-auto";
  if (n === 4) return "grid-cols-2 md:grid-cols-4 max-w-2xl mx-auto";
  return "grid-cols-2 md:grid-cols-5 max-w-3xl mx-auto";
}
