
import MESStats from "@/components/MESStats";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleField from "@/components/ParticleField";
import MESFeatureCards from "@/components/MESFeatureCards";
import EntrepreneurshipEcosystem from "@/components/EntrepreneurshipEcosystem";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "MES 2027 Coming Soon | Manipal Entrepreneurship Summit - E-Cell MIT Manipal",
  description:
    "Get ready for MES 2027 - Manipal Entrepreneurship Summit. Join the biggest entrepreneurship event at MIT Manipal.",
};

export default function MESComingSoonPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent text-white">
      {/* Navigation */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Interactive particle background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <ParticleField />
      </div>

      {/* Main content */}
      <section className="relative z-10 flex min-h-[calc(100vh-72px)] items-center justify-center">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-white/3 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-white/2 blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          {/* Branding and title */}
          <ScrollReveal>
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-white/30">
              E-Cell MIT Manipal Presents
            </p>

            <h1 className="mb-2 text-[clamp(5rem,15vw,10rem)] font-black leading-none tracking-tight text-white">
              MES
            </h1>

            <h2 className="mb-3 text-2xl font-bold text-white/70 md:text-3xl">
              Manipal Entrepreneurship Summit
            </h2>
          </ScrollReveal>

          {/* Year */}
          <ScrollReveal delay={150}>
            <div className="mb-16 flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/30" />

              <span className="text-lg font-medium tracking-widest text-white/50">
                2027
              </span>

              <div className="h-px w-20 bg-gradient-to-l from-transparent to-white/30" />
            </div>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={200}>
            <p className="mx-auto mb-14 max-w-3xl text-xl leading-relaxed text-white/50 md:text-2xl">
              Get ready for the biggest entrepreneurship event of the year.
              Where innovation meets opportunity, and dreams become reality.
            </p>
          </ScrollReveal>

          
        <ScrollReveal delay={250}>
          <section className="mx-auto mb-20 max-w-5xl border-y border-white/15 py-12 text-left md:py-16">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
              The Mindset Behind MES
            </p>

            <h2 className="max-w-4xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-6xl">
              Don't just imagine the future. Build it.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
              Entrepreneurship is more than starting a business. It's about
              spotting opportunities, challenging the status quo, and
              transforming ideas into solutions that matter.
            </p>

            <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
              Think boldly. Question everything. Build what matters.
            </p>
          </section>
        </ScrollReveal>


          {/* Feature cards */}
          <ScrollReveal delay={100}>
            <MESFeatureCards />
          </ScrollReveal>

          <ScrollReveal delay={100}>
          <EntrepreneurshipEcosystem />
          </ScrollReveal>

          {/* Summit statistics */}
          <ScrollReveal delay={100}>
            <MESStats />
          </ScrollReveal>

          {/* Call to action */}
          <ScrollReveal delay={150}>
            <Link
              href="https://mes26.ecellmit.in/"
              className="group inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Visit MES Website

              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
