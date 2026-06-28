"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const menuItems = [
  {
    title: "À Propos",
    links: [
      { label: "Profil de la société", icon: "mdi:office-building" },
      { label: "Notre mission", icon: "mdi:target" },
      { label: "Nos partenaires", icon: "mdi:handshake" },
      { label: "Notre équipe", icon: "mdi:account-group" },
    ]
  },
  {
    title: "Eaux & Environnement",
    links: [
      { label: "Études d'Impact Environnemental (EIES)", icon: "mdi:leaf" },
      { label: "Plan de Gestion Environnementale (PGES)", icon: "mdi:clipboard-check" },
      { label: "Plan d'Action de Réinstallation (PAR)", icon: "mdi:home-move" },
      { label: "Audit Environnemental et Social", icon: "mdi:magnify" },
      { label: "Gestion intégrée de l'eau & Forage", icon: "mdi:water-pump" },
      { label: "Sensibilisation environnementale", icon: "mdi:school" },
    ]
  },
  {
    title: "Construction & Ingénierie",
    links: [
      { label: "Études géotechniques & géophysiques", icon: "mdi:terrain" },
      { label: "Architecture & Urbanisation", icon: "mdi:city" },
      { label: "Location d'équipements", icon: "mdi:crane" },
      { label: "Recherche & Développement", icon: "mdi:flask" },
    ]
  },
  {
    title: "Navigation Aérienne",
    links: [
      { label: "Cartes aéronautiques (IAC, VAC)", icon: "mdi:map" },
      { label: "Collecte de données eTOD", icon: "mdi:database" },
      { label: "Conception de procédures de vol", icon: "mdi:airplane-takeoff" },
      { label: "Campagnes WGS 84", icon: "mdi:earth" },
      { label: "Procédures PANS-OPS", icon: "mdi:certificate" },
    ]
  },
  {
    title: "SIG & Télédétection",
    links: [
      { label: "Cartographie numérique & Topographie", icon: "mdi:map-marker-radius" },
      { label: "Acquisition par drone", icon: "mdi:drone" },
      { label: "Planification spatiale & Aménagement", icon: "mdi:layers" },
      { label: "Gestion foncière", icon: "mdi:home-city" },
    ]
  },
  {
    title: "NTIC & Mines",
    links: [
      { label: "Développement web & applications", icon: "mdi:web" },
      { label: "Gestion base de données & réseaux", icon: "mdi:server" },
      { label: "Installation caméras & communication", icon: "mdi:cctv" },
      { label: "Installation photovoltaïque", icon: "mdi:solar-panel" },
      { label: "Exploitation minière", icon: "mdi:pickaxe" },
    ]
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden lg:block bg-[#0a1f44] text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6 text-blue-200">
            <span className="flex items-center gap-1"><Icon icon="mdi:map-marker" className="text-blue-400" /> N°60 Avenue KIBATI, Quartier BOYOMA, Commune de Kinshasa</span>
            <span className="flex items-center gap-1"><Icon icon="mdi:email-outline" className="text-blue-400" /> contact@biotopecn.org</span>
          </div>
          <div className="flex gap-6 text-blue-200">
            <span className="flex items-center gap-1"><Icon icon="mdi:phone" className="text-blue-400" /> +243 82 29 51 339</span>
            <div className="flex gap-2">
              {['mdi:linkedin', 'mdi:facebook', 'mdi:twitter'].map(s => (
                <a key={s} href="#" className="hover:text-white transition-colors"><Icon icon={s} /></a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md bg-white' : 'bg-white border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 bg-[#0a1f44] rounded-lg flex items-center justify-center">
                <img src="/images/logo-png.png" alt="BIOTOPE" className="w-full h-full object-contain rounded-lg" />
              </div>
              <div>
                <div className="font-black text-[#0a1f44] text-lg tracking-tight leading-none">BIOTOPE</div>
                <div className="text-[9px] font-semibold text-gray-500 uppercase tracking-[0.15em]">Consulting Network</div>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-1" onMouseLeave={() => setActiveTab(null)}>
              {menuItems.map((item) => (
                <div key={item.title} className="relative" onMouseEnter={() => setActiveTab(item.title)}>
                  <button className={`flex items-center gap-1 px-3 py-2 rounded text-sm font-semibold transition-colors ${
                    activeTab === item.title ? 'text-[#0a6dd4] bg-blue-50' : 'text-gray-700 hover:text-[#0a6dd4] hover:bg-gray-50'
                  }`}>
                    {item.title}
                    <ChevronDown className={`w-3 h-3 transition-transform ${activeTab === item.title ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeTab === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                      >
                        {item.links.map(link => (
                          <Link key={link.label} href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0a6dd4] transition-colors">
                            <Icon icon={link.icon} className="text-[#0a6dd4] text-base flex-shrink-0" />
                            <span>{link.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA + MOBILE TOGGLE */}
            <div className="flex items-center gap-3">
              <Link href="#contact" className="hidden lg:inline-flex items-center gap-2 bg-[#0a6dd4] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#0a1f44] transition-colors">
                <Icon icon="mdi:phone" />
                Contactez-nous
              </Link>
              <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-700 p-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="max-h-[70vh] overflow-y-auto px-4 py-4 space-y-1">
                {menuItems.map(item => (
                  <div key={item.title}>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.title ? null : item.title)}
                      className="w-full flex justify-between items-center py-3 font-bold text-gray-800 text-sm"
                    >
                      {item.title}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.title ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === item.title && (
                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden pl-4 space-y-1 pb-2">
                          {item.links.map(link => (
                            <Link key={link.label} href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-[#0a6dd4]">
                              <Icon icon={link.icon} className="text-[#0a6dd4]" />
                              {link.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="pt-4 pb-2">
                  <Link href="#contact" className="block text-center bg-[#0a6dd4] text-white px-5 py-3 rounded-lg font-bold text-sm" onClick={() => setIsOpen(false)}>
                    Contactez-nous
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
