
"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Industry Leaders",
    desc: "Learn from founders and industry leaders shaping the future.",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Startup Showcase",
    desc: "Discover bold ideas, emerging startups and new possibilities.",
  },
  {
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    title: "Workshops",
    desc: "Build practical skills through interactive sessions and hands-on learning.",
  },
];

export default function MESFeatureCards() {
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
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`mx-auto mb-20 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 ${
        visible ? "mes-cards-visible" : ""
      }`}
    >
      {cards.map((card, index) => (
        <div
          key={card.title}
          style={{ "--card-index": index } as React.CSSProperties}
        
className="mes-feature-card group relative min-h-56 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-left transition-all duration-300 ease-out hover:z-10 hover:scale-[1.04] hover:border-white/30 hover:bg-white/[0.06] hover:shadow-[0_12px_40px_rgba(255,255,255,0.08)]"
  
        >
          <div className="mes-card-border pointer-events-none absolute inset-0 rounded-2xl" />

          <div className="relative z-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/10">
              <svg
                className="h-6 w-6 text-white/65 transition-transform duration-300 group-hover:scale-110 group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                  d={card.icon}
                />
              </svg>
            </div>

            <h3 className="mb-3 text-lg font-semibold text-white">
              {card.title}
            </h3>

            <p className="text-sm leading-6 text-white/50 transition-colors duration-300 group-hover:text-white/75">
              {card.desc}
            </p>
          </div>
        </div>
      ))}

      <style jsx>{`
        .mes-feature-card {
          opacity: 0;
          transform: translateY(22px);
          transition:
            opacity 650ms ease,
            transform 650ms ease,
            background-color 300ms ease;
          transition-delay: calc(var(--card-index) * 140ms);
        }

        .mes-cards-visible .mes-feature-card {
          opacity: 1;
          transform: translateY(0);
        }

        .mes-feature-card:hover {
        transform: translateY(-7px) scale(1.04);
        background-color: rgba(255, 255, 255, 0.06);
        }

        .mes-card-border {
          padding: 1px;
          opacity: 0;
          background: conic-gradient(
            from var(--border-angle, 0deg),
            transparent 0deg,
            transparent 260deg,
            rgba(255, 255, 255, 0.9) 315deg,
            transparent 360deg
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          transition: opacity 250ms ease;
        }

        .mes-feature-card:hover .mes-card-border {
          opacity: 1;
          animation: border-trace 2.5s linear infinite;
        }

        @property --border-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes border-trace {
          from {
            --border-angle: 0deg;
          }
          to {
            --border-angle: 360deg;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mes-feature-card,
          .mes-cards-visible .mes-feature-card {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .mes-feature-card:hover {
            transform: none;
          }

          .mes-feature-card:hover .mes-card-border {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
