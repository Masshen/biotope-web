"use client";
import React from 'react';
import { Icon } from '@iconify/react';
import { Input, Button, Divider } from 'antd';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050b1a] text-white pt-20 pb-10 overflow-hidden">
      {/* Effet de lumière diffuse en arrière-plan */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION ACTION : Newsletter Révolutionnaire */}
        <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/20 backdrop-blur-xl border border-white/10 p-8 rounded-3xl mb-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold mb-2 italic">{`Restez à la pointe de l'innovation`}</h3>
            <p className="text-blue-200/70 text-sm">Recevez nos analyses trimestrielles sur la navigation aérienne et la géo-ingénierie en RDC.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <Input 
              placeholder="Votre email professionnel" 
              className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 h-12 rounded-xl"
            />
            <Button type="primary" className="h-12 bg-blue-600 hover:bg-blue-500 border-none rounded-xl px-8 font-bold">
              {`S'abonner`}
            </Button>
          </div>
        </div>

        {/* GRILLE DE LIENS PRINCIPALE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Colonne 1: Identité */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 p-0 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Icon icon="mdi:ShieldCheckered" className="text-2xl hidden" />
                <img src="/images/logo-png.png" alt="logo" className='w-100 rounded-lg' />
              </div>
              <span className="text-xl font-black tracking-tighter">BIOTOPE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Unique fournisseur de services de navigation aérienne en RDC. Expertise certifiée en géotechnique, SIG et transformation numérique.
            </p>
            <div className="flex gap-4">
              {['mdi:linkedin', 'mdi:twitter', 'mdi:facebook', 'mdi:youtube'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all border border-white/10">
                  <Icon icon={social} className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2: Navigation & Ciel */}
          <div>
            <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-6">Navigation Aérienne</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                <Icon icon="mdi:map-marker-path" /> Cartographie OACI (A, B, IAC)
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                <Icon icon="mdi:satellite-variant" /> Campagnes WGS 84
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                <Icon icon="mdi:airplane-takeoff" /> Procédures de vol (PANS-OPS)
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                <Icon icon="mdi:database-sync" /> Données eTOD
              </li>
            </ul>
          </div>

          {/* Colonne 3: Ingénierie & Terre */}
          <div>
            <h4 className="text-orange-400 font-bold uppercase tracking-widest text-xs mb-6">Géo-Ingénierie</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                <Icon icon="mdi:pickaxe" /> Études Minières & Géologie
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                <Icon icon="mdi:hard-hat" /> Géotechnique (Missions G1-G4)
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                <Icon icon="mdi:leaf" /> {`Études d'Impact (EIE / PGES)`}
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                <Icon icon="mdi:drone" /> Photogrammétrie Lidar
              </li>
            </ul>
          </div>

          {/* Colonne 4: Contact & Siège */}
          <div>
            <h4 className="text-green-400 font-bold uppercase tracking-widest text-xs mb-6">Siège Social</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <Icon icon="mdi:map-marker" className="text-xl text-blue-500 shrink-0" />
                <span>Kinshasa, République Démocratique du Congo</span>
              </li>
              <li className="flex gap-3">
                <Icon icon="mdi:phone" className="text-xl text-blue-500 shrink-0" />
                <span>+243 (0) XX XXX XXX</span>
              </li>
              <li className="flex gap-3">
                <Icon icon="mdi:email-outline" className="text-xl text-blue-500 shrink-0" />
                <span>contact@biotopecongo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Divider className="border-white/10" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© {currentYear} BIOTOPE CONSULTING NETWORK. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-400 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Conditions Générales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;