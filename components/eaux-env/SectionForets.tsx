"use client";
import { Icon } from "@iconify/react";
import { FadeIn, SectionTag } from "./ui";

const items = [
  { icon: "mdi:forest",           color: "bg-green-50 text-green-700",   title: "Foresterie urbaine",        desc: "Aménagement et gestion durable des espaces verts en milieu urbain et péri-urbain pour atténuer les îlots de chaleur." },
  { icon: "mdi:landslide-outline", color: "bg-orange-50 text-orange-700", title: "Bassins versants",          desc: "Protection contre les érosions et pollutions, stabilisation des berges et gestion des eaux de ruissellement." },
  { icon: "mdi:thermometer-alert", color: "bg-red-50 text-red-700",       title: "Adaptation climatique",     desc: "Évaluation des vulnérabilités et conception de mesures d'adaptation aux aléas climatiques extrêmes." },
  { icon: "mdi:pine-tree-box",     color: "bg-emerald-50 text-emerald-700", title: "Reboisement & restauration", desc: "Programmes de reboisement des zones dégradées avec espèces endémiques et suivi de croissance." },
  { icon: "mdi:water-alert",       color: "bg-blue-50 text-blue-700",     title: "Prévention des catastrophes", desc: "Cartographie des risques naturels (inondations, glissements de terrain) et plans de prévention." },
  { icon: "mdi:leaf",              color: "bg-teal-50 text-teal-700",     title: "Ressources naturelles",     desc: "Gestion durable et valorisation des ressources forestières, halieutiques et minérales dans le respect des écosystèmes." },
];

export default function SectionForets() {
  return (
    <section id="forets">
      <FadeIn>
        <SectionTag>
          <Icon icon="mdi:tree-outline" />
          Forêts & Climat
        </SectionTag>
        <h2 className="text-3xl md:text-4xl font-black text-[#0a1f44] mb-4 leading-tight">
          Résilience climatique &<br />
          <span className="text-emerald-700">ressources naturelles</span>
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          Face aux catastrophes naturelles et au changement climatique, BIOTOPE accompagne
          les territoires dans la protection de leurs écosystèmes et le renforcement de
          leur résilience.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div className="p-5 bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md rounded-2xl transition-all h-full">
              <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center mb-3`}>
                <Icon icon={item.icon} className="text-xl" />
              </div>
              <h3 className="font-bold text-[#0a1f44] text-sm mb-1.5">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
