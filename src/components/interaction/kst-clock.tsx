"use client";

import * as React from "react";

function formatKSTTime(): { time: string; period: string } {
  const now = new Date();
  const kst = new Date(now.getTime() + (now.getTimezoneOffset() + 540) * 60000);
  const hh = kst.getHours();
  const mm = kst.getMinutes();
  const period = hh >= 12 ? "PM" : "AM";
  const h12 = hh % 12 === 0 ? 12 : hh % 12;
  return {
    time: `${h12}:${String(mm).padStart(2, "0")}`,
    period,
  };
}

export function KSTClock({ className = "" }: { className?: string }) {
  const [t, setT] = React.useState<{ time: string; period: string } | null>(
    null,
  );

  React.useEffect(() => {
    setT(formatKSTTime());
    const id = setInterval(() => setT(formatKSTTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`flex items-baseline gap-2 tabular-nums ${className}`}>
      <span className="font-mono text-2xl md:text-3xl font-medium">
        {t?.time ?? "--:--"}
      </span>
      <span className="font-mono text-xs text-muted-foreground">
        {t?.period ?? ""}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground ml-1">
        KST
      </span>
    </div>
  );
}
