"use client";
import { Icon } from "@iconify/react";
import { FadeIn, VideoPlayer, MediaGallery, FacebookEmbed } from "./ui";
import { foragePhotos, forageVideos, facebookPost } from "./data";

const services = [
  { icon: "mdi:waves",  title: "Aménagement de sources", desc: "Captage, protection et aménagement de sources d'eau naturelle avec ouvrages de génie civil." },
  { icon: "mdi:pipe",   title: "Adduction d'eau potable", desc: "Conception et installation de systèmes de distribution d'eau depuis la source jusqu'aux ménages." },
  { icon: "mdi:drill",  title: "Forage hydraulique", desc: "Forage profond avec équipements rotary et percussion — analyses hydrochimiques et mise en service." },
  { icon: "mdi:fish",   title: "Pêche & Pisciculture", desc: "Études de faisabilité et aménagement de bassins piscicoles pour la sécurité alimentaire." },
];

const stats = [
  { val: "50m+", label: "Profondeur max" },
  { val: "48h",  label: "Délai analyse" },
  { val: "100%", label: "Certifié OMS" },
];

export default function SectionForage() {
  return (
    <section id="forage">
      <FadeIn>
        <div className="relative bg-[#0a2a1a] rounded-3xl overflow-hidden">
          {/* Texture de fond */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 p-6 md:p-10 space-y-10">

            {/* ── BADGE + INTRO ── */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full">
                <Icon icon="mdi:star-circle" className="text-yellow-400 text-base" />
                Expertise Phare BIOTOPE
              </div>
              <div className="grid grid-cols-3 gap-3 md:ml-auto">
                {stats.map((s) => (
                  <div key={s.label} className="text-center p-3 bg-white/5 border border-white/10 rounded-xl">
                    <div className="text-emerald-400 font-black text-xl">{s.val}</div>
                    <div className="text-white/50 text-[10px] mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── TITRE + DESCRIPTION ── */}
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                Gestion intégrée de l&apos;eau<br />
                <span className="text-emerald-400">&amp; Forages hydrauliques</span>
              </h2>
              <p className="text-emerald-100/70 text-base leading-relaxed">
                L&apos;accès à l&apos;eau potable est un droit fondamental. BIOTOPE déploie des
                équipements de forage de dernière génération pour alimenter communes,
                chantiers industriels et sites agricoles à travers toute la RDC.
              </p>
            </div>

            {/* ── SERVICES (liste) ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="w-9 h-9 bg-emerald-600/30 border border-emerald-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon icon={f.icon} className="text-emerald-400 text-lg" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{f.title}</h4>
                    <p className="text-emerald-100/50 text-xs mt-0.5 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── GALERIE PHOTOS ── */}
            <div>
              <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest mb-3">
                <Icon icon="mdi:image-multiple-outline" className="inline mr-1" />
                Nos chantiers en images
              </p>
              <MediaGallery photos={foragePhotos} />
            </div>

            {/* ── VIDÉOS ── */}
            <div>
              <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest mb-3">
                <Icon icon="mdi:play-circle-outline" className="inline mr-1" />
                Vidéos terrain
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {forageVideos.map((v, i) => (
                  <VideoPlayer key={i} label={v.label} embedUrl={v.embedUrl || undefined} />
                ))}
              </div>
            </div>

            {/* ── FACEBOOK EMBED ── */}
            <div>
              <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest mb-3">
                <Icon icon="mdi:facebook" className="inline mr-1" />
                Suivez-nous sur Facebook
              </p>
              <FacebookEmbed url={facebookPost.url} label={facebookPost.label} />
            </div>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}
