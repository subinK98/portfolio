"use client";

import { motion } from "framer-motion";

export type MatrixCell = "full" | "partial" | "none";

export type MatrixRow = {
  label: string;
  cells: MatrixCell[];
  highlight?: boolean;
};

export function ComparisonMatrix({
  columns,
  rows,
  caption,
}: {
  columns: string[];
  rows: MatrixRow[];
  caption?: string;
}) {
  return (
    <div className="not-prose my-6 rounded-2xl border border-border bg-card p-6 md:p-8 overflow-x-auto">
      <table className="w-full min-w-[500px]">
        <thead>
          <tr>
            <th className="text-left pb-4 pr-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-normal w-[30%]">
              &nbsp;
            </th>
            {columns.map((col) => (
              <th
                key={col}
                className="pb-4 px-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-normal text-center"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <motion.tr
              key={row.label}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`border-t border-border ${
                row.highlight ? "bg-[var(--brand)]/[0.04]" : ""
              }`}
            >
              <td
                className={`py-4 pr-4 text-sm font-medium ${
                  row.highlight ? "text-[var(--brand)]" : ""
                }`}
              >
                {row.highlight && (
                  <span className="mr-2 font-mono text-[9px]">▸</span>
                )}
                {row.label}
              </td>
              {row.cells.map((cell, j) => (
                <td key={j} className="py-4 px-2 text-center">
                  <CellIcon type={cell} highlight={row.highlight} />
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
      {caption && (
        <p className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground text-center font-mono">
          {caption}
        </p>
      )}
    </div>
  );
}

function CellIcon({
  type,
  highlight,
}: {
  type: MatrixCell;
  highlight?: boolean;
}) {
  if (type === "full") {
    return (
      <span
        className={`inline-block w-4 h-4 rounded-full ${
          highlight ? "bg-[var(--brand)]" : "bg-foreground"
        }`}
      />
    );
  }
  if (type === "partial") {
    return (
      <span
        className={`inline-block w-4 h-4 rounded-full border-2 ${
          highlight
            ? "border-[var(--brand)] bg-[var(--brand)]/20"
            : "border-foreground bg-foreground/20"
        }`}
      />
    );
  }
  return (
    <span className="inline-block w-4 h-4 text-muted-foreground/50">
      <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
        <path
          d="M4 4L12 12M12 4L4 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
