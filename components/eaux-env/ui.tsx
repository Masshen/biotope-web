"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";

/* ── SectionTag ─────────────────────────────── */
export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full mb-4">
      {children}
    </span>
  );
}

/* ── FadeIn ─────────────────────────────────── */
export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── VideoPlayer ────────────────────────────── */
/**
 * Si `embedUrl` est fourni (YouTube/Vimeo), on affiche un iframe.
 * Sinon on affiche un placeholder cliquable avec bouton play.
 */
export function VideoPlayer({
  label,
  embedUrl,
}: {
  label: string;
  embedUrl?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (embedUrl && playing) {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
        <iframe
          src={`${embedUrl}?autoplay=1`}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
          title={label}
        />
      </div>
    );
  }

  return (
    <div
      onClick={() => embedUrl && setPlaying(true)}
      className={`relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0a1f44] flex flex-col items-center justify-center border border-white/10 ${embedUrl ? "cursor-pointer" : "cursor-default"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-[#0a1f44]" />
      <motion.div
        whileHover={embedUrl ? { scale: 1.1 } : {}}
        className="relative z-10 w-16 h-16 bg-white/20 border-2 border-white/40 rounded-full flex items-center justify-center mb-3"
      >
        <Icon icon="mdi:play" className="text-white text-3xl ml-1" />
      </motion.div>
      <p className="relative z-10 text-white/80 text-sm font-semibold text-center px-4">{label}</p>
      <p className="relative z-10 text-white/40 text-xs mt-1">
        {embedUrl ? "Cliquer pour lancer" : "Vidéo à intégrer"}
      </p>
    </div>
  );
}

/* ── MediaGallery ───────────────────────────── */
/**
 * Grille de photos avec lightbox simple.
 * `photos` : tableau de { src, alt }
 */
export function MediaGallery({
  photos,
}: {
  photos: { src: string; alt: string }[];
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () =>
    setLightbox((i) => (i !== null ? (i - 1 + photos.length) % photos.length : 0));
  const next = () =>
    setLightbox((i) => (i !== null ? (i + 1) % photos.length : 0));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {photos.map((photo, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.02 }}
            onClick={() => setLightbox(i)}
            className="relative aspect-square rounded-xl overflow-hidden bg-white/10 border border-white/10 group"
          >
            {/* Fallback si l'image n'existe pas encore */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 to-[#0a1f44] flex flex-col items-center justify-center">
              <Icon icon="mdi:image-outline" className="text-white/30 text-3xl" />
              <span className="text-white/30 text-[10px] mt-1 px-2 text-center leading-tight">{photo.alt}</span>
            </div>
            <img
              src={photo.src}
              alt={photo.alt}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </motion.button>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
          >
            <Icon icon="mdi:chevron-left" className="text-2xl" />
          </button>

          <div onClick={(e) => e.stopPropagation()} className="max-w-3xl w-full">
            <div className="relative aspect-video bg-[#0a1f44] rounded-2xl overflow-hidden flex items-center justify-center">
              <Icon icon="mdi:image-outline" className="text-white/20 text-6xl absolute" />
              <img
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                className="relative z-10 max-h-full max-w-full object-contain"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
            </div>
            <p className="text-white/60 text-sm text-center mt-3">{photos[lightbox].alt}</p>
            <p className="text-white/30 text-xs text-center mt-1">
              {lightbox + 1} / {photos.length}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
          >
            <Icon icon="mdi:chevron-right" className="text-2xl" />
          </button>

          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
          >
            <Icon icon="mdi:close" className="text-lg" />
          </button>
        </div>
      )}
    </>
  );
}

/* ── FacebookEmbed ──────────────────────────── */
/**
 * Intègre un post ou une vidéo Facebook via l'API embed officielle.
 * `url` : URL complète du post/vidéo Facebook.
 */
export function FacebookEmbed({ url, label }: { url: string; label: string }) {
  const encodedUrl = encodeURIComponent(url);
  const iframeSrc = `https://www.facebook.com/plugins/post.php?href=${encodedUrl}&show_text=true&width=500`;

  return (
    <div className="rounded-2xl overflow-hidden border border-emerald-500/30 bg-white/5">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#1877f2]/20 border-b border-emerald-500/20">
        <Icon icon="mdi:facebook" className="text-[#1877f2] text-2xl" />
        <div>
          <p className="text-white font-semibold text-sm">BIOTOPE sur Facebook</p>
          <p className="text-white/50 text-xs">{label}</p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-[#1877f2] hover:text-blue-300 transition-colors"
        >
          <Icon icon="mdi:open-in-new" className="text-lg" />
        </a>
      </div>

      {/* Iframe Facebook */}
      <div className="relative w-full" style={{ minHeight: 300 }}>
        <iframe
          src={iframeSrc}
          className="w-full border-0"
          style={{ minHeight: 300 }}
          scrolling="no"
          allow="encrypted-media"
          title="Publication Facebook BIOTOPE"
          loading="lazy"
        />
      </div>

      {/* Fallback lien direct */}
      <div className="px-4 py-3 border-t border-emerald-500/20 text-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#1877f2] hover:text-blue-300 text-sm font-semibold transition-colors"
        >
          <Icon icon="mdi:facebook" />
          Voir sur Facebook
          <Icon icon="mdi:arrow-right" className="text-xs" />
        </a>
      </div>
    </div>
  );
}
