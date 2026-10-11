"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "PEOPLE",
    description: "Experience worth learning from.",
    image: "/people.jpg",
    imageAlt: "Students sharing ideas and learning together",
  },
  {
    number: "02",
    title: "KNOWLEDGE",
    description: "Perspectives that move ideas forward.",
    image: "/know.jpeg",
    imageAlt: "Books and resources representing knowledge",
  },
  {
    number: "03",
    title: "OPPORTUNITY",
    description: "Connections that open new possibilities.",
    image: "/opp.jpeg",
    imageAlt: "An entrepreneurship event bringing people together",
  },
];

export default function WhyWeExist() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-10 lg:py-32">
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-white/45 sm:text-xs">
              Why we exist
            </p>
            <h2 className="max-w-3xl text-5xl font-black leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-8xl">
              GOOD IDEAS
              <br />
              DON&apos;T GROW
              <br />
              <span className="text-white/35">IN ISOLATION.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="flex flex-col justify-center lg:pl-2"
          >
            <p className="text-base leading-relaxed text-white/75 sm:text-lg">
              Entrepreneurship rarely happens in isolation.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              An idea needs guidance, relevant expertise, access to people and
              opportunities to test itself. Sometimes, it simply needs the right
              conversation at the right time.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              E-Cell MIT exists to create those connections — bringing students
              closer to founders, mentors, alumni, industry professionals and the
              wider innovation ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Three visual pillars */}
        <div className="mt-14 border-t border-white/15 pt-5 sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group min-w-0 overflow-hidden border border-white/15 bg-white/[0.015] transition-colors duration-300 hover:border-white/35"
              >
                <div className="relative aspect-[1.55/1] overflow-hidden bg-white/[0.04]">
                  <img
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-80 grayscale transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                </div>

                <div className="flex min-h-[150px] flex-col p-5 sm:p-6">
                  <p className="text-[10px] tracking-[0.22em] text-white/50 sm:text-xs">
                    {pillar.number}
                  </p>
                  <h3 className="mt-3 text-xs font-semibold tracking-[0.24em] text-white sm:text-sm">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
                    {pillar.description}
                  </p>

                  {pillar.title === "OPPORTUNITY" && (
                    <a
                      href="/initiatives"
                      className="mt-6 inline-flex w-fit items-center gap-3 border-b border-white/50 pb-2 text-[10px] font-medium tracking-[0.2em] text-white transition-colors duration-300 hover:border-white hover:text-white/70 sm:text-xs"
                    >
                      EXPLORE OUR INITIATIVES
                      <span
                        aria-hidden="true"
                        className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
