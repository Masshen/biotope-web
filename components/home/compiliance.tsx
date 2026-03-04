"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Divider } from 'antd';

const Compliance = () => {
  const certifications = [
    { name: "OACI / ICAO", detail: "Standards Annexes 4 & 15", icon: "mdi: plains-trip" },
    { name: "PANS-OPS", detail: "Procédures de vol certifiées", icon: "mdi: file-certificate" },
    { name: "WGS 84", detail: "Géodésie de précision mondiale", icon: "mdi: earth-box" },
    { name: "NORME G1-G4", detail: "Rigueur NF P 94-500", icon: "mdi: hammer-wrench" },
  ];

  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Texture de fond : Lignes de topographie subtiles */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* GAUCHE : L'ENGAGEMENT (La Citation Révolutionnaire) */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <Icon icon="fa:quote-left" className="text-6xl text-blue-500/20 absolute -top-10 -left-10" />
              
              <h2 className="text-blue-500 font-mono text-sm tracking-[0.4em] mb-6 uppercase">
                Notre Engagement Durable
              </h2>
              
              <blockquote className="text-3xl md:text-4xl font-light text-white leading-tight mb-8 italic">
                {`"De l'éclat de l'exploration initiale à la noblesse de la réhabilitation minière, nous sommes le garant de l'intégrité de vos données et de la sécurité de vos infrastructures."`}
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-blue-500" />
                <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">
                  Direction Générale, Biotope Consulting Network
                </p>
              </div>
            </motion.div>
          </div>

          {/* DROITE : LA RIGUEUR (Technologies & Normes) */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                <Icon icon="mdi:shield-check" className="text-blue-500" />
                CONFORMITÉ ABSOLUE
              </h3>
              
              <p className="text-gray-400 mb-10 text-sm leading-relaxed">
                {`Biotope Consulting Network s'appuie sur des technologies de pointe (Lidar, GNSS haute fréquence) pour répondre aux exigences les plus strictes des régulateurs nationaux et internationaux.`}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-blue-600/10 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Icon icon={cert.icon} className="text-2xl text-blue-400" />
                      <div>
                        <h4 className="text-white font-bold text-sm tracking-tight">{cert.name}</h4>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">{cert.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Divider className="border-white/10" />

              <div className="flex justify-between items-center opacity-60">
                <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">Technologie de pointe</span>
                <div className="flex gap-4">
                   <Icon icon="simple-icons:autodesk" className="text-xl text-white" />
                   <Icon icon="simple-icons:esri" className="text-xl text-white" />
                   <Icon icon="mdi:drone" className="text-xl text-white" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Compliance;