"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const services = [
  { icon: "mdi:drone", label: "SIG & Télédétection" },
  { icon: "mdi:leaf", label: "Études d'Impact Env." },
  { icon: "mdi:airplane-cog", label: "Navigation Aérienne" },
  { icon: "mdi:terrain", label: "Génie civile" },
  { icon: "lucide:drill", label: "Forage" },
  { icon: "mdi:building", label: "Architecture et construction" },
  { icon: "mdi:smartphone", label: "NTIC et développement informatique" },
];

const HomeHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0a1f44] via-[#0c2d6b] to-[#0a4a8c] min-h-[88vh] flex items-center overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Light accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0a6dd4]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            >
              <Icon icon="mdi:shield-check" className="text-blue-300" />
              Bureau d'Innovation · RDC
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
            >
              Expertise<br />
              <span className="text-[#4da3ff]">Multidisciplinaire</span><br />
              & Personnalisée
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-blue-100/80 text-lg leading-relaxed mb-8 max-w-lg"
            >
              {`Nous accompagnons de l'étude à la conception de vos projets de génie civile, environnementaux, `}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#services" className="flex items-center justify-center gap-2 bg-[#0a6dd4] hover:bg-[#0858b0] text-white font-bold px-7 py-3.5 rounded-lg transition-colors text-sm">
                Découvrir nos services
                <Icon icon="mdi:arrow-right" />
              </Link>
              <Link href="#contact" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-7 py-3.5 rounded-lg transition-colors text-sm">
                <Icon icon="mdi:phone-outline" />
                Nous contacter
              </Link>
            </motion.div>

            {/* Service tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {services.map((s, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white text-xs font-semibold">
                  <Icon icon={s.icon} className="text-[#4da3ff]" />
                  {s.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { icon: "mdi:airplane-cog", title: "Navigation Aérienne", desc: "Production des cartes aéronautiques, Collecte de données électronique de terrain et d’obstacles (eTOD), Conception des procédures de vol , Campagne WGS84, etc.", color: "bg-blue-500" },
              { icon: "mdi:leaf", title: "Eaux et Environnement", desc: "Forage, EIES, PGES, PAR, Audit Environnemental & Social", color: "bg-emerald-500", url:"/services/environment/#forage" },
              { icon: "mdi:terrain", title: "Génie civile", desc: "Etudes géotechniques et géophysique, Architectures, Urbanisation, Location des équipements de construction, Construction, etc.", color: "bg-orange-500" },
              { icon: "mdi:drone", title: "SIG & Télédétection", desc: "Collecte des données par Drone, Cartographie numérique, télédétection, topographie,Planification spatiale, Fourniture de contrôle géodésique, etc.", color: "bg-purple-500" },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 cursor-pointer hover:bg-white/15 transition-all"
                onClick={()=>{
                  if(card.url && typeof window !== "undefined"){
                    window.location.href=card.url;
                  }
                }}
              >
                <div className={`w-10 h-10 ${card.color} rounded-lg flex items-center justify-center mb-3`}>
                  <Icon icon={card.icon} className="text-white text-xl" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">{card.title}</h3>
                <p className="text-blue-200/70 text-xs leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "RCCM", value: "CD/KNG/RCCM/21-B-03426" },
            { label: "Agrément ACE", value: "003/CAB/MIN/EDD/2019" },
            { label: "Agrément Défense", value: "N°VPM/MDNAC/2025" },
            { label: "Agrément Intérieur", value: "N°250/000/478/2025" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-blue-300 text-[10px] uppercase tracking-widest font-bold mb-0.5">{s.label}</div>
              <div className="text-white text-xs font-mono">{s.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
