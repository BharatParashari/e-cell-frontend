import MESStats from "@/components/MESStats";
import MESFeatureCards from "@/components/MESFeatureCards";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MES 2027 Coming Soon | Manipal Entrepreneurship Summit - E-Cell MIT Manipal",
  description:
    "Get ready for MES 2027 - Manipal Entrepreneurship Summit. Join the biggest entrepreneurship event at MIT Manipal.",
};

export default function MESComingSoonPage() {
  return (
    <div className="min-h-screen bg-transparent text-white overflow-hidden">
      <Navbar />

      <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center">
        {/* Subtle background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/2 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          {/* Branding */}
          <p className="text-white/30 text-xs font-medium tracking-[0.3em] uppercase mb-8">E-Cell MIT Manipal Presents</p>
          <h1 className="text-[clamp(5rem,15vw,10rem)] font-black tracking-tight leading-none text-white mb-2">MES</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white/70 mb-3">Manipal Entrepreneurship Summit</h2>
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px bg-gradient-to-r from-transparent to-white/30 w-20" />
            <span className="text-white/50 font-medium text-lg tracking-widest">2027</span>
            <div className="h-px bg-gradient-to-l from-transparent to-white/30 w-20" />
          </div>

        <p className="mx-auto mb-14 max-w-3xl text-xl leading-relaxed text-white/50 md:text-2xl">
  Get ready for the biggest entrepreneurship event of the year. Where
  innovation meets opportunity, and dreams become reality.
</p>

         
          
           {/* Feature Cards */}
          <MESFeatureCards />

          {/* Stats */}
          <MESStats />  

          {/* CTA */}
          <Link
  href="https://mes26.ecellmit.in/"
  className="group inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white px-9 py-4 font-semibold tracking-wide text-black transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/90 hover:shadow-[0_10px_35px_rgba(255,255,255,0.12)]"
>
  Visit MES Website
  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
    →
  </span>
</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
