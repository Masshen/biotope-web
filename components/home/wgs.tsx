"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const WgsSection = () => {
  const features = [
    { icon: "mdi:layers-triple", title: "Collecte eTOD", desc: "Terrain electronic Terrain and Obstacle Data pour la sécurité des approches." },
    { icon: "mdi:map", title: "Cartes Aéronautiques", desc: "Production de cartes d'aérodromes, IAC, VAC, SID/STAR selon normes OACI." },
    { icon: "mdi:earth", title: "Système WGS 84", desc: "Référentiel géodésique mondial pour la précision des données de navigation." },
    { icon: "mdi:airplane-cog", title: "Procédures PANS-OPS", desc: "Conception et maintenance des procédures d'approche, départ et arrivée." },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* DROITE : Texte */}
          <div className="w-full lg:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block text-[#0a6dd4] font-bold tracking-[0.25em] uppercase text-xs mb-4 border border-[#0a6dd4]/20 bg-blue-50 px-4 py-1.5 rounded-full"
            >
              Navigation Aérienne
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-black text-[#0a1f44] leading-tight mb-4"
            >
              Unique prestataire certifié<br />
              <span className="text-[#0a6dd4]">en RDC</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-600 leading-relaxed mb-8 text-sm border-l-4 border-[#0a6dd4] pl-4"
            >
              Agréé par l'Autorité de l'Aviation Civile (AAC/100/DG/NBE/2025), BIOTOPE sécurise l'espace aérien congolais grâce à la cartographie de haute précision et la gestion de l'information aéronautique.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all"
                >
                  <Icon icon={f.icon} className="text-[#0a6dd4] text-2xl mb-3" />
                  <h4 className="text-[#0a1f44] font-bold text-sm mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* GAUCHE : Visuel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative bg-[#0a1f44] rounded-2xl overflow-hidden aspect-square max-w-[480px] mx-auto flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              {/* Cercles radar */}
              <div className="absolute inset-8 border border-blue-500/20 rounded-full" />
              <div className="absolute inset-16 border border-blue-500/15 rounded-full" />
              <div className="absolute inset-24 border border-blue-500/10 rounded-full" />

              <div className="relative z-10 text-center p-10">
                <Icon icon="mdi:airplane-cog" className="text-[#4da3ff] text-8xl mb-6 mx-auto" />
                
                {[
                  { top: '12%', right: '8%', txt: 'LAT: -4.3224° S' },
                  { bottom: '18%', left: '5%', txt: 'LON: 15.3070° E' },
                  { top: '45%', left: '0%', txt: 'ALT: 312m MSL' },
                ].map((coord, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, delay: i * 0.7, repeat: Infinity }}
                    className="absolute bg-[#0a6dd4]/80 backdrop-blur border border-blue-400/30 rounded-lg px-3 py-1.5 text-[10px] font-mono text-white"
                    style={{ top: coord.top, bottom: coord.bottom, left: coord.left, right: coord.right }}
                  >
                    {coord.txt}
                  </motion.div>
                ))}

                <div className="text-blue-300 text-sm font-bold tracking-widest uppercase">WGS 84</div>
                <div className="text-blue-400/60 text-[10px] mt-1">Référentiel Géodésique Mondial</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WgsSection;
