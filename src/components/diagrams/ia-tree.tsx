"use client";

import { motion } from "framer-motion";

type TreeNode = {
  label: string;
  icon?: string;
  accent?: boolean;
  children?: TreeNode[];
};

export function IATree({
  root,
  caption,
}: {
  root: TreeNode;
  caption?: string;
}) {
  return (
    <div className="not-prose my-6 rounded-2xl border border-border bg-card p-6 md:p-10 overflow-x-auto">
      <div className="min-w-[560px]">
        {/* Root node */}
        <div className="flex justify-center">
          <NodeBox node={root} depth={0} />
        </div>

        {/* Connectors + children */}
        {root.children && root.children.length > 0 && (
          <>
            {/* Vertical line down from root */}
            <div className="flex justify-center">
              <div className="w-px h-8 bg-border" />
            </div>

            {/* Horizontal line + child nodes */}
            <div className="relative">
              {/* Horizontal connector */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="absolute left-[calc(50%/var(--cols,3))] right-[calc(50%/var(--cols,3))] top-0 h-px bg-border"
                style={
                  {
                    "--cols": root.children.length,
                  } as React.CSSProperties
                }
              />

              <div
                className={`grid gap-4 ${gridCols(root.children.length)}`}
              >
                {root.children.map((child, i) => (
                  <div key={i} className="flex flex-col items-center">
                    {/* vertical connector from horizontal line */}
                    <div className="w-px h-8 bg-border" />
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <NodeBox node={child} depth={1} />
                    </motion.div>

                    {/* Grandchildren */}
                    {child.children && child.children.length > 0 && (
                      <>
                        <div className="w-px h-6 bg-border/60" />
                        <div className="flex flex-col gap-2">
                          {child.children.map((gc, j) => (
                            <motion.div
                              key={j}
                              initial={{ opacity: 0, x: -6 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.3,
                                delay: i * 0.1 + j * 0.05,
                              }}
                            >
                              <NodeBox node={gc} depth={2} />
                            </motion.div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {caption && (
        <p className="mt-8 pt-6 border-t border-border text-xs text-muted-foreground text-center font-mono">
          {caption}
        </p>
      )}
    </div>
  );
}

function NodeBox({ node, depth }: { node: TreeNode; depth: number }) {
  const size = depth === 0 ? "px-6 py-3" : depth === 1 ? "px-4 py-2.5" : "px-3 py-2";
  const textSize = depth === 0 ? "text-base" : "text-sm";
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-lg border ${size} ${
        node.accent
          ? "border-[var(--brand)]/40 bg-[var(--brand)]/[0.08]"
          : depth === 0
            ? "border-border bg-background"
            : "border-border bg-background"
      }`}
    >
      {node.icon && <span className="text-base">{node.icon}</span>}
      <span className={`${textSize} font-medium`}>{node.label}</span>
    </div>
  );
}

function gridCols(n: number): string {
  if (n === 2) return "grid-cols-2 max-w-xs mx-auto";
  if (n === 3) return "grid-cols-3 max-w-xl mx-auto";
  if (n === 4) return "grid-cols-4 max-w-2xl mx-auto";
  return "grid-cols-5 max-w-3xl mx-auto";
}
