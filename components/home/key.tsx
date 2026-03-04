"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Statistic, Row, Col } from 'antd';
import CountUp from 'react-countup'; // npm install react-countup

const stats = [
  {
    label: "Types de Cartes OACI",
    value: 12,
    suffix: "+",
    icon: "mdi:map-legend",
    sub: "Type A, B, IAC, SID/STAR",
    color: "text-blue-600"
  },
  {
    label: "Secteurs Stratégiques",
    value: 4,
    suffix: "",
    icon: "mdi:office-building-marker",
    sub: "Mines, Énergie, Industrie, Transport",
    color: "text-orange-600"
  },
  {
    label: "Précision Géotechnique",
    value: 100,
    suffix: "%",
    icon: "mdi:microscope",
    sub: "Missions G1 à G4 validées",
    color: "text-emerald-600"
  },
  {
    label: "Disponibilité Service",
    value: 24,
    suffix: "/7",
    icon: "mdi:clock-check",
    sub: "Sécurité aérienne continue",
    color: "text-blue-900"
  }
];

const KeyStats = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Eléments décoratifs légers */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter"
          >
            {`L'EXPERTISE EN `} <span className="text-blue-600 italic">CHIFFRES.</span>
          </motion.h2>
          <p className="text-gray-500 mt-4 font-medium uppercase tracking-widest text-xs">
            Performance mesurable & Conformité internationale
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all group"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <Icon icon={stat.icon} className={`text-3xl ${stat.color}`} />
              </div>

              <div className="flex items-baseline gap-1">
                <span className={`text-5xl font-black tracking-tighter ${stat.color}`}>
                  <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                </span>
                <span className="text-2xl font-bold text-gray-400">{stat.suffix}</span>
              </div>

              <div className="mt-4">
                <h4 className="text-gray-900 font-bold text-sm uppercase mb-1">
                  {stat.label}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed font-medium">
                  {stat.sub}
                </p>
              </div>

              {/* Petite barre de progression sous chaque stat */}
              <div className="mt-6 w-12 h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: '100%' }}
                   transition={{ duration: 1.5, delay: 0.5 }}
                   className={`h-full ${stat.color.replace('text', 'bg')}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note sur les infrastructures G3/G4 */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 rounded-3xl bg-blue-900 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-xl">
              <Icon icon="mdi:crane" className="text-3xl text-white" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">{`Suivi & Contrôle d'Infrastructure`}</h4>
              <p className="text-blue-200 text-sm">Spécialiste des missions G3 (exécution) et G4 (supervision).</p>
            </div>
          </div>
          <button className="px-8 py-3 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap">
            Consulter nos réalisations
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyStats;