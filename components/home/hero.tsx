"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Button } from 'antd';

const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* BACKGROUND VIDEO OU GRADIENT DYNAMIQUE */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-[#020617] to-[#020617] z-10" />
        {/* On simule ici le nuage de points Lidar avec un overlay texturé */}
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0" />
        
        {/* Cercles radar animés (L'aspect "Révolutionnaire") */}
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/20 rounded-full z-0"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center pt-20">
        {/* Badge de Certification / Statut Unique */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-8"
        >
          <Icon icon="mdi:shield-airplane" className="text-lg animate-pulse" />
          Unique Fournisseur de Services de Navigation Aérienne en RDC
        </motion.div>

        {/* Titre Principal */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.9]"
        >
          {`L'ARCHITECTURE DE LA`} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white italic">
            PRÉCISION
          </span>
        </motion.h1>

        {/* Sous-titre Professionnel */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100/60 mb-10 leading-relaxed font-light"
        >
          {`De la Terre au Ciel, nous sécurisons l'espace aérien congolais par la cartographie de haute précision et l'ingénierie géotechnique de pointe.`}
        </motion.p>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            type="primary" 
            size="large"
            className="h-16 px-10 rounded-full bg-blue-600 hover:bg-blue-500 border-none font-bold text-lg flex items-center gap-3 shadow-2xl shadow-blue-600/40"
          >
            {`Découvrir nos pôles d'expertise`}
            <Icon icon="mdi:arrow-right" />
          </Button>
          
          <Button 
            ghost
            size="large"
            className="h-16 px-10 rounded-full border-white/20 hover:border-white/40 text-white font-bold text-lg flex items-center gap-3 backdrop-blur-md"
          >
            <Icon icon="mdi:play-circle-outline" className="text-2xl" />
            Voir la démo WGS 84
          </Button>
        </motion.div>

        {/* Indicateurs Techniques flottants (Aspect Data-Driven) */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-10">
          {[
            { label: "Précision", value: "Centimétrique", icon: "mdi:target" },
            { label: "Normes", value: "OACI / PANS-OPS", icon: "mdi:certificate" },
            { label: "Données", value: "eTOD / WGS 84", icon: "mdi:database-check" },
            { label: "Couverture", value: "Territoire National", icon: "mdi:map-marker-radius" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="text-left"
            >
              <div className="flex items-center gap-2 text-blue-500 mb-1">
                <Icon icon={stat.icon} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{stat.label}</span>
              </div>
              <div className="text-white font-bold text-sm">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animation de scan laser (Ligne horizontale qui descend) */}
      <motion.div 
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-10 pointer-events-none"
      />
    </section>
  );
};

export default HomeHero;