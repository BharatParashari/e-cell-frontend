"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: "50+", label: "Speakers" },
  { number: "100+", label: "Startups" },
  { number: "30,000+", label: "Footfall" },
];

export default function MESStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`mx-auto mb-20 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0 ${
        visible ? "mes-stats-visible" : ""
      }`}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          style={{ "--stat-index": index } as React.CSSProperties}
          className={`mes-stat-item group relative flex min-h-28 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05] sm:rounded-none sm:border-0 sm:bg-transparent sm:hover:bg-transparent ${
            index > 0
              ? "sm:border-l sm:border-white/15"
              : ""
          }`}
        >
          <div className="text-3xl font-black tracking-tight text-white transition-transform duration-300 group-hover:scale-105 sm:text-4xl">
            {stat.number}
          </div>

          <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/45 transition-colors duration-300 group-hover:text-white/75">
            {stat.label}
          </div>
        </div>
      ))}

      <style jsx>{`
        .mes-stat-item {
          opacity: 1;
          transform: translateY(0);
        }

        .mes-stats-visible .mes-stat-item {
          animation: stats-enter 600ms ease both;
          animation-delay: calc(var(--stat-index) * 150ms);
        }

        @keyframes stats-enter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mes-stat-item,
          .mes-stats-visible .mes-stat-item {
            opacity: 1;
            transform: none;
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
