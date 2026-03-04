"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const LogisticsNTIC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* BLOC LOGISTIQUE PÉTROLIÈRE (7 Colonnes) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 relative group overflow-hidden rounded-[2.5rem] bg-blue-900 text-white p-8 md:p-12 shadow-2xl"
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 bg-orange-500 rounded-2xl shadow-lg shadow-orange-500/40">
                  <Icon icon="mdi:fuel" className="text-3xl text-white" />
                </div>
                <Tag text="Opérationnel" color="bg-orange-500" />
              </div>

              <h3 className="text-4xl font-black mb-6 leading-tight">
                Logistique & Flux <br /> 
                <span className="text-orange-400">Pétroliers.</span>
              </h3>
              
              <p className="text-blue-100/70 mb-8 max-w-md leading-relaxed">
                Une flotte spécialisée et une gestion rigoureuse des flux de carburants pour alimenter les industries vitales de la RDC.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-auto">
                <div className="border-l-2 border-orange-500 pl-4">
                  <span className="block text-2xl font-bold italic">Flotte</span>
                  <span className="text-xs uppercase tracking-widest text-blue-300">Sécurisée & Certifiée</span>
                </div>
                <div className="border-l-2 border-orange-500 pl-4">
                  <span className="block text-2xl font-bold italic">Suivi</span>
                  <span className="text-xs uppercase tracking-widest text-blue-300">Temps Réel (GPS)</span>
                </div>
              </div>
            </div>

            {/* Décoration d'arrière-plan - Simulation de trajectoire */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <Icon icon="mdi:truck-fast" className="absolute -right-20 -bottom-20 text-[25rem] rotate-12" />
            </div>
          </motion.div>

          {/* BLOC NTIC & FUTUR (5 Colonnes) - Style Ultra-Moderne */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 relative rounded-[2.5rem] bg-white border border-slate-200 p-8 md:p-12 shadow-xl flex flex-col justify-center"
          >
            <div className="mb-8">
              <h4 className="text-blue-600 font-mono font-bold text-xs uppercase tracking-[0.3em] mb-4">
                Pôle Digital (NTIC)
              </h4>
              <h3 className="text-3xl font-black text-slate-900 leading-none">
                Transformation <br /> <span className="text-blue-500">Numérique.</span>
              </h3>
            </div>

            <div className="space-y-6">
              {[
                { icon: "mdi:shield-lock", title: "Cyber-sécurité", desc: "Protection des infrastructures critiques." },
                { icon: "mdi:code-braces", title: "Logiciels Sur Mesure", desc: "Applications métiers pour l'industrie." },
                { icon: "mdi:server-network", title: "Infrastructure IT", desc: "Réseaux robustes et évolutifs." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group cursor-help">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon icon={item.icon} className="text-2xl" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 text-sm uppercase tracking-tight">{item.title}</h5>
                    <p className="text-slate-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Animation "Circuit Imprimé" subtile en bas */}
            <div className="mt-10 pt-6 border-t border-slate-100">
               <div className="flex items-center gap-2 text-blue-500 animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Systèmes Connectés</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Petit sous-composant utilitaire pour les badges
const Tag = ({ text, color }: { text: string, color: string }) => (
  <span className={`${color} text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-[0.2em] shadow-sm`}>
    {text}
  </span>
);

export default LogisticsNTIC;