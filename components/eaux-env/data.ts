export const navSections = [
  { id: "eies",      label: "EIES",                      short: "Études d'impact" },
  { id: "plans",     label: "Plans réglementaires",       short: "PGES · PAR · PMC" },
  { id: "audit",     label: "Audit E&S",                  short: "Conformité" },
  { id: "peuples",   label: "Peuples autochtones",        short: "PPA" },
  { id: "forage",    label: "Eau & Forage",               short: "⭐ Vedette" },
  { id: "forets",    label: "Forêts & Climat",            short: "Résilience" },
  { id: "dechets",   label: "Déchets & Assainissement",   short: "Gestion durable" },
  { id: "plaidoyer", label: "Plaidoyer",                  short: "Négociation" },
];

export const plans = [
  {
    code: "PGES",
    name: "Plan de Gestion Environnementale et Sociale",
    desc: "Cadre opérationnel qui définit les mesures à mettre en œuvre pour prévenir, atténuer ou compenser les impacts négatifs d'un projet sur l'environnement et les communautés.",
    icon: "mdi:clipboard-check-outline",
  },
  {
    code: "PAR",
    name: "Plan d'Atténuation et de Réhabilitation",
    desc: "Identifie les impacts résiduels inévitables et planifie les actions correctives pour remettre les milieux affectés dans un état acceptable.",
    icon: "mdi:home-move-outline",
  },
  {
    code: "PMC",
    name: "Plan de Mise en Conformité",
    desc: "Évalue les écarts entre la situation existante d'une installation et les exigences légales en vigueur, et définit un calendrier de mise en conformité.",
    icon: "mdi:scale-balance",
  },
  {
    code: "PRI",
    name: "Plan de Réinstallation Involontaire",
    desc: "Cadre de protection des personnes déplacées involontairement par un projet — logement, compensation juste et réintégration sociale.",
    icon: "mdi:account-group-outline",
  },
  {
    code: "PAE",
    name: "Plan d'Ajustement Environnemental",
    desc: "Accompagne les entreprises dans l'intégration progressive des normes environnementales dans leurs processus opérationnels.",
    icon: "mdi:cog-sync-outline",
  },
  {
    code: "ESESS",
    name: "Évaluation Stratégique Environnementale et Sociale Sectorielle",
    desc: "Analyse stratégique en amont des politiques et programmes sectoriels pour orienter les décisions vers la durabilité environnementale.",
    icon: "mdi:layers-search-outline",
  },
];

export const secteurs = [
  { label: "Secteur Minier",    icon: "mdi:pickaxe" },
  { label: "Pétrole & Gaz",    icon: "mdi:gas-station-outline" },
  { label: "Énergie",          icon: "mdi:lightning-bolt-outline" },
  { label: "Télécommunication", icon: "mdi:antenna" },
  { label: "Infrastructures",  icon: "mdi:bridge" },
  { label: "Agro-industrie",   icon: "mdi:sprout-outline" },
];

/** Remplacer les src par vos vraies URLs/chemins locaux */
export const foragePhotos = [
  { src: "/images/forage/forage-nsele-1.jpg",     alt: "Forage d'eau — Commune de la NSELE" },
  { src: "/images/forage/forage-nsele-2.jpg",     alt: "Installation du trépan, NSELE" },
  { src: "/images/forage/forage-infrarose-1.jpg", alt: "Forage sur site INFRAROSE" },
  { src: "/images/forage/forage-infrarose-2.jpg", alt: "Équipe BIOTOPE — site INFRAROSE" },
  { src: "/images/forage/forage-spt-1.jpg",       alt: "Prélèvement SPT — études géotechniques" },
  { src: "/images/forage/forage-equipe.jpg",       alt: "Équipe BIOTOPE — aéroport N'Djili" },
];

/** Remplacer par vos URLs YouTube/Vimeo ou chemins locaux */
export const forageVideos = [
  { src: "", embedUrl: "", label: "Forage d'eau — Commune de la NSELE, Kinshasa" },
  { src: "", embedUrl: "", label: "Forage sur site INFRAROSE — Équipe BIOTOPE" },
];

/** URL du post ou de la vidéo Facebook */
export const facebookPost = {
  url: "https://www.facebook.com/biotopecn",
  label: "Voir nos réalisations sur Facebook",
};
