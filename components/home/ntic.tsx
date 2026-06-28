"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const services = [
  { icon: "mdi:web", title: "Développement Web & Applications", desc: "Sites web sur mesure, applications personnalisées, gestion de bases de données et réseaux informatiques." },
  { icon: "mdi:cctv", title: "Sécurité & Communication", desc: "Installation de caméras de sécurité, systèmes de communication VHF/HF, navigation électronique." },
  { icon: "mdi:solar-panel", title: "Énergie Solaire", desc: "Conception et installation de systèmes photovoltaïques pour l'autonomie énergétique de vos sites." },
  { icon: "mdi:pickaxe", title: "Mines & Ressources", desc: "Exploitation minière, études géologiques, cartographie des ressources naturelles." },
];

const LogisticsNTIC = () => {
  return (
    <section className="py-24 bg-[#0a1f44] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* GAUCHE */}
          <div className="lg:w-2/5">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block text-blue-300 font-bold tracking-[0.25em] uppercase text-xs mb-4 border border-blue-400/20 bg-white/5 px-4 py-1.5 rounded-full"
            >
              NTIC & Mines & Énergie
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-black text-white leading-tight mb-4"
            >
              Innovation au service<br />
              <span className="text-[#4da3ff]">de votre développement</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-200/70 leading-relaxed text-sm mb-8"
            >
              BIOTOPE intègre les nouvelles technologies de l'information pour accompagner les entreprises, institutions publiques et projets industriels dans leur transformation numérique et énergétique.
            </motion.p>
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 bg-[#0a6dd4] text-white font-bold px-6 py-3 rounded-lg text-sm hover:bg-white hover:text-[#0a1f44] transition-colors"
            >
              Discutons de votre projet
              <Icon icon="mdi:arrow-right" />
            </motion.a>
          </div>

          {/* DROITE : Cards */}
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-400/30 transition-all"
              >
                <div className="w-11 h-11 bg-[#0a6dd4]/20 rounded-xl flex items-center justify-center mb-4 border border-[#0a6dd4]/30">
                  <Icon icon={s.icon} className="text-[#4da3ff] text-2xl" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
                <p className="text-blue-200/60 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsNTIC;
