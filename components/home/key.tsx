"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import CountUp from 'react-countup';

const stats = [
  {
    label: "Années d'expérience",
    value: 5,
    suffix: "+",
    icon: "mdi:calendar-check",
    sub: "Depuis 2019 en RDC",
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    label: "Secteurs Stratégiques",
    value: 6,
    suffix: "",
    icon: "mdi:office-building-marker",
    sub: "Env., Aérien, Mines, NTIC, Géo., Infra.",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  {
    label: "Agréments obtenus",
    value: 5,
    suffix: "",
    icon: "mdi:certificate",
    sub: "AAC, ACE, Défense, Intérieur, Min. Transport",
    color: "text-orange-700",
    bg: "bg-orange-50",
  },
  {
    label: "Disponibilité Service",
    value: 24,
    suffix: "/7",
    icon: "mdi:clock-check",
    sub: "Support continu sécurité aérienne",
    color: "text-purple-700",
    bg: "bg-purple-50",
  }
];

const partners = [
  "Régie des Voies Aériennes (RVA)",
  "Régie des Voies Fluviales",
  "Ministère de la Défense Nationale",
  "Ministère de l'Intérieur",
  "Ministère de la Formation Professionnelle",
  "Ministère de l'Industrie",
  "INFRAROSE",
  "Impact Centre Chrétien (ICC)",
];

const KeyStats = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block text-[#0a6dd4] font-bold tracking-[0.25em] uppercase text-xs mb-3 border border-[#0a6dd4]/20 bg-blue-50 px-4 py-1.5 rounded-full"
          >
            Notre Bilan
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black text-[#0a1f44] tracking-tight mt-3"
          >
            L'expertise en <span className="text-[#0a6dd4]">chiffres</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="p-7 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all group"
            >
              <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mb-5`}>
                <Icon icon={stat.icon} className={`text-2xl ${stat.color}`} />
              </div>
              <div className={`text-5xl font-black tracking-tight ${stat.color} flex items-baseline gap-1`}>
                <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                <span className="text-2xl">{stat.suffix}</span>
              </div>
              <h4 className="text-gray-800 font-bold text-sm mt-3 mb-1">{stat.label}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Partenaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#0a1f44] rounded-2xl p-8 md:p-10"
        >
          <div className="text-center mb-8">
            <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">Nos Partenaires</span>
            <h3 className="text-white font-bold text-xl mt-1">Ils nous font confiance</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map(p => (
              <span key={p} className="bg-white/10 border border-white/20 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyStats;
