import type { Metadata } from "next";
import EauxEnvironnementPage from "./EauxEnvironnement";

export const metadata: Metadata = {
  title: "Eaux & Environnement | BIOTOPE Consulting Network",
  description:
    "BIOTOPE réalise des Études d'Impact Environnemental et Social (EIES), Plans de Gestion Environnementale (PGES), audits, forages d'eau potable et bien plus en République Démocratique du Congo.",
  keywords: [
    "EIES RDC",
    "étude impact environnemental Congo",
    "PGES Kinshasa",
    "forage eau potable RDC",
    "audit environnemental social",
    "plan réinstallation PAR",
    "BIOTOPE environnement",
    "gestion durable déchets Congo",
  ],
  openGraph: {
    title: "Eaux & Environnement — BIOTOPE",
    description:
      "Expertise en études environnementales, gestion de l'eau, forages et conformité réglementaire en RDC.",
    type: "website",
    locale: "fr_CD",
  },
};

export default function Page() {
  return <EauxEnvironnementPage />;
}
