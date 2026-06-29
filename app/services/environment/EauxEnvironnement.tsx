"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { navSections } from "@/components/eaux-env/data";
import SectionEIES      from "@/components/eaux-env/SectionEIES";
import SectionPlans     from "@/components/eaux-env/SectionPlans";
import SectionAudit     from "@/components/eaux-env/SectionAudit";
import SectionPeuples   from "@/components/eaux-env/SectionPeuples";
import SectionForage    from "@/components/eaux-env/SectionForage";
import SectionForets    from "@/components/eaux-env/SectionForets";
import SectionDechets   from "@/components/eaux-env/SectionDechets";
import SectionPlaidoyer from "@/components/eaux-env/SectionPlaidoyer";

/* ── Hook : section active au scroll ── */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);
  return active;
}

/* ── Scroll helper ── */
function scrollTo(id: string, close?: () => void) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  }
  close?.();
}

export default function EauxEnvironnementPage() {
  const ids = navSections.map((s) => s.id);
  const activeSection = useActiveSection(ids);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#0a2a1a]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1600')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a1a] via-[#0a2a1a]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2a1a]/80 to-transparent" />

        <div className="absolute top-6 left-6 flex items-center gap-2 text-white/60 text-xs">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <Icon icon="mdi:chevron-right" />
          <span className="text-white/40">Services</span>
          <Icon icon="mdi:chevron-right" />
          <span className="text-emerald-400 font-semibold">Eaux &amp; Environnement</span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 pt-28 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-[0.25em] mb-5 border border-emerald-500/30 bg-emerald-900/30 px-4 py-1.5 rounded-full">
              <Icon icon="mdi:leaf-circle" />
              Pôle Eaux &amp; Environnement
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
              Protéger l&apos;environnement,<br />
              <span className="text-emerald-400">garantir votre conformité</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
              De l&apos;étude d&apos;impact à la gestion de l&apos;eau, BIOTOPE accompagne vos projets
              avec une expertise réglementaire reconnue en RDC.
            </p>
            <div className="flex flex-wrap gap-2">
              {navSections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="text-xs font-semibold px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LAYOUT ── */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 flex gap-10 items-start">

        {/* Nav latérale sticky (desktop) */}
        <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-24 self-start">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 px-2">Sur cette page</p>
            <nav className="space-y-0.5">
              {navSections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all ${
                    activeSection === s.id
                      ? "bg-emerald-50 text-emerald-800 font-bold border-l-2 border-emerald-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  } ${s.id === "forage" ? "mt-2 border border-emerald-200 bg-emerald-50/50" : ""}`}
                >
                  <div className="font-semibold leading-tight">{s.label}</div>
                  {s.id === "forages" && (
                    <div className="text-[10px] text-emerald-600 font-bold mt-0.5">⭐ Expertise phare</div>
                  )}
                </button>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link
                href="#contact"
                className="block text-center text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white py-2.5 px-4 rounded-xl transition-colors"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </aside>

        {/* Nav mobile flottante */}
        <div className="lg:hidden fixed bottom-5 right-5 z-40">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="w-12 h-12 bg-emerald-700 text-white rounded-full shadow-lg flex items-center justify-center"
          >
            <Icon icon={navOpen ? "mdi:close" : "mdi:format-list-bulleted"} className="text-xl" />
          </button>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute bottom-14 right-0 w-64 bg-white border border-gray-200 rounded-2xl shadow-xl p-3 max-h-[70vh] overflow-y-auto"
            >
              {navSections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id, () => setNavOpen(false))}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm mb-0.5 ${
                    activeSection === s.id ? "bg-emerald-50 text-emerald-800 font-bold" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Contenu principal */}
        <main className="flex-1 min-w-0 space-y-24">
          <SectionEIES />
          <SectionPlans />
          <SectionAudit />
          <SectionPeuples />
          <SectionForage />
          <SectionForets />
          <SectionDechets />
          <SectionPlaidoyer />
        </main>

      </div>
    </div>
  );
}
