import Compliance from "@/components/home/compiliance";
import ContactRevolutionary from "@/components/home/contact";
import HomePolesExcellence from "@/components/home/excellence";
import ForageSection from "@/components/home/forage";
import HomeHero from "@/components/home/hero";
import KeyStats from "@/components/home/key";
import LogisticsNTIC from "@/components/home/ntic";
import WgsSection from "@/components/home/wgs";
import { main } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomePolesExcellence />
      <WgsSection/>
      <ForageSection />
      <KeyStats/>
      <LogisticsNTIC/>
      <Compliance/>
      <ContactRevolutionary/>
    </main>
  );
}
