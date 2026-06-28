"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const agrements = [
  { name: "Agrément AAC", detail: "AAC/100/DG/NBE/DSNA/AIS-MAP/001/2025", icon: "mdi:airplane-check" },
  { name: "Agrément ACE", detail: "003/CAB/MIN/EDD/AAN/TNT/SAA/2019", icon: "mdi:leaf" },
  { name: "Agrément Défense", detail: "N°VPM/MDNAC/CAB/2490/2025", icon: "mdi:shield-check" },
  { name: "Agrément Intérieur", detail: "N°250/000/478/2025", icon: "mdi:home-city" },
  { name: "RCCM", detail: "CD/KNG/RCCM/21-B-03426", icon: "mdi:file-certificate" },
  { name: "CNSS", detail: "N° Affiliation 1020456300", icon: "mdi:account-group" },
];

const Compliance = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* GAUCHE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="inline-block text-[#0a6dd4] font-bold tracking-[0.25em] uppercase text-xs mb-4 border border-[#0a6dd4]/20 bg-blue-50 px-4 py-1.5 rounded-full">
              Notre Engagement
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0a1f44] leading-tight mb-6">
              Une société régulièrement<br />
              <span className="text-[#0a6dd4]">agréée & reconnue</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              BIOTOPE opère dans le strict respect des réglementations nationales et internationales. Nos agréments officiels garantissent la qualité et la conformité de chacune de nos prestations en RDC.
            </p>
            <div className="p-5 bg-[#0a1f44] rounded-xl text-white">
              <div className="flex items-start gap-3">
                <Icon icon="mdi:information-outline" className="text-blue-300 text-xl mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-sm mb-1">Siège Social</div>
                  <div className="text-blue-200 text-sm">N°60 Avenue KIBATI, Quartier BOYOMA, Commune de Kinshasa, RDC</div>
                  <div className="text-blue-200 text-sm mt-1">ID NAT : 01-H5300-N97645W · N° Impôt : A2205273G</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* DROITE: Agréments */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {agrements.map((a, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex items-start gap-3"
                >
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon icon={a.icon} className="text-[#0a6dd4] text-lg" />
                  </div>
                  <div>
                    <h4 className="text-[#0a1f44] font-bold text-sm">{a.name}</h4>
                    <p className="text-gray-400 text-[10px] mt-0.5 font-mono leading-relaxed">{a.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
