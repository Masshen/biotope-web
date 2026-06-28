"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const poles = [
  {
    title: "Eaux & Environnement",
    subtitle: "ÉTUDES D'IMPACT",
    description: "EIES, PGES, PAR, audits environnementaux et sociaux. Gestion intégrée de l'eau, forêts et ressources naturelles pour un développement durable.",
    icon: "mdi:leaf-check",
    color: "bg-emerald-600",
    tags: ["EIES / PGES", "PAR / PRI", "Forage d'eau", "Audit AES"],
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Génie civile",
    subtitle: "INGÉNIERIE DU SOL",
    description: "Études géotechniques et géophysiques, architecture, urbanisation, location d'équipements de construction. Missions G1 à G4.",
    icon: "mdi:terrain",
    color: "bg-orange-600",
    tags: ["CPT / SPT", "Missions G1-G4", "Architecture", "Forage"],
    image: "/images/design-hills-hfI0pr6g4yw-unsplash.jpg"
  },
  {
    title: "Navigation Aérienne",
    subtitle: "SÉCURITÉ AÉRONAUTIQUE",
    description: "Unique fournisseur certifié en RDC. Cartes aéronautiques IAC/VAC, collecte eTOD, conception de procédures de vol et campagnes WGS 84.",
    icon: "mdi:airplane-cog",
    color: "bg-blue-600",
    tags: ["WGS 84", "eTOD", "Cartes IAC/VAC", "PANS-OPS"],
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "SIG, Télédétection & NTIC",
    subtitle: "INTELLIGENCE SPATIALE",
    description: "Cartographie numérique centimétrique par drone, télédétection, SIG, développement d'applications web, gestion de réseaux et bases de données.",
    icon: "mdi:drone",
    color: "bg-purple-600",
    tags: ["Cartographie", "SIG / MNT", "Dev. Web", "Dev. Mobile", "Dev. Desktop", "BD", "Photovoltaïque"],
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800"
  }
];

const HomePolesExcellence = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block text-[#0a6dd4] font-bold tracking-[0.25em] uppercase text-xs mb-3 border border-[#0a6dd4]/20 bg-blue-50 px-4 py-1.5 rounded-full"
          >
            Nos Domaines d'Intervention
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-[#0a1f44] tracking-tight mt-3"
          >
            Ce que nous offrons
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-500 max-w-xl mx-auto text-base"
          >
            BIOTOPE accompagne les acteurs publics et privés à travers une expertise multidisciplinaire au service du développement durable de la RDC.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {poles.map((pole, index) => (
            <motion.div
              key={pole.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative h-[380px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${pole.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/95 via-[#0a1f44]/50 to-transparent" />

              <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <div className={`w-11 h-11 rounded-xl ${pole.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon icon={pole.icon} className="text-2xl text-white" />
                </div>
                <span className="text-blue-300 font-bold text-[10px] tracking-[0.25em] uppercase mb-1">{pole.subtitle}</span>
                <h3 className="text-2xl font-bold text-white mb-3">{pole.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-sm">
                  {pole.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pole.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/15 backdrop-blur border border-white/15 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePolesExcellence;
