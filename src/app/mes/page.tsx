import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MesBackground from "@/components/mes/MesBackground";
import MesHero from "@/components/mes/MesHero";
import MesNextEdition from "@/components/mes/MesNextEdition";
import MesRecap from "@/components/mes/MesRecap";
import MesEasterEgg from "@/components/mes/MesEasterEgg";
import MesSoundtrack from "@/components/mes/MesSoundtrack";
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

// Each section is a self-contained component in src/components/mes/.
// To add a section, create a component there and drop it into the list below.
export default function MESPage() {
  return (
    <div className="relative min-h-screen text-white">
      <MesBackground />
      <MesEasterEgg />
      <MesSoundtrack />
      <Navbar />

      <main className="relative">
        <MesHero frames={mesReelFrames} year={2026} />
        <MesNextEdition year={2027} />
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
