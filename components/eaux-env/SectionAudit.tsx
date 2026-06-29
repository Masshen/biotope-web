"use client";
import { Icon } from "@iconify/react";
import { FadeIn, SectionTag, VideoPlayer } from "./ui";

const etapes = [
  {
    step: "01",
    icon: "mdi:eye-outline",
    title: "État des lieux",
    desc: "Évaluation exhaustive de la performance environnementale et sociale actuelle de votre installation ou entreprise.",
  },
  {
    step: "02",
    icon: "mdi:compare",
    title: "Analyse des écarts",
    desc: "Comparaison avec les normes légales congolaises, les standards IFC et les politiques des bailleurs de fonds.",
  },
  {
    step: "03",
    icon: "mdi:check-decagram-outline",
    title: "Plan d'actions",
    desc: "Recommandations concrètes, priorisées et chiffrées pour corriger les non-conformités identifiées.",
  },
];

export default function SectionAudit() {
  return (
    <section id="audit">
      <FadeIn>
        <SectionTag>
          <Icon icon="mdi:magnify-scan" />
          Audit
        </SectionTag>
        <h2 className="text-3xl md:text-4xl font-black text-[#0a1f44] mb-4 leading-tight">
          Audit Environnemental<br />
          <span className="text-emerald-700">&amp; Social (AES)</span>
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-2xl">
          L&apos;audit dresse un état des lieux objectif et indépendant de votre conformité
          environnementale et sociale — indispensable avant une levée de fonds, une acquisition
          ou une renégociation de permis.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {etapes.map((s, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="relative p-6 bg-[#0a1f44] rounded-2xl overflow-hidden">
              <div className="absolute top-3 right-4 text-6xl font-black text-white/5">{s.step}</div>
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Icon icon={s.icon} className="text-white text-xl" />
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
              <p className="text-blue-200/70 text-xs leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <VideoPlayer label="Témoignage client — Audit environnemental d'un site industriel" />
      </FadeIn>
    </section>
  );
}
