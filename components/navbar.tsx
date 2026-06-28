"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const menuSections = [
  {
    type: 'link',
    label: 'Accueil',
    href: '/',
    icon: 'mdi:home-outline',
    iconBg: '#eef4fd',
    iconColor: '#0a6dd4',
  },
  {
    type: 'link',
    label: 'À propos',
    href: '#about',
    icon: 'mdi:office-building-outline',
    iconBg: '#f0f0f5',
    iconColor: '#444',
  },
  { type: 'divider', label: 'Nos Services' },
  {
    type: 'link',
    label: 'Eaux & Environnement',
    href: '#services',
    icon: 'mdi:leaf-circle-outline',
    iconBg: '#e8f5ee',
    iconColor: '#1a7a4a',
  },
  {
    type: 'link',
    label: 'Construction & Géotechnique',
    href: '#services',
    icon: 'mdi:terrain',
    iconBg: '#fff3e8',
    iconColor: '#c05c10',
  },
  {
    type: 'link',
    label: 'Navigation Aérienne',
    href: '#services',
    icon: 'mdi:airplane-cog',
    iconBg: '#e8f0fd',
    iconColor: '#1a52b8',
  },
  {
    type: 'link',
    label: 'SIG & Télédétection',
    href: '#services',
    icon: 'mdi:drone',
    iconBg: '#f0eafd',
    iconColor: '#6b35c9',
  },
  {
    type: 'link',
    label: 'NTIC & Mines & Énergie',
    href: '#services',
    icon: 'mdi:server-network',
    iconBg: '#e8f8fd',
    iconColor: '#0a7fa0',
  },
  { type: 'separator' },
  {
    type: 'link',
    label: 'Réalisations',
    href: '#realisations',
    icon: 'mdi:image-multiple-outline',
    iconBg: '#fdf5e8',
    iconColor: '#c08a10',
  },
  {
    type: 'link',
    label: 'Partenaires',
    href: '#partenaires',
    icon: 'mdi:handshake-outline',
    iconBg: '#f0fdf4',
    iconColor: '#166534',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Empêcher le scroll body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden md:block bg-[#0a1f44] text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-[11px] text-blue-200">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Icon icon="mdi:map-marker-outline" className="text-blue-400 text-sm" />
              N°60 Avenue KIBATI, Quartier BOYOMA, Kinshasa – RDC
            </span>
            <span className="flex items-center gap-1.5">
              <Icon icon="mdi:email-outline" className="text-blue-400 text-sm" />
              contact@biotopecn.org
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <Icon icon="mdi:phone-outline" className="text-blue-400 text-sm" />
            +243 82 29 51 339
          </span>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-[#0a1f44] rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/images/logo-png.png" alt="BIOTOPE" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-black text-[#0a1f44] text-[17px] tracking-tight leading-none">BIOTOPE</div>
              <div className="text-[9px] font-semibold text-gray-400 uppercase tracking-[0.18em] mt-0.5">Consulting Network</div>
            </div>
          </Link>

          {/* RIGHT: CTA + HAMBURGER */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-[#0a6dd4] hover:bg-[#0858b0] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
            >
              Devis gratuit
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Ouvrir le menu"
              className="w-11 h-11 flex flex-col items-center justify-center gap-[5px] border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="w-[18px] h-[2px] bg-[#0a1f44] rounded-full block" />
              <span className="w-[18px] h-[2px] bg-[#0a1f44] rounded-full block" />
              <span className="w-[12px] h-[2px] bg-[#0a1f44] rounded-full block self-start ml-[3px]" />
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#0a1f44]/50 backdrop-blur-sm z-[60]"
          />
        )}
      </AnimatePresence>

      {/* SIDE PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 h-full w-[300px] bg-white z-[70] flex flex-col shadow-2xl"
          >
            {/* Panel header */}
            <div className="bg-[#0a1f44] px-5 py-4 flex items-center justify-between flex-shrink-0">
              <div>
                <div className="font-black text-white text-[16px] tracking-tight">BIOTOPE</div>
                <div className="text-[9px] text-blue-300 uppercase tracking-[0.18em] mt-0.5">Consulting Network</div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Fermer le menu"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <X size={16} className="text-white" />
              </button>
            </div>

            {/* Scrollable links */}
            <div className="flex-1 overflow-y-auto py-3 px-3">
              {menuSections.map((item, i) => {
                if (item.type === 'divider') {
                  return (
                    <div key={i} className="px-3 pt-4 pb-1.5">
                      <span className="text-[10px] font-bold text-[#0a6dd4] uppercase tracking-[0.18em]">
                        {item.label}
                      </span>
                    </div>
                  );
                }
                if (item.type === 'separator') {
                  return <div key={i} className="mx-3 my-2 border-t border-gray-100" />;
                }
                return (
                  <Link
                    key={i}
                    href={item.href!}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group mb-0.5"
                  >
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: item.iconBg }}
                    >
                      <Icon icon={item.icon!} className="text-lg" style={{ color: item.iconColor }} />
                    </span>
                    <span className="text-[13px] font-semibold text-gray-700 group-hover:text-[#0a1f44] transition-colors">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* CTA bas */}
            <div className="flex-shrink-0 p-4 border-t border-gray-100 bg-gray-50">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#0a6dd4] hover:bg-[#0858b0] text-white font-bold text-sm py-3 rounded-xl transition-colors w-full"
              >
                <Icon icon="mdi:phone-outline" className="text-base" />
                Nous contacter
              </Link>
              <div className="mt-3 text-center text-[10px] text-gray-400">
                +243 82 29 51 339 · contact@biotopecn.org
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
