"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Form, Input, Select, Button, ConfigProvider, theme } from 'antd';

const ContactRevolutionary = () => {
  const [sector, setSector] = useState('aero');

  // Couleurs dynamiques selon le secteur
  const colors = {
    aero: 'text-blue-400 border-blue-500/30 bg-blue-500/5',
    mines: 'text-orange-400 border-orange-500/30 bg-orange-500/5',
    ntic: 'text-purple-400 border-purple-500/30 bg-purple-500/5',
  };

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Effet de grille radar en fond */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXTE D'ACCUEIL CONTACT */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl font-black text-white mb-6 leading-tight">
                PRÊT À <span className="text-blue-500">DÉCOLLER ?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                {`Sélectionnez votre pôle d'intérêt pour être mis en relation avec l'expert Biotope dédié à votre secteur.`}
              </p>

              {/* INFO CONTACT RAPIDE */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Icon icon="mdi:map-marker-radius" className="text-2xl text-blue-500" />
                  </div>
                  <span>Kinshasa, Gombe, République Démocratique du Congo</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Icon icon="mdi:shield-airplane" className="text-2xl text-blue-500" />
                  </div>
                  <span>Expertise certifiée OACI / PANS-OPS</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FORMULAIRE "COCKPIT" */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative"
          >
            {/* Décoration d'angle technologique */}
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Icon icon="mdi:vector-selection" className="text-4xl text-blue-500" />
            </div>

            <ConfigProvider
              theme={{
                algorithm: theme.darkAlgorithm,
                token: { colorPrimary: '#3b82f6', borderRadius: 12 },
              }}
            >
              <Form layout="vertical" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item label="NOM COMPLET">
                    <Input placeholder="Ex: Jean Mukendi" className="bg-white/5 h-12" />
                  </Form.Item>
                  <Form.Item label="SÉLECTEUR DE SECTEUR">
                    <Select 
                      defaultValue="aero" 
                      onChange={setSector}
                      className="h-12"
                      options={[
                        { value: 'aero', label: 'Navigation Aérienne' },
                        { value: 'mines', label: 'Géo-Ingénierie & Mines' },
                        { value: 'ntic', label: 'Solutions Digitales (NTIC)' },
                      ]}
                    />
                  </Form.Item>
                </div>

                <Form.Item label="EMAIL PROFESSIONNEL">
                  <Input placeholder="votre@entreprise.com" className="bg-white/5 h-12" />
                </Form.Item>

                <Form.Item label="VOTRE BESOIN SPÉCIFIQUE">
                  <Input.TextArea 
                    rows={4} 
                    placeholder="Décrivez votre projet (ex: Campagne WGS 84, Étude G2, Développement SIG...)" 
                    className="bg-white/5"
                  />
                </Form.Item>

                <Button 
                  type="primary" 
                  block 
                  className="h-14 text-lg font-black uppercase tracking-widest shadow-lg shadow-blue-500/20"
                >
                  Envoyer la requête
                </Button>
              </Form>
            </ConfigProvider>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactRevolutionary;