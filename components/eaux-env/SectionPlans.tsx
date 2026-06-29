"use client";
import { Icon } from "@iconify/react";
import { FadeIn, SectionTag } from "./ui";
import { plans } from "./data";

export default function SectionPlans() {
  return (
    <section id="plans">
      <FadeIn>
        <SectionTag>
          <Icon icon="mdi:file-tree-outline" />
          Plans réglementaires
        </SectionTag>
        <h2 className="text-3xl md:text-4xl font-black text-[#0a1f44] mb-4 leading-tight">
          Plans de conformité &<br />
          <span className="text-emerald-700">gestion environnementale</span>
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-2xl">
          Au-delà de l&apos;EIES, chaque projet requiert des plans spécifiques pour garantir
          la conformité tout au long de son cycle de vie. BIOTOPE maîtrise l&apos;intégralité
          de ces instruments réglementaires.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {plans.map((p, i) => (
          <FadeIn key={p.code} delay={i * 0.06}>
            <div className="p-6 bg-white border border-gray-100 hover:border-emerald-300 hover:shadow-md rounded-2xl transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 group-hover:bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <Icon icon={p.icon} className="text-emerald-700 text-2xl" />
                </div>
                <div>
                  <span className="text-emerald-700 font-black text-sm">{p.code}</span>
                  <h3 className="font-bold text-[#0a1f44] text-sm mt-0.5 mb-2 leading-snug">{p.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
