import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MesBackground from "@/components/mes/MesBackground";
import MesHero from "@/components/mes/MesHero";
import MesNextEdition from "@/components/mes/MesNextEdition";
import MesRecap from "@/components/mes/MesRecap";
import MesEasterEgg from "@/components/mes/MesEasterEgg";
import MesSoundtrack from "@/components/mes/MesSoundtrack";
import MESMindset from "@/components/MESMindset";
import MESFeatureCards from "@/components/MESFeatureCards";
import EntrepreneurshipEcosystem from "@/components/EntrepreneurshipEcosystem";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleField from "@/components/ParticleField";
import {
  mesEventGroups2026,
  mesReelFrames,
  mesStats2026,
} from "@/data/mesEvents";

export const metadata: Metadata = {
  title: "MES 2027 | Manipal Entrepreneurship Summit - E-Cell MIT Manipal",
  description:
    "MES 2027 - the Manipal Entrepreneurship Summit returns to MIT Manipal. See the competitions, platforms and conclaves that set the bar in 2026.",
};

// Each section is a self-contained component. To add a section, create a
// component and drop it into the list below.
export default function MESPage() {
  return (
    <div className="relative min-h-screen text-white">
      <MesBackground />
      {/* Cursor-reactive particle network over the background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <ParticleField />
      </div>
      <MesEasterEgg />
      <MesSoundtrack />
      <Navbar />

      <main className="relative">
        <MesHero frames={mesReelFrames} />
        <MesNextEdition year={2027} />

        <div className="px-6">
          <ScrollReveal>
            <MESMindset />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <MESFeatureCards />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <EntrepreneurshipEcosystem />
          </ScrollReveal>
        </div>

        <MesRecap
          year={2026}
          stats={mesStats2026}
          groups={mesEventGroups2026}
          siteUrl="https://mes26.ecellmit.in/"
        />
      </main>

      <div className="relative">
        <Footer />
      </div>
    </div>
  );
}
