"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";

const specs = [
  { label: "Profondeur max", value: "500m", icon: "mdi:arrow-expand-down" },
  { label: "Diamètre de forage", value: "50–600mm", icon: "mdi:circle-outline" },
  { label: "Types de terrain", value: "Roche / Sol", icon: "mdi:layers" },
  { label: "Certifications", value: "ISO 22475", icon: "mdi:certificate-outline" },
];

const services = [
  {
    icon: "mdi:water-well",
    title: "Forage de Puits d'Eau",
    desc: "Prospection et captage d'eaux souterraines pour l'alimentation en eau potable, l'irrigation agricole et les besoins industriels.",
    accent: "from-cyan-600 to-blue-600",
    glow: "shadow-cyan-500/20",
  },
  {
    icon: "mdi:shovel",
    title: "Forage Géotechnique",
    desc: "Reconnaissance des sols et prélèvements d'échantillons pour les études de fondation, la stabilité des ouvrages et les projets miniers.",
    accent: "from-amber-600 to-orange-600",
    glow: "shadow-amber-500/20",
  },
  {
    icon: "mdi:pipe",
    title: "Forage de Production",
    desc: "Réalisation de puits de production pour l'exploitation de ressources naturelles, avec installation de pompes et équipements adaptés.",
    accent: "from-emerald-600 to-teal-600",
    glow: "shadow-emerald-500/20",
  },
];

// Animated drill bit visual
const DrillVisual = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[420px]">
      {/* Depth ruler on the left */}
      <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-between py-8 z-10">
        {["0m", "100m", "200m", "300m", "400m", "500m"].map((d, i) => (
          <motion.div
            key={d}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 + 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-[9px] font-mono text-blue-500/60 w-8 text-right">{d}</span>
            <div className="w-3 h-[1px] bg-blue-500/30" />
          </motion.div>
        ))}
      </div>

      {/* Central borehole column */}
      <div className="relative flex flex-col items-center">
        {/* Drill bit machine at top */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative z-20"
        >
          <div className="w-24 h-16 bg-gradient-to-b from-slate-600 to-slate-800 rounded-t-xl border border-slate-500/50 flex items-center justify-center shadow-2xl">
            <Icon icon="mdi:bulldozer" className="text-3xl text-amber-400" />
          </div>
          {/* Machine chassis lines */}
          <div className="w-16 h-4 bg-slate-700 mx-auto border-x border-slate-500/30" />
        </motion.div>

        {/* Drill rod — the animated descending shaft */}
        <div className="relative w-6 overflow-hidden" style={{ height: 280 }}>
          {/* Static outer casing */}
          <div className="absolute inset-x-0 top-0 bottom-0 border-x border-blue-500/20 bg-gradient-to-b from-slate-800/80 to-slate-900/80" />

          {/* Animated segments scrolling downward (simulates rotation/descent) */}
          <motion.div
            animate={{ y: [0, 20] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 top-0"
          >
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-5 border-b border-amber-500/30 flex items-center justify-center"
              >
                <div className="w-1 h-full bg-gradient-to-b from-amber-500/60 to-amber-600/40" />
              </div>
            ))}
          </motion.div>

          {/* Depth progress fill */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "70%" }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
            className="absolute left-0 right-0 top-0 bg-gradient-to-b from-blue-500/10 to-cyan-500/5 pointer-events-none"
          />
        </div>

        {/* Drill bit tip */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="relative z-20"
        >
          <Icon icon="mdi:screw-lag" className="text-4xl text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
        </motion.div>

        {/* Ground contact particles */}
        <div className="relative w-16 h-6 mt-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [(i - 2) * 4, (i - 2) * 12, (i - 2) * 4],
                y: [0, 8, 0],
                opacity: [0.8, 0.2, 0.8],
              }}
              transition={{
                duration: 0.8 + i * 0.1,
                repeat: Infinity,
                delay: i * 0.12,
              }}
              className="absolute bottom-0 left-1/2 w-1 h-1 rounded-full bg-amber-400/60"
              style={{ marginLeft: (i - 2) * 6 }}
            />
          ))}
        </div>
      </div>

      {/* Soil layer legend on the right */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
        {[
          { color: "bg-amber-700/60", label: "Latérite" },
          { color: "bg-stone-600/60", label: "Argile" },
          { color: "bg-slate-500/60", label: "Roche altérée" },
          { color: "bg-slate-700/60", label: "Socle" },
        ].map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 + 0.6 }}
            className="flex items-center gap-2"
          >
            <div className={`w-3 h-3 rounded-sm ${layer.color} border border-white/10`} />
            <span className="text-[9px] font-mono text-gray-500">{layer.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Ambient glow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-24 h-6 bg-amber-500/20 blur-2xl rounded-full" />
    </div>
  );
};

const ForageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 bg-[#020617] relative overflow-hidden border-t border-amber-500/10"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#78350f_1px,transparent_1px),linear-gradient(to_bottom,#78350f_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Warm earth glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />
      {/* Cool blue glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm flex items-center gap-3"
          >
            <span className="w-6 h-[2px] bg-amber-500" />
            Forage & Hydrogéologie
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tighter leading-none"
          >
            NOS MACHINES,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
              EN PROFONDEUR.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-2xl text-gray-400 text-lg leading-relaxed"
          >
            Équipés de foreuses hydrauliques modernes, nous perçons la terre pour vous donner accès aux ressources souterraines — eau, géologie, production — avec une précision d'ingénieur.
          </motion.p>
        </div>

        {/* Main content: visual + services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          {/* LEFT: Drill animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative bg-gradient-to-b from-slate-900/80 to-[#020617] rounded-3xl border border-amber-500/10 overflow-hidden p-4"
          >
            {/* Scanning line */}
            <motion.div
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent z-30 pointer-events-none"
            />
            <DrillVisual />

            {/* Technical badge */}
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full">
              <span className="text-amber-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"
                />
                Opération en cours
              </span>
            </div>
          </motion.div>

          {/* RIGHT: Service cards */}
          <div className="flex flex-col gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                whileHover={{ x: 6 }}
                className={`group flex gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/20 transition-all duration-300 hover:shadow-xl ${s.glow} cursor-default`}
              >
                <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon icon={s.icon} className="text-2xl text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wider">{s.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical specs bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-amber-500/10 rounded-2xl overflow-hidden border border-amber-500/10"
        >
          {specs.map((spec, i) => (
            <div
              key={spec.label}
              className="bg-[#020617] px-6 py-6 flex flex-col gap-3 group hover:bg-amber-500/5 transition-colors duration-300"
            >
              <Icon icon={spec.icon} className="text-amber-500 text-xl" />
              <div>
                <div className="text-white font-black text-xl tracking-tighter">{spec.value}</div>
                <div className="text-gray-600 text-[10px] uppercase tracking-widest mt-0.5">{spec.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-amber-900/20 to-orange-900/10 border border-amber-500/15"
        >
          <div>
            <p className="text-white font-bold">{`Besoin d'un forage de puits ?`}</p>
            <p className="text-gray-500 text-sm">{`Nos équipes interviennent sur toute l'étendue du territoire national.`}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 h-12 px-8 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm flex items-center gap-2 transition-colors duration-200 shadow-lg shadow-amber-500/30"
          >
            Demander un devis
            <Icon icon="mdi:arrow-right" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default ForageSection;
