"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Card, Tag } from 'antd';

const poles = [
  {
    id: 1,
    title: "Navigation Aérienne",
    subtitle: "SÉCURITÉ HAUTE ALTITUDE",
    description: "Unique fournisseur certifié en RDC. Nous concevons l'infrastructure invisible du ciel.",
    icon: "mdi:airplane-cog",
    color: "from-blue-600 to-cyan-500",
    tags: ["SID/STAR", "WGS 84", "Cartes IAC/VAC", "PANS-OPS"],
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Géo-Ingénierie & Mines",
    subtitle: "MAÎTRISE DU SOUTERRAIN",
    description: "Expertise géotechnique complète des missions G1 à G4 pour infrastructures et exploitations minières.",
    icon: "mdi:pillar",
    color: "from-orange-600 to-amber-500",
    tags: ["Missions G1-G4", "Stabilité", "Sondages", "Hydrogéologie"],
    image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Digital & Drone",
    subtitle: "INTELLIGENCE SPATIALE",
    description: "Numérisation du réel via Lidar et Photogrammétrie pour des modèles numériques de terrain (MNT) ultra-précis.",
    icon: "mdi:drone",
    color: "from-purple-600 to-indigo-500",
    tags: ["Lidar", "Photogrammétrie", "MNT/MNS", "SIG"],
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Environnement & Énergie",
    subtitle: "DÉVELOPPEMENT DURABLE",
    description: "Études d'impact environnemental (EIE) et stratégies d'efficacité énergétique pour un avenir responsable.",
    icon: "mdi:leaf-check",
    color: "from-emerald-600 to-teal-500",
    tags: ["EIE / PGES", "Audits", "Énergies", "Conformité"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  }
];

const HomePolesExcellence = () => {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête de section */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm"
          >
            {`Nos Domaines d'Intervention`}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tighter"
          >
            DES SOLUTIONS <span className="text-gray-500 text-outline">SANS LIMITES.</span>
          </motion.h2>
        </div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {poles.map((pole, index) => (
            <motion.div
              key={pole.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image de fond avec overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${pole.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent opacity-90" />
              
              {/* Contenu de la carte */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pole.color} flex items-center justify-center mb-6 shadow-lg transform transition-transform group-hover:rotate-12`}>
                  <Icon icon={pole.icon} className="text-3xl text-white" />
                </div>
                
                <span className="text-blue-400 font-bold text-xs tracking-widest mb-2 uppercase">
                  {pole.subtitle}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {pole.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-sm">
                  {pole.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {pole.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bordure lumineuse au survol */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-3xl transition-colors duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePolesExcellence;