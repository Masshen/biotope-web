"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Plane, HardHat, Database, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // Gestion du scroll pour l'effet "révolutionnaire"
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: "Navigation Aérienne",
      icon: <Plane className="w-4 h-4" />,
      description: "Leader en RDC pour la cartographie et procédures de vol.",
      links: ["Cartographie Aéronautique", "Campagne WGS 84", "Conception de Procédures"]
    },
    {
      title: "Géo-Ingénierie",
      icon: <HardHat className="w-4 h-4" />,
      description: "Études géotechniques G1-G4 et évaluations environnementales.",
      links: ["Études Géotechniques", "Évaluation Environnementale", "Mines & Énergie"]
    },
    {
      title: "Digital & Drone",
      icon: <Database className="w-4 h-4" />,
      description: "Solutions SIG, télédétection et acquisition par drone.",
      links: ["Acquisition Drone", "Solutions SIG", "Cyber-sécurité"]
    }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mr-3 shadow-inner">
               <span className="text-white font-bold text-xl hidden">B</span>
               <img src="/images/logo-png.png" alt="logo" className='w-100 rounded-4xl' />
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-xl tracking-tighter ${scrolled ? 'text-blue-900' : 'text-white'}`}>
                BIOTOPE
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${scrolled ? 'text-gray-500' : 'text-blue-200'}`}>
                Consulting Network
              </span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div 
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveTab(item.title)}
                onMouseLeave={() => setActiveTab(null)}
              >
                <button className={`flex items-center gap-1 font-medium text-sm transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
                }`}>
                  {item.icon}
                  {item.title}
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>

                {/* MEGA MENU DROPDOWN */}
                <AnimatePresence>
                  {activeTab === item.title && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className="absolute top-full -left-4 w-72 bg-white rounded-2xl shadow-2xl p-6 mt-4 border border-gray-100"
                    >
                      <p className="text-xs text-blue-600 font-bold uppercase mb-3 tracking-widest">{item.title}</p>
                      <p className="text-gray-500 text-xs mb-4 leading-relaxed">{item.description}</p>
                      <div className="space-y-3">
                        {item.links.map(link => (
                          <Link key={link} href="#" className="block text-sm text-gray-800 hover:text-blue-600 font-semibold transition-colors">
                            {link}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <button className="hidden bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30">
              Espace Client
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-gray-900' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-blue-900 z-50 lg:hidden flex flex-col p-8"
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsOpen(false)} className="text-white"><X size={32} /></button>
            </div>
            <div className="space-y-8">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <h3 className="text-blue-300 text-xs font-bold uppercase tracking-[0.3em] mb-4">{item.title}</h3>
                  <div className="flex flex-col space-y-4">
                    {item.links.map(link => (
                      <Link key={link} href="#" onClick={() => setIsOpen(false)} className="text-white text-2xl font-bold hover:text-blue-400">
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;