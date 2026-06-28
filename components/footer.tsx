"use client";
import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1f44] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Identité */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <img src="/images/logo-png.png" alt="BIOTOPE" className="w-full h-full object-contain rounded-lg" />
              </div>
              <div>
                <div className="font-black text-white text-lg tracking-tight">BIOTOPE</div>
                <div className="text-[9px] text-blue-300 uppercase tracking-[0.15em]">Consulting Network</div>
              </div>
            </div>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              Bureau d'Innovation et d'Ordonnancement Technologique Optimal des Projets Environnementaux.<br />
              <span className="text-blue-300 font-mono text-xs">SARLU · Kinshasa, RDC</span>
            </p>
            <div className="space-y-1.5 text-blue-200/70 text-xs">
              <div><span className="text-blue-400 font-bold">RCCM :</span> CD/KNG/RCCM/21-B-03426</div>
              <div><span className="text-blue-400 font-bold">ID NAT :</span> 01-H5300-N97645W</div>
              <div><span className="text-blue-400 font-bold">Impôt :</span> A2205273G</div>
            </div>
            <div className="flex gap-3 pt-1">
              {[
                { icon: 'mdi:linkedin', href: '#' },
                { icon: 'mdi:facebook', href: '#' },
                { icon: 'mdi:twitter', href: '#' },
                { icon: 'mdi:youtube', href: '#' },
              ].map(s => (
                <a key={s.icon} href={s.href} className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0a6dd4] transition-colors border border-white/10">
                  <Icon icon={s.icon} className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Services 1 */}
          <div>
            <h4 className="text-blue-300 font-bold uppercase tracking-widest text-xs mb-5">Environnement & Génie</h4>
            <ul className="space-y-3 text-sm text-blue-200/70">
              {[
                "Études d'Impact (EIES)",
                "Plan de Gestion Env. (PGES)",
                "Plan de Réinstallation (PAR)",
                "Audit Environnemental",
                "Forage d'eau potable",
                "Études géotechniques",
              ].map(l => (
                <li key={l}><Link href="#" className="hover:text-white transition-colors flex items-center gap-1.5"><Icon icon="mdi:chevron-right" className="text-[#0a6dd4] text-xs" />{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services 2 */}
          <div>
            <h4 className="text-blue-300 font-bold uppercase tracking-widest text-xs mb-5">Navigation & SIG</h4>
            <ul className="space-y-3 text-sm text-blue-200/70">
              {[
                "Cartes aéronautiques IAC/VAC",
                "Collecte eTOD & WGS 84",
                "Procédures de vol PANS-OPS",
                "Cartographie drone",
                "SIG & Télédétection",
                "Développement applications",
              ].map(l => (
                <li key={l}><Link href="#" className="hover:text-white transition-colors flex items-center gap-1.5"><Icon icon="mdi:chevron-right" className="text-[#0a6dd4] text-xs" />{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-blue-300 font-bold uppercase tracking-widest text-xs mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-blue-200/70">
              <li className="flex gap-3">
                <Icon icon="mdi:map-marker" className="text-[#0a6dd4] text-xl flex-shrink-0 mt-0.5" />
                <span>N°60 Avenue KIBATI, Quartier BOYOMA, Commune de Kinshasa, RDC</span>
              </li>
              <li className="flex gap-3">
                <Icon icon="mdi:phone" className="text-[#0a6dd4] text-xl flex-shrink-0" />
                <a href="tel:+243822951339" className="hover:text-white transition-colors">+243 82 29 51 339</a>
              </li>
              <li className="flex gap-3">
                <Icon icon="mdi:email-outline" className="text-[#0a6dd4] text-xl flex-shrink-0" />
                <a href="mailto:contact@biotopecn.org" className="hover:text-white transition-colors">contact@biotopecn.org</a>
              </li>
              <li className="flex gap-3">
                <Icon icon="mdi:clock-outline" className="text-[#0a6dd4] text-xl flex-shrink-0" />
                <span>Lun – Ven : 07h30 – 17h00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300/60">
          <p>© {currentYear} BIOTOPE SARLU. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-white transition-colors">Confidentialité</Link>
            <Link href="#" className="hover:text-white transition-colors">CGU</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
