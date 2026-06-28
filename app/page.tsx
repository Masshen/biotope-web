import Compliance from "@/components/home/compiliance";
import ContactRevolutionary from "@/components/home/contact";
import HomePolesExcellence from "@/components/home/excellence";
import HomeHero from "@/components/home/hero";
import KeyStats from "@/components/home/key";
import LogisticsNTIC from "@/components/home/ntic";
import WgsSection from "@/components/home/wgs";
import { Metadata } from "next";
import RealizationSection from "@/components/home/realization";

export const metadata: Metadata = {
  title: "Biotope",
  description: "Notre page d'accueil",
};

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomePolesExcellence />
      <WgsSection/>
      <RealizationSection />
      <KeyStats/>
      <LogisticsNTIC/>
      <Compliance/>
      <ContactRevolutionary/>
    </main>
  );
}
