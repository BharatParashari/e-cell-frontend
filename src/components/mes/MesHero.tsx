"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MesLetterReel from "./MesLetterReel";
import styles from "./mes.module.css";

interface MesHeroProps {
  /** Photos shown inside the MES letters. */
  frames: string[];
  year?: number;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * "E-Cell MIT Manipal presents MES — Manipal Entrepreneurship Summit {year}".
 * The MES letters are windows onto the event photos; the page background
 * shows around them. Drifts back and fades as you scroll away.
 */
export default function MesHero({ frames, year = 2026 }: MesHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[calc(100svh-5rem)] flex-col items-center overflow-hidden px-4 pb-20 pt-3 sm:min-h-[calc(100svh-6rem)] sm:pt-4"
      aria-label={`MES ${year}`}
    >
      <h1 className="sr-only">
        E-Cell MIT Manipal presents MES — Manipal Entrepreneurship Summit {year}
      </h1>

      <motion.div
        className="flex flex-col items-center text-center"
        style={{ scale, opacity, y }}
      >
        <motion.p
          className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-white/55 sm:mb-4 sm:text-xs"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
        >
          E-Cell MIT Manipal presents
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 1.15, filter: "blur(24px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <MesLetterReel text="MES" frames={frames} />
        </motion.div>

        <motion.div
          className="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/40 sm:w-16" />
          <span className="text-sm font-semibold tracking-wide text-white/85 sm:text-xl">
            Manipal Entrepreneurship Summit
            <span className="ml-3 font-normal tracking-[0.3em] text-white/50">
              {year}
            </span>
          </span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-white/40 sm:w-16" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 h-10 w-px -translate-x-1/2 overflow-hidden bg-white/10">
        <span
          className={`${styles.scrollCue} absolute inset-x-0 top-0 h-1/2 bg-white/70`}
        />
      </div>
    </section>
  );
}
