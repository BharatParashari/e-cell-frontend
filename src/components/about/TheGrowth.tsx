
"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

const milestones = [
  { year: "2021", label: "FIRST COHORT", target: 7 },
  { year: "2022", label: "YEAR ONE", target: 30 },
  { year: "2024", label: "BY 2024", target: 150 },
];

export default function TheGrowth() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, 1, {
      duration: 2.5,
      ease: "linear",
      onUpdate: setProgress,
    });

    return () => controls.stop();
  }, [isInView]);

  // The dot moves continuously across the line.
  const dotPosition = `${progress * 100}%`;

  // Each counter starts and finishes during its own timeline phase.
  const getCount = (start: number, end: number, target: number) => {
    const phase = Math.max(
      0,
      Math.min(1, (progress - start) / (end - start))
    );

    // Smooth count-up, ending exactly at the target.
    const eased = 1 - Math.pow(1 - phase, 3);
    return Math.round(target * eased);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-32 lg:py-44 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-xs tracking-[0.3em] uppercase text-white/35 mb-10">
          04 — The Growth
        </p>

        <h2 className="max-w-5xl text-5xl sm:text-6xl lg:text-8xl font-black tracking-[-0.05em] leading-[0.9]">
          STARTED SMALL.
          <br />
          <span className="text-white/30">GREW WITH TIME.</span>
        </h2>

        {/* Continuous timeline */}
        <div className="relative mt-28 mb-12 mx-2">
          <div className="h-px w-full bg-white/20" />

          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${[8, 50, 92][index]}%` }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
          ))}

          <motion.div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2
            w-3 h-3 rounded-full bg-white
            shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            style={{ left: dotPosition }}
          />
        </div>

        {/* Numbers synchronized to the same progress */}
        <div className="grid grid-cols-3 gap-4 lg:gap-10">
          {milestones.map((milestone, index) => {
            const starts = [0, 0.3, 0.65];
            const ends = [0.3, 0.65, 1];

            const count = getCount(
              starts[index],
              ends[index],
              milestone.target
            );

            return (
              <div key={milestone.year} className="min-w-0">
                <p className="text-xs sm:text-sm tracking-[0.2em] text-white/40">
                  {milestone.year}
                </p>

                <p className="mt-5 text-5xl sm:text-7xl lg:text-9xl
                font-black tracking-[-0.07em] tabular-nums">
                  {count}{index === 2 ? "+" : ""}
                </p>

                <p className="mt-4 text-[9px] sm:text-xs
                tracking-[0.15em] sm:tracking-[0.25em] text-white/35">
                  {milestone.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}