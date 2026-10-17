"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import type { MesStat } from "@/data/mesEvents";

const EASE = [0.16, 1, 0.3, 1] as const;

function CountUp({ stat }: { stat: MesStat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    const controls = animate(0, stat.value, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => {
        el.textContent = Math.round(v).toLocaleString("en-IN");
      },
    });
    return () => controls.stop();
  }, [inView, stat.value]);

  return <span ref={ref}>{stat.value.toLocaleString("en-IN")}</span>;
}

/** Headline numbers in big type, counting up when they scroll into view. */
export default function MesStats({ stats }: { stats: MesStat[] }) {
  return (
    <div className="grid grid-cols-2 border-y border-white/10 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className={`flex flex-col justify-between gap-3 py-8 sm:py-10 ${
            i % 2 === 1 ? "pl-5 sm:pl-8" : "pr-5 sm:pr-8"
          } ${i > 1 ? "border-t border-white/10 lg:border-t-0" : ""} ${
            i > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""
          } ${i % 2 === 1 ? "border-l border-white/10" : ""}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
        >
          <div className="text-[clamp(2.75rem,9vw,6rem)] font-bold leading-none tracking-[-0.05em] text-white">
            {stat.prefix && (
              <span className="text-white/45">{stat.prefix}</span>
            )}
            <CountUp stat={stat} />
            {stat.suffix}
          </div>
          <div className="text-xs leading-snug text-white/45 sm:text-sm">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
