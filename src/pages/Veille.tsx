import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Scan, Fingerprint, Shield, AlertTriangle, Scale, Globe, Mail, Bell, Users, Heart, Repeat2, MessageCircle, Share, ExternalLink } from "lucide-react";
import dnaVideo from "@/assets/dna-animation.mp4";
import fingerprintVideo from "@/assets/fingerprint-scan.mp4";
import veilleBgVideo from "@/assets/veille-bg-animated.mp4";

const veilleSujets = [
  {
    title: "Imagerie médicale et Intelligence Artificielle",
    icon: Brain,
    description: "L'intelligence artificielle révolutionne le diagnostic médical grâce à l'analyse automatisée d'images, offrant aux médecins une aide précieuse pour détecter des pathologies plus rapidement et avec plus de précision.",
    sections: [
      {
        title: "Technologies actuelles",
        icon: Scan,
        items: [
          "Deep Learning et réseaux de neurones convolutifs (CNN)",
          "Détection automatique de pathologies",
          "Segmentation d'images médicales",
          "Radiologie assistée par IA",
        ],
      },
      {
        title: "Applications concrètes",
        icon: Brain,
        items: [
          "Détection précoce du cancer du sein",
          "Analyse d'IRM et scanners cérébraux",
          "Détection de la rétinopathie diabétique",
          "Analyse de radiographies pulmonaires",
        ],
      },
      {
        title: "Enjeux éthiques",
        icon: Scale,
        items: [
          "Fiabilité et limites des diagnostics automatisés",
          "Responsabilité médicale en cas d'erreur",
          "Protection des données de santé (RGPD)",
          "Certification des dispositifs médicaux (marquage CE)",
        ],
      },
    ],
    perspectives: [
      "Personnalisation des traitements",
      "Médecine prédictive",
      "Télémédecine augmentée",
    ],
  },
  {
    title: "Données biométriques",
    icon: Fingerprint,
    description: "L'utilisation croissante des données biométriques dans l'authentification et la sécurité soulève des enjeux majeurs en 2025.",
    sections: [
      {
        title: "Technologies",
        icon: Fingerprint,
        items: [
          "Reconnaissance faciale (Face ID, surveillance)",
          "Empreintes digitales (smartphones, paiement)",
          "Reconnaissance vocale (assistants, banque)",
          "Analyse de l'iris et rétine",
        ],
      },
      {
        title: "Risques et problématiques",
        icon: AlertTriangle,
        items: [
          "Piratage et usurpation d'identité",
          "Surveillance de masse et traçage",
          "Deepfakes et failles de sécurité",
          "Discrimination algorithmique (biais)",
          "Irrévocabilité : une donnée biométrique volée ne peut pas être changée contrairement à un mot de passe",
        ],
      },
      {
        title: "Cadre réglementaire",
        icon: Shield,
        items: [
          "RGPD Article 9 : données biométriques classées données sensibles",
          "Loi sur l'IA (EU AI Act) : interdiction de la reconnaissance faciale en temps réel depuis février 2025",
          "Recommandations CNIL : interdiction du badgeage biométrique au travail",
          "Nouveau système EES aux frontières européennes depuis octobre 2025 imposant la collecte d'empreintes et photo du visage pour tous les voyageurs non-européens",
        ],
      },
    ],
    perspectives: [
      "Biométrie comportementale",
      "Authentification multimodale",
      "Standards de sécurité renforcés",
    ],
  },
];

const Veille = () => {
  const [feedFilter, setFeedFilter] = useState<"all" | "ia" | "bio">("all");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Veille Technologique"
        subtitle="Une démarche active de veille pour rester informée des innovations et enjeux du secteur informatique."
        backgroundVideo={veilleBgVideo}
      />

      {/* Comment j'effectue ma veille */}
      <section className="pt-12 pb-6 px-6">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-lg font-bold mb-4">Comment j'effectue ma veille</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: Globe, title: "Sites spécialisés", desc: "Futura Sciences, CNIL, 01net..." },
                { icon: Mail, title: "Newsletters", desc: "Usine Digitale, Numerama Règle 30..." },
                { icon: Bell, title: "Alertes Google", desc: "Configurées sur mes thèmes" },
                { icon: Users, title: "Réseaux sociaux", desc: "LinkedIn, Twitter/X" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-xs">{item.title}</div>
                    <div className="text-[11px] text-muted-foreground truncate">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feed de veille */}
      <section className="py-12 px-6">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <h2 className="font-display text-xl font-bold flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-primary" />
                Mon feed de veille
              </h2>
              <div className="flex gap-2">
                {[
                  { key: "all" as const, label: "Tous" },
                  { key: "ia" as const, label: "IA Médicale" },
                  { key: "bio" as const, label: "Biométrie" },
                ].map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setFeedFilter(f.key)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      feedFilter === f.key
                        ? f.key === "ia"
                          ? "bg-pink-400 text-white"
                          : f.key === "bio"
                          ? "bg-rose-600 text-white"
                          : "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <AnimatePresence mode="popLayout">
                {[
                  {
                    handle: "@FuturaSciences",
                    avatar: "FS",
                    text: "L'IA décode les tumeurs mieux que l'œil humain dans la lutte contre le cancer",
                    date: "17 oct. 2024",
                    category: "IA Médicale",
                    catColor: "blue",
                    likes: 248,
                    retweets: 87,
                    comments: 34,
                    link: "https://www.futura-sciences.com/sante/actualites/cancer-sein-intelligence-artificielle-decode-tumeurs-mieux-oeil-humain-lutte-cancer-116457/",
                  },
                  {
                    handle: "@CNIL",
                    avatar: "CN",
                    text: "Biométrie sur les lieux de travail : publication d'un règlement type",
                    date: "2024",
                    category: "Biométrie",
                    catColor: "violet",
                    likes: 312,
                    retweets: 145,
                    comments: 56,
                    link: "https://www.cnil.fr/fr/biometrie-sur-les-lieux-de-travail-publication-dun-reglement-type",
                  },
                  {
                    handle: "@TouteLEurope",
                    avatar: "TE",
                    text: "EU AI Act : interdiction de la reconnaissance faciale en temps réel depuis le 2 février 2025",
                    date: "4 août 2025",
                    category: "Biométrie",
                    catColor: "violet",
                    likes: 521,
                    retweets: 203,
                    comments: 89,
                    link: "https://www.touteleurope.eu/economie-et-social/intelligence-artificielle-que-fait-l-union-europeenne/",
                  },
                  {
                    handle: "@FuturaSciences",
                    avatar: "FS",
                    text: "Le CEA obtient les images IRM du cerveau les plus précises au monde pour mieux comprendre Alzheimer",
                    date: "2 avril 2024",
                    category: "IA Médicale",
                    catColor: "blue",
                    likes: 193,
                    retweets: 72,
                    comments: 28,
                    link: "https://www.futura-sciences.com/sante/actualites/medecine-cea-obtient-images-irm-cerveau-plus-precises-monde-mieux-comprendre-alzheimer-94013/",
                  },
                  {
                    handle: "@Numerama",
                    avatar: "Nu",
                    text: "EU AI Act : interdiction des systèmes d'IA à risque inacceptable depuis février 2025",
                    date: "3 fév. 2025",
                    category: "Biométrie",
                    catColor: "violet",
                    likes: 445,
                    retweets: 178,
                    comments: 65,
                    link: "https://intelligence-artificielle.developpez.com/actu/368699/",
                  },
                  {
                    handle: "@01net",
                    avatar: "01",
                    text: "L'IA vs le radiologue dans l'interprétation de la radiographie pulmonaire",
                    date: "18 déc. 2024",
                    category: "IA Médicale",
                    catColor: "blue",
                    likes: 176,
                    retweets: 64,
                    comments: 22,
                    link: "https://www.thema-radiologie.fr/actualites/3953/lia-vs-le-radiologue-dans-linterpretation-de-la-radiographie-pulmonaire.html",
                  },
                  {
                    handle: "@UsineDigitale",
                    avatar: "UD",
                    text: "Deepfakes et failles biométriques : les nouveaux risques en 2025",
                    date: "10 jan. 2025",
                    category: "Biométrie",
                    catColor: "violet",
                    likes: 389,
                    retweets: 112,
                    comments: 47,
                    link: "https://www.usine-digitale.fr/article/la-prevention-des-deepfakes-doit-etre-une-priorite-absolue-pour-les-forces-de-l-ordre-d-apres-europol.N1999797",
                  },
                  {
                    handle: "@SciencesAvenir",
                    avatar: "SA",
                    text: "L'IA ouvre un large champ des possibles en imagerie pulmonaire",
                    date: "22 jan. 2025",
                    category: "IA Médicale",
                    catColor: "blue",
                    likes: 204,
                    retweets: 78,
                    comments: 31,
                    link: "https://www.thema-radiologie.fr/actualites/3481/les-progres-scientifiques-et-technologiques-ouvrent-le-champ-des-possibles-en-imagerie-pulmonaire.html",
                  },
                  {
                    handle: "@CNIL",
                    avatar: "CN",
                    text: "Biométrie dans les smartphones : quels principes respecter ?",
                    date: "2024",
                    category: "Biométrie",
                    catColor: "violet",
                    likes: 267,
                    retweets: 98,
                    comments: 41,
                    link: "https://www.cnil.fr/fr/biometrie-dans-les-smartphones-des-particuliers-application-du-cadre-de-protection-des-donnees",
                  },
                  {
                    handle: "@FuturaSciences",
                    avatar: "FS",
                    text: "Un modèle d'IA peut prédire le cancer du sein à cinq ans",
                    date: "2024",
                    category: "IA Médicale",
                    catColor: "blue",
                    likes: 318,
                    retweets: 134,
                    comments: 52,
                    link: "https://www.thema-radiologie.fr/actualites/3839/un-modele-d-ia-peut-predire-le-cancer-du-sein-a-cinq-ans.html",
                  },
                ]
                  .filter((post) =>
                    feedFilter === "all"
                      ? true
                      : feedFilter === "ia"
                      ? post.catColor === "blue"
                      : post.catColor === "violet"
                  )
                  .map((post, i) => (
                    <motion.a
                      key={post.text}
                      href={post.link || "#"}
                      target={post.link ? "_blank" : undefined}
                      rel={post.link ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: i * 0.05 }}
                      layout
                      className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-colors block group"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-bold text-sm text-white ${
                            post.catColor === "blue"
                              ? "bg-gradient-to-br from-pink-400 to-rose-500"
                              : "bg-gradient-to-br from-rose-500 to-pink-700"
                          }`}
                        >
                          {post.avatar}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-sm">{post.handle}</span>
                            <span className="text-xs text-muted-foreground">· {post.date}</span>
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                post.catColor === "blue"
                                  ? "bg-pink-400/15 text-pink-400"
                                  : "bg-rose-600/15 text-rose-400"
                              }`}
                            >
                              {post.category}
                            </span>
                            {post.link && (
                              <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                          </div>

                          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{post.text}</p>

                          <div className="flex items-center gap-6 mt-3 text-muted-foreground">
                            <span className="flex items-center gap-1.5 text-xs">
                              <MessageCircle className="w-3.5 h-3.5" />
                              {post.comments}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs">
                              <Repeat2 className="w-3.5 h-3.5" />
                              {post.retweets}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs">
                              <Heart className="w-3.5 h-3.5" />
                              {post.likes}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs">
                              <Share className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subjects */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="space-y-12">
            {veilleSujets.map((sujet, index) => (
              <motion.div
                key={sujet.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden relative"
              >
                {/* Video background for Imagerie médicale */}
                {index === 0 && (
                  <>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={dnaVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
                  </>
                )}
                {/* Image background for Données biométriques */}
                {index === 1 && (
                  <>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={fingerprintVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
                  </>
                )}
                {/* Header */}
                <div className="relative z-10 p-8 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <sujet.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold mb-2">{sujet.title}</h2>
                      <p className="text-muted-foreground">{sujet.description}</p>
                    </div>
                  </div>
                </div>

                {/* Sections */}
                <div className="relative z-10 grid md:grid-cols-3 gap-6 p-8">
                  {sujet.sections.map((section, i) => (
                    <div key={i}>
                      <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                        <section.icon className="w-4 h-4 text-primary" />
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Perspectives */}
                <div className="relative z-10 px-8 pb-8">
                  <h3 className="font-display font-semibold mb-4">Perspectives d'avenir</h3>
                  <div className="flex flex-wrap gap-2">
                    {sujet.perspectives.map((persp, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                      >
                        {persp}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Veille;
