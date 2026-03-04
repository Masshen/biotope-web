"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const WgsSection = () => {
  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden border-t border-blue-500/10">
      {/* Grille de fond type "Blueprint" */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* CÔTÉ GAUCHE : VISUEL TECHNIQUE RÉVOLUTIONNAIRE */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-square max-w-[500px] mx-auto"
            >
              {/* Cercles concentriques animés (Radar Géodésique) */}
              <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-10 border border-blue-400/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Le "Globe" ou Point de donnée central */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <Icon icon="mdi:target-variant" className="text-8xl text-blue-500 animate-pulse" />
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-4 border-t-2 border-blue-400 rounded-full"
                  />
                </div>
              </div>

              {/* Étiquettes de coordonnées flottantes (Effet Extraordinaire) */}
              {[
                { top: '10%', left: '80%', txt: 'LAT: -4.3224', val: 'S' },
                { top: '80%', left: '10%', txt: 'LON: 15.3070', val: 'E' },
                { top: '40%', left: '-5%', txt: 'ALT: 312m', val: 'MSL' },
              ].map((coord, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                  className="absolute p-2 bg-blue-900/30 backdrop-blur-md border border-blue-500/30 rounded text-[10px] font-mono text-blue-300"
                  style={{ top: coord.top, left: coord.left }}
                >
                  <span className="opacity-50">{coord.txt}</span> <span className="text-white font-bold">{coord.val}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CÔTÉ DROIT : CONTENU TECHNIQUE */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-blue-500 font-mono tracking-tighter mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-blue-500"></span> 
                NORME RÉFÉRENTIELLE WGS 84
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                La Géodésie au service de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Sécurité Aérienne.</span>
              </h3>
              
              <p className="text-gray-400 mb-8 leading-relaxed italic border-l-2 border-blue-600 pl-6">
                Pour que chaque vol soit sûr, nous convertissons la réalité physique du terrain congolais en données numériques millimétrées.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature 1: eTOD */}
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors group">
                  <Icon icon="mdi:layers-triple" className="text-3xl text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Collecte eTOD</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Données Électroniques de Terrain et d’Obstacles indispensables pour les systèmes de navigation par satellite (GNSS).
                  </p>
                </div>

                {/* Feature 2: Campagnes WGS 84 */}
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors group">
                  <Icon icon="mdi:satellite-variant" className="text-3xl text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Référentiel WGS 84</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {`Mise en conformité des coordonnées géographiques des aérodromes selon les standards de l'OACI.`}
                  </p>
                </div>
              </div>

              {/* Barre de progression technique (Extraordinaire) */}
              <div className="mt-12 p-4 bg-blue-600/10 rounded-xl border border-blue-600/20">
                <div className="flex justify-between text-[10px] text-blue-400 font-bold mb-2 uppercase tracking-tighter">
                  <span>Précision de collecte</span>
                  <span>99.999% (Norme PANS-OPS)</span>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WgsSection;