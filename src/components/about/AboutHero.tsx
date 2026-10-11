"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/InnovationCentre_ECellPic.webp"
          alt="E-Cell MIT Manipal"
          className="w-full h-full object-cover opacity-45"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-32">
        
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/50 mb-8"
        >
          About E-Cell MIT
        </motion.p>

        {/* Main heading */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(4rem,11vw,10rem)] leading-[0.85] font-black tracking-[-0.05em] text-white"
          >
            FROM AN IDEA
            <br />
            <span className="text-white/35">
              TO AN ECOSYSTEM.
            </span>
          </motion.h1>
        </div>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          
          <p className="text-sm sm:text-base text-white/65 max-w-xl leading-relaxed">
            E-Cell MIT Manipal is a student-led entrepreneurship ecosystem
            connecting aspiring founders with people, knowledge and
            opportunities that can help turn ideas into ventures.
          </p>

          <p className="text-xs tracking-[0.2em] uppercase text-white/40 whitespace-nowrap">
            MIT Manipal · Since 2021
          </p>

        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-6 lg:left-10 flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-white/35"
        >
          <span className="w-8 h-px bg-white/30" />
          Scroll to explore
        </motion.div>

      </div>
    </section>
  );
}