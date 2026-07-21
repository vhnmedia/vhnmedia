"use client";

import { useEffect, useState } from "react";

const STAGES = [
  { label: "Lead submits form", at: 0 },
  { label: "AI voice agent calling", at: 3 },
  { label: "Appointment booked", at: 58 },
];

export default function SignalTimeline() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const cycle = 8000;
    const interval = setInterval(() => {
      const t = ((Date.now() - start) % cycle) / cycle;
      setElapsed(Math.floor(t * 60));
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const activeStage = STAGES.filter((s) => elapsed >= s.at).length - 1;
  const progressPct = Math.min((elapsed / 60) * 100, 100);
  const seconds = String(elapsed).padStart(2, "0");

  return (
    <div className="w-full rounded-2xl border border-line bg-surface/60 backdrop-blur-sm p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs uppercase tracking-[0.18em] text-muted font-mono">
          Live response window
        </span>
        <span className="font-mono text-2xl md:text-3xl text-pulse tabular">
          00:{seconds}
        </span>
      </div>

      <div className="relative h-1.5 rounded-full bg-line overflow-hidden mb-8">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-signal to-pulse transition-[width] duration-150 ease-linear"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {STAGES.map((stage, i) => {
          const isDone = elapsed > stage.at || (i === STAGES.length - 1 && elapsed >= 58);
          const isActive = i === activeStage;
          return (
            <div key={stage.label} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full shrink-0 ${
                    isActive
                      ? "bg-pulse animate-pulse-ring"
                      : isDone
                      ? "bg-signal"
                      : "bg-line"
                  }`}
                />
                <span className="text-[11px] font-mono text-muted uppercase tracking-wide">
                  Step {i + 1}
                </span>
              </div>
              <p
                className={`text-sm leading-snug ${
                  isActive || isDone ? "text-paper" : "text-muted"
                }`}
              >
                {stage.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}