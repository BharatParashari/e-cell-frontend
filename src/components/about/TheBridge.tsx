
"use client";

import { motion } from "framer-motion";

const connections = [
  {
    title: "MENTORS & ALUMNI",
    description: "Experience, guidance and perspective.",
  },
  {
    title: "INDUSTRY",
    description: "Expertise, networks and real-world exposure.",
  },
  {
    title: "INCUBATION",
    description: "Pathways for developing viable ideas.",
  },
  {
    title: "FOUNDERS",
    description: "Insights from people building ventures.",
  },
];

export default function TheBridge() {
  return (
    <section className="bg-[#080808] text-white py-32 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-white/35 mb-10"
        >
          03 — The Bridge
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl text-5xl sm:text-6xl lg:text-8xl
          font-black tracking-[-0.05em] leading-[0.9]"
        >
          IDEAS NEED PEOPLE.
          <br />
          <span className="text-white/30">
            PEOPLE NEED CONNECTIONS.
          </span>
        </motion.h2>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/55">
          E-Cell was envisioned as a bridge between students with
          ideas and people with expertise — bringing the right
          perspectives, experience and opportunities closer together.
        </p>

        {/* Connection diagram */}
        <div className="mt-20 lg:mt-28 grid lg:grid-cols-[1fr_220px_1fr]
        gap-6 lg:gap-10 items-center">

          {/* Students */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border border-white/15 p-8 lg:p-10"
          >
            <p className="text-xs tracking-[0.25em] text-white/35 mb-4">
              THE STARTING POINT
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold">
              STUDENTS
            </h3>
            <p className="mt-4 text-white/50 leading-relaxed">
              Ideas, curiosity and the ambition to build something.
            </p>
          </motion.div>

          {/* E-Cell */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex flex-col items-center justify-center
            py-8 lg:py-0"
          >
            <div className="hidden lg:block absolute left-[-40px] right-[-40px]
            top-1/2 h-px bg-white/20" />

            <div className="relative z-10 w-44 h-44 rounded-full
            bg-white text-black flex flex-col items-center justify-center
            shadow-[0_0_60px_rgba(255,255,255,0.08)]">
              <span className="text-xs tracking-[0.2em]">THE BRIDGE</span>
              <span className="text-2xl font-black mt-2">E-CELL</span>
              <span className="text-xs text-black/50 mt-1">MIT MANIPAL</span>
            </div>
          </motion.div>

          {/* People and ecosystem */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {connections.map((connection, index) => (
              <motion.div
                key={connection.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border border-white/10 p-5
                hover:border-white/40 transition-colors duration-300"
              >
                <span className="text-xs text-white/30">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-sm font-semibold tracking-wide">
                  {connection.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">
                  {connection.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-5
        flex justify-between gap-4 text-xs tracking-wider text-white/30">
          <span>IDEAS MEET EXPERIENCE</span>
          <span>CONNECTION CREATES POSSIBILITY</span>
        </div>

      </div>
    </section>
  );
}