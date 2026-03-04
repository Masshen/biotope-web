import HomePolesExcellence from "@/components/home/excellence";
import HomeHero from "@/components/home/hero";
import { main } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomePolesExcellence />
    </main>
  );
}
