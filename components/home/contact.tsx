"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Form, Input, Select, Button, ConfigProvider, message } from "antd";
import { useForm } from "antd/es/form/Form";

type ContactPayload = {
  fullName: string;
  sector: string;
  email: string;
  phone: string;
  description: string;
};

const contactInfos = [
  { icon: "mdi:map-marker", label: "Adresse", value: "N°60 Avenue KIBATI, Quartier BOYOMA, Commune de Kinshasa, RDC" },
  { icon: "mdi:phone", label: "Téléphone", value: "+243 82 29 51 339" },
  { icon: "mdi:email-outline", label: "Email", value: "contact@biotopecn.org" },
  { icon: "mdi:clock-outline", label: "Horaires", value: "Lundi – Vendredi : 07h30 – 17h00" },
];

const ContactRevolutionary = () => {
  const [form] = useForm();
  const [loading, setLoading] = React.useState(false);

  const toContact = React.useCallback(async (values: ContactPayload) => {
    setLoading(true);
    await fetch("/api/contact/", { method: "POST", body: JSON.stringify(values) })
      .then(() => {
        form.resetFields();
        message.success("Merci ! Votre message a bien été envoyé.");
      })
      .catch(() => {});
    setLoading(false);
  }, [form]);

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-14">
          <span className="inline-block text-[#0a6dd4] font-bold tracking-[0.25em] uppercase text-xs mb-3 border border-[#0a6dd4]/20 bg-blue-50 px-4 py-1.5 rounded-full">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1f44] mt-3">
            Parlons de votre <span className="text-[#0a6dd4]">projet</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm">
            Sélectionnez votre domaine d'intérêt et décrivez-nous votre besoin. Notre équipe vous répondra rapidement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* INFO COLONNE */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfos.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="w-10 h-10 bg-[#0a1f44] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon icon={info.icon} className="text-white text-lg" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">{info.label}</div>
                  <div className="text-gray-800 text-sm font-medium">{info.value}</div>
                </div>
              </motion.div>
            ))}

            <div className="p-5 bg-[#0a6dd4] rounded-xl text-white mt-2">
              <div className="font-bold text-sm mb-2 flex items-center gap-2">
                <Icon icon="mdi:shield-check" />
                BIOTOPE SARLU
              </div>
              <div className="text-blue-100 text-xs leading-relaxed">
                Bureau d'Innovation et d'Ordonnancement Technologique Optimal des Projets Environnementaux<br />
                RCCM : CD/KNG/RCCM/21-B-03426
              </div>
            </div>
          </div>

          {/* FORMULAIRE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 bg-white border border-gray-100 shadow-xl rounded-2xl p-8"
          >
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#0a6dd4",
                  borderRadius: 8,
                  colorBorder: "#e5e7eb",
                }
              }}
            >
              <Form onFinish={toContact} layout="vertical" form={form} className="space-y-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item label="Nom complet" name="fullName" rules={[{ required: true, message: "Champ requis" }]}>
                    <Input placeholder="Jean Mukendi" className="h-11" />
                  </Form.Item>
                  <Form.Item label="Téléphone" name="phone">
                    <Input placeholder="+243 8X XXX XXXX" className="h-11" />
                  </Form.Item>
                </div>

                <Form.Item label="Email" name="email" rules={[{ required: true }, { type: "email", message: "Email invalide" }]}>
                  <Input placeholder="votre@email.com" className="h-11" />
                </Form.Item>

                <Form.Item label="Domaine d'intérêt" name="sector">
                  <Select
                    className="h-11"
                    placeholder="Sélectionnez un domaine"
                    options={[
                      { value: "env", label: "Eaux & Environnement" },
                      { value: "geo", label: "Géotechnique & Construction" },
                      { value: "aero", label: "Navigation Aérienne" },
                      { value: "sig", label: "SIG & Télédétection / Drone" },
                      { value: "ntic", label: "NTIC & Applications" },
                      { value: "mines", label: "Mines & Énergie" },
                    ]}
                  />
                </Form.Item>

                <Form.Item label="Votre besoin" name="description" rules={[{ required: true, message: "Décrivez votre besoin" }]}>
                  <Input.TextArea rows={4} placeholder="Décrivez votre projet ou besoin spécifique..." />
                </Form.Item>

                <Button
                  type="primary"
                  block
                  htmlType="submit"
                  loading={loading}
                  className="h-12 text-sm font-bold bg-[#0a6dd4] hover:bg-[#0a1f44]"
                  style={{ backgroundColor: '#0a6dd4' }}
                >
                  Envoyer ma demande
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
