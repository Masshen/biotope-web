"use client";
import { Icon } from "@iconify/react";
import { FadeIn, SectionTag } from "./ui";

export default function SectionPeuples() {
  return (
    <section id="peuples">
      <FadeIn>
        <SectionTag>
          <Icon icon="mdi:account-heart-outline" />
          Populations vulnérables
        </SectionTag>
        <h2 className="text-3xl md:text-4xl font-black text-[#0a1f44] mb-4 leading-tight">
          Plan opérationnel en faveur<br />
          <span className="text-emerald-700">des Peuples Autochtones (PPA)</span>
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Les projets en zones forestières ou rurales de la RDC affectent souvent des
          communautés Pygmées ou d&apos;autres peuples autochtones. BIOTOPE élabore des PPA
          conformes à la politique opérationnelle OP 4.10 de la Banque Mondiale.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[
          {
            icon: "mdi:map-marker-check-outline",
            title: "Cartographie et identification",
            desc: "Identification des peuples autochtones présents dans la zone d'influence du projet et cartographie de leurs territoires traditionnels.",
          },
          {
            icon: "mdi:handshake-outline",
            title: "Consentement libre et éclairé",
            desc: "Processus de consultation culturellement adapté garantissant le consentement préalable, libre et éclairé (CLIP) des communautés concernées.",
          },
          {
            icon: "mdi:school-outline",
            title: "Renforcement des capacités",
            desc: "Formation des représentants communautaires pour qu'ils puissent participer activement aux décisions qui concernent leur territoire.",
          },
          {
            icon: "mdi:cash-multiple",
            title: "Compensation et partage des bénéfices",
            desc: "Mécanismes équitables de compensation des impacts subis et de partage des retombées économiques générées par le projet.",
          },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl hover:border-amber-300 hover:shadow-sm transition-all">
              <Icon icon={item.icon} className="text-amber-700 text-3xl mb-3" />
              <h3 className="font-bold text-[#0a1f44] mb-2 text-sm">{item.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="p-5 bg-[#0a1f44] rounded-2xl flex items-start gap-4">
          <Icon icon="mdi:information-outline" className="text-emerald-400 text-2xl flex-shrink-0 mt-0.5" />
          <p className="text-blue-200/70 text-sm leading-relaxed">
            <span className="text-white font-bold">Référentiel OP 4.10 (Banque Mondiale) ·</span>{" "}
            Nos PPA sont construits pour répondre aux exigences des bailleurs de fonds
            internationaux opérant en RDC — garantissant l&apos;acceptabilité sociale de vos projets.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
