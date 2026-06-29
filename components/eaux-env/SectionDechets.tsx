"use client";
import { Icon } from "@iconify/react";
import { FadeIn, SectionTag, VideoPlayer } from "./ui";

const checklist = [
  "Diagnostic des flux de déchets et audit des pratiques actuelles",
  "Conception de systèmes de collecte, tri et valorisation",
  "Plans de gestion des déchets dangereux (industriels, médicaux, miniers)",
  "Formation des équipes et sensibilisation communautaire",
  "Assainissement de sites contaminés (dépollution de sols et eaux)",
];

export default function SectionDechets() {
  return (
    <section id="dechets">
      <FadeIn>
        <SectionTag>
          <Icon icon="mdi:recycle" />
          Déchets & Assainissement
        </SectionTag>
        <h2 className="text-3xl md:text-4xl font-black text-[#0a1f44] mb-4 leading-tight">
          Gestion durable des déchets<br />
          <span className="text-emerald-700">&amp; assainissement du milieu</span>
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          La mauvaise gestion des déchets est un risque sanitaire, environnemental et
          réputationnel majeur. BIOTOPE conçoit des solutions de gestion adaptées au
          contexte congolais.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <FadeIn>
          <div className="space-y-2">
            {checklist.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon icon="mdi:check" className="text-emerald-700 text-sm" />
                </div>
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <VideoPlayer label="Notre approche de gestion intégrée des déchets" />
        </FadeIn>
      </div>

      {/* Bloc sensibilisation */}
      <FadeIn>
        <div className="p-6 bg-emerald-700 rounded-2xl text-white flex flex-col md:flex-row gap-5 items-start md:items-center">
          <Icon icon="mdi:bullhorn-outline" className="text-5xl text-emerald-300 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-lg mb-1">Sensibilisation &amp; Éducation environnementale</h3>
            <p className="text-emerald-100/80 text-sm leading-relaxed">
              BIOTOPE conçoit et anime des programmes de sensibilisation adaptés à chaque
              public — communautés, écoles, entreprises — pour ancrer les bonnes pratiques
              environnementales dans les comportements quotidiens.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
