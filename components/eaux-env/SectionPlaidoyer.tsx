"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { FadeIn, SectionTag } from "./ui";

const roles = [
  {
    icon: "mdi:account-tie-outline",
    title: "Médiation communautaire",
    desc: "Facilitation des dialogues entre entreprises et communautés riveraines pour prévenir et résoudre les conflits liés à l'utilisation des ressources.",
  },
  {
    icon: "mdi:bank-outline",
    title: "Interface réglementaire",
    desc: "Représentation auprès des autorités compétentes (ACE, ministères) pour accélérer les procédures d'agrément et de conformité.",
  },
  {
    icon: "mdi:chart-line",
    title: "Plaidoyer politique",
    desc: "Appui technique à l'élaboration de politiques environnementales nationales et locales alignées sur les enjeux de développement durable.",
  },
];

export default function SectionPlaidoyer() {
  return (
    <section id="plaidoyer" className="space-y-12">

      {/* ── Intro ── */}
      <div>
        <FadeIn>
          <SectionTag>
            <Icon icon="mdi:gavel" />
            Plaidoyer
          </SectionTag>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1f44] mb-4 leading-tight">
            Cadre de négociation<br />
            <span className="text-emerald-700">&amp; plaidoyer environnemental</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
            BIOTOPE joue un rôle d&apos;interface neutre et expert entre les porteurs de
            projets, les communautés affectées et les autorités réglementaires — pour
            des solutions négociées et durables.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {roles.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-6 border border-gray-100 hover:border-emerald-300 hover:bg-emerald-50/30 rounded-2xl transition-all h-full">
                <Icon icon={item.icon} className="text-emerald-700 text-3xl mb-4" />
                <h3 className="font-bold text-[#0a1f44] text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── CTA Final ── */}
      <FadeIn>
        <div className="relative bg-gradient-to-br from-[#0a1f44] to-[#0a3a20] rounded-3xl p-8 md:p-12 overflow-hidden text-center">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,#4ade80,transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <Icon icon="mdi:leaf-circle" className="text-emerald-400 text-5xl mb-4 mx-auto" />
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
              Un projet en RDC ?<br />Parlons conformité environnementale.
            </h2>
            <p className="text-white/60 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
              BIOTOPE vous accompagne de l&apos;étude d&apos;impact jusqu&apos;à l&apos;audit post-projet.
              Contactez notre équipe pour une première consultation gratuite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-sm"
              >
                <Icon icon="mdi:email-outline" />
                Demander un devis gratuit
              </Link>
              <Link
                href="tel:+243822951339"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-sm"
              >
                <Icon icon="mdi:phone-outline" />
                +243 82 29 51 339
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>

    </section>
  );
}
