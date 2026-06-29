"use client";
import { Icon } from "@iconify/react";
import { FadeIn, SectionTag, VideoPlayer } from "./ui";
import { secteurs } from "./data";

const points = [
  {
    icon: "mdi:shield-check-outline",
    title: "Prévention des risques",
    desc: "Identification précoce des impacts négatifs potentiels sur les milieux naturels, humains et économiques avant le démarrage des travaux.",
  },
  {
    icon: "mdi:account-group-outline",
    title: "Consultation des parties prenantes",
    desc: "Organisation des audiences publiques, entretiens communautaires et ateliers participatifs conformément aux normes nationales et internationales.",
  },
  {
    icon: "mdi:file-document-check-outline",
    title: "Rapports conformes ACE",
    desc: "Livrables structurés selon les exigences de l'Agence Congolaise de l'Environnement et des bailleurs de fonds (Banque Mondiale, BAD, SFI).",
  },
  {
    icon: "mdi:trending-down",
    title: "Mesures d'atténuation",
    desc: "Plan d'action détaillé pour réduire, compenser ou éviter chaque impact identifié — avec indicateurs de suivi mesurables.",
  },
];

export default function SectionEIES() {
  return (
    <section id="eies">
      <FadeIn>
        <SectionTag>
          <Icon icon="mdi:magnify" />
          Études d&apos;Impact
        </SectionTag>
        <h2 className="text-3xl md:text-4xl font-black text-[#0a1f44] mb-4 leading-tight">
          Études Environnementales<br />
          et Sociales <span className="text-emerald-700">(EIES)</span>
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Avant tout projet d&apos;envergure, une EIES s&apos;impose. BIOTOPE analyse l&apos;ensemble
          des risques environnementaux et sociaux pour sécuriser votre investissement,
          obtenir vos permis et préserver votre licence sociale d&apos;opérer.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {points.map((item, i) => (
          <FadeIn key={i} delay={i * 0.07}>
            <div className="flex gap-4 p-5 bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 rounded-2xl transition-all group">
              <div className="w-11 h-11 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                <Icon icon={item.icon} className="text-emerald-700 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-[#0a1f44] text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Secteurs couverts</p>
        <div className="flex flex-wrap gap-2 mb-10">
          {secteurs.map((s) => (
            <span
              key={s.label}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0a1f44] text-white text-xs font-semibold rounded-full"
            >
              <Icon icon={s.icon} className="text-emerald-400" />
              {s.label}
            </span>
          ))}
        </div>
      </FadeIn>

      <FadeIn>
        <VideoPlayer label="Présentation de notre processus EIES en RDC" />
      </FadeIn>
    </section>
  );
}
