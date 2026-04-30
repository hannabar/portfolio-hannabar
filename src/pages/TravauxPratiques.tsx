import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import galerieVideo from "@/assets/galerie-hero-animated.mp4";
import sweetMemoryVideo from "@/assets/sweet-memory-animated.mp4";
import slotMachineVideo from "@/assets/slot-machine-animated.mp4";
import cyberVideo from "@/assets/cyber-animated.mp4";
import cataloguePaniersVideo from "@/assets/catalogue-paniers-animated.mp4";
import miniBlogVideo from "@/assets/mini-blog-animated.mp4";
import ppeAndroidJavaVideo from "@/assets/ppe-android-java-animated.mp4";
import ppeMainVideo from "@/assets/ppe-main-animated.mp4";
import tpBgVideo from "@/assets/tp-bg-animated.mp4";
import todoListVideo from "@/assets/todolist-cpp-animated.mp4";
import euroformaVideo from "@/assets/euroforma-shop-animated.mp4";

const projects = [
  {
    title: "Sweet Memory",
    description: "Jeu de memory interactif développé en JavaScript autour de petites sucreries.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Affichage dynamique des cartes de sucreries",
      "Mécanique de jeu de memory",
      "Compteur de mouvements et chronomètre",
      "Bouton pour recommencer la partie",
    ],
    category: "Jeux",
    slug: "sweet-memory",
    video: sweetMemoryVideo,
    demoLink: "https://hannabar.github.io/memory-main/",
  },
  {
    title: "Machine à sous",
    description: "Simulation d'une machine à sous avec génération aléatoire et animations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Génération aléatoire de symboles",
      "Calcul automatique des gains",
      "Animation fluide des rouleaux",
      "Utilisation de Math.random()",
    ],
    category: "Jeux",
    slug: "machine-a-sous",
    video: slotMachineVideo,
    demoLink: "https://hannabar.github.io/machine-a-sous-main2/",
  },
  {
    title: "Catalogue des paniers",
    description: "Site e-commerce de vente de paniers avec gestion CRUD complète.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    features: [
      "Affichage catalogue produits",
      "Panier d'achat fonctionnel",
      "Gestion des quantités",
      "Administration des produits",
    ],
    category: "E-commerce",
    slug: "catalogue-paniers",
    video: cataloguePaniersVideo,
    githubLink: "https://github.com/hannabar/Tp_panier.git",
  },
  {
    title: "Mini Blog",
    description: "Blog complet avec système de publication d'articles.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    features: [
      "CRUD d'articles complet"
    ],
    category: "Web App",
    slug: "mini-blog",
    video: miniBlogVideo,
    githubLink: "https://github.com/hannabar/MINIBLOG.git",
  },
  {
    title: "Galerie",
    description: "Galerie photos interactive avec upload de fichiers et manipulation d'images.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    features: [
      "Upload et gestion d'images",
      "Affichage grille et lightbox",
      "Filtres et catégories",
      "Pagination dynamique",
    ],
    category: "Web App",
    slug: "galerie",
    video: galerieVideo,
    githubLink: "https://github.com/hannabar/galerie_images.git",
  },
  {
    title: "Cyber",
    description: "Cybersécurité Web — Exploitation & Correction de vulnérabilités OWASP.",
    technologies: ["PHP", "MySQL", "Sécurité"],
    features: [
      "Exploitation d'injection SQL",
      "Faille XSS stockée",
      "Correctifs PDO et htmlspecialchars",
      "Rapport technique documenté",
    ],
    category: "Sécurité",
    slug: "cyber",
    video: cyberVideo,
    githubLink: "https://github.com/hannabar/Cybersecurity_TP2-main.git",
  },
  {
    title: "To Do List",
    description: "Application de gestion de tâches développée en C++.",
    technologies: ["C++"],
    features: [
      "Ajout, affichage, modification et suppression de tâches",
      "Statut en temps réel (En cours / Terminée)",
      "Menu interactif en boucle avec option quitter",
    ],
    category: "Desktop",
    slug: "todolist-cpp",
    githubLink: "https://github.com/hannabar/TodoList_Cpp.git",
  },
  {
    title: "Euroforma Shop",
    description: "Simulation de caisse de magasin développée en Python.",
    technologies: ["Python"],
    features: [
      "Saisie dynamique des articles et de leurs prix",
      "Total mis à jour en temps réel",
      "Calcul automatique du rendu de monnaie",
    ],
    category: "E-commerce",
    slug: "euroforma-shop",
    githubLink: "https://github.com/hannabar/Euroforma_Shop.git",
  },
  {
    title: "PPE Main",
    description: "Application web de gestion des frais des visiteurs médicaux avec une architecture MVC complète.",
    technologies: ["PHP", "MySQL", "XAMPP", "Visual Studio Code"],
    features: [
      "Authentification sécurisée",
      "Gestion des fiches de frais",
      "Architecture MVC",
      "Interface responsive",
    ],
    category: "PPE",
    slug: "ppe-main",
    video: ppeMainVideo,
    githubLink: "https://github.com/hannabar/PPE_PHP.git",
  },
  {
    title: "PPE Medicine App",
    description: "Application mobile Android pour la recherche de médicaments commercialisés en France.",
    technologies: ["Java", "Android", "SQLite", "XML"],
    features: [
      "Authentification double vérification",
      "Recherche multicritères",
      "Base de données gouvernementale",
      "Interface Material Design",
    ],
    category: "PPE",
    slug: "ppe-android-java",
    video: ppeAndroidJavaVideo,
    githubLink: "https://github.com/hannabar/GSB_MedicineApp.git",
  },
];

const categories = ["Tous", "Jeux", "E-commerce", "Web App", "Sécurité", "PPE", "Desktop"];

const TravauxPratiques = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects = activeFilter === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Travaux Pratiques"
        subtitle="Projets pratiques réalisés durant ma formation, couvrant le développement web, la gestion de bases de données et la sécurité informatique."
        backgroundVideo={tpBgVideo}
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeFilter === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                video={
                  project.slug === "todolist-cpp" ? todoListVideo :
                  project.slug === "euroforma-shop" ? euroformaVideo :
                  project.video
                }
                detailLink={`/tp/${project.slug}`}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TravauxPratiques;
