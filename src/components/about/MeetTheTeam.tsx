"use client";

import { motion } from "framer-motion";

export default function MeetTheTeam() {
  return (
    <section className="relative isolate min-h-[460px] overflow-hidden bg-[#080808] text-white sm:min-h-[520px] lg:min-h-[600px]">
      {/* Full-bleed team photo. Keep the upper sky visible for the heading. */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          src="/ecell-team-backdrop.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_34%] sm:object-[center_31%]"
          loading="lazy"
        />
        {/* Darken the image gently; keep the sky readable without hiding the group. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* No horizontal divider lines. Content sits in the darker, open upper area. */}
      <div className="relative z-10 mx-auto flex min-h-[460px] w-full max-w-7xl flex-col px-6 pb-12 pt-12 sm:min-h-[520px] sm:px-8 sm:pt-14 lg:min-h-[600px] lg:px-10 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between md:gap-10"
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/75 sm:text-xs">
              The People · MIT Manipal
            </p>
            <h2 className="text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Meet the people
              <br />
              <span className="text-white/75">behind E-Cell.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8 md:pt-8">
            <p className="text-sm text-white/85">
              The students building E-Cell today.
            </p>
            <a
              href="/team"
              className="group inline-flex self-start items-center gap-3 whitespace-nowrap text-xs uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-70"
            >
              Meet the Team
              <span
                aria-hidden="true"
                className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

