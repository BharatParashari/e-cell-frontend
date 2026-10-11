
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import WhyWeExist from "@/components/about/WhyWeExist";
import TheBridge from "@/components/about/TheBridge";
import TheGrowth from "@/components/about/TheGrowth";
import TheMes from "@/components/about/TheMes";
import MeetTheTeam from "@/components/about/MeetTheTeam";

export const metadata: Metadata = {
  title: "About E-Cell MIT Manipal",
  description:
    "Discover the story, purpose and ecosystem behind E-Cell MIT Manipal.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <WhyWeExist />
        <TheBridge />
        <TheGrowth />
        <TheMes />
        <MeetTheTeam />
      </main>
      <Footer />
    </>
  );
}

