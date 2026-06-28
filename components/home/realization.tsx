"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const realizations = [
  {
    title: "Études géotechniques",
    desc: "SPT, CPT, prélèvements d'échantillons pour la construction de ponts, bâtiments et infrastructures.",
    icon: "mdi:terrain",
    img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Forage d'eau potable",
    desc: "Réalisation de forages et adduction d'eau potable pour les communes et chantiers industriels.",
    icon: "mdi:water-pump",
    img: "https://images.unsplash.com/photo-1624970634440-c4bf8b8c0f51?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Levée de données aéroportuaires",
    desc: "Campagnes de relevés géodésiques sur pistes, voies de circulation et zones de sécurité aérienne.",
    icon: "mdi:map-marker-radius",
    img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=600",
  },
];

const RealizationSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block text-[#0a6dd4] font-bold tracking-[0.25em] uppercase text-xs mb-3 border border-[#0a6dd4]/20 bg-blue-50 px-4 py-1.5 rounded-full"
          >
            Réalisations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black text-[#0a1f44] mt-3"
          >
            Quelques exemples de <span className="text-[#0a6dd4]">travaux réalisés</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {realizations.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={t.img}
                  alt={t.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon icon={t.icon} className="text-[#0a6dd4] text-xl" />
                </div>
                <h3 className="text-[#0a1f44] font-bold text-base mb-2">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 bg-[#0a6dd4] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white"
        >
          <div>
            <h3 className="font-bold text-xl mb-1">{`Nouveau aéroport de N'Djili`}</h3>
            <p className="text-blue-100 text-sm">BIOTOPE a réalisé les études de sol (CPT) et levées de données aéroportuaires pour le nouveau terminal de Kinshasa.</p>
          </div>
          <a href="#contact" className="flex-shrink-0 bg-white text-[#0a6dd4] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm whitespace-nowrap">
            En savoir plus
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RealizationSection;
