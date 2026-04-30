import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import screenshot1 from "@/assets/galerie-screenshot-1.png";
import screenshot2 from "@/assets/galerie-screenshot-2.png";
import screenshot3 from "@/assets/galerie-screenshot-3.png";
import galerieVideo from "@/assets/galerie-hero-animated.mp4";

const Galerie = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Galerie d'Images"
        subtitle="Application web complète développée en PHP pour gérer une collection d'images de manière professionnelle."
        backgroundVideo={galerieVideo}
      />

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" size="sm">
              <Link to="/tp">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux Travaux Pratiques
              </Link>
            </Button>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {["PHP", "MySQL", "HTML", "CSS"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-8 mb-8"
          >
            <h2 className="font-display text-2xl font-bold mb-6 gradient-text">
              Présentation du projet
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Galerie d'Images est une application web complète développée en PHP 
                permettant de gérer une collection d'images de manière professionnelle. Ce projet met en œuvre les compétences 
                essentielles du développement web moderne : gestion sécurisée des fichiers, manipulation d'images, requêtes SQL 
                optimisées et conception d'interface utilisateur responsive.
              </p>
              <p>
                L'application permet aux utilisateurs d'uploader des images avec un titre et des tags, de les organiser dans 
                une galerie paginée, de les rechercher efficacement et de consulter leurs détails. Un système automatique 
                génère des miniatures optimisées pour améliorer les performances de chargement.
              </p>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-8 mb-8"
          >
            <h2 className="font-display text-2xl font-bold mb-6">
              Fonctionnalités principales
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Upload et gestion sécurisée d'images
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Affichage en grille avec lightbox
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Filtres par catégories et tags
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Pagination dynamique optimisée
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Génération automatique de miniatures
              </li>
            </ul>
          </motion.div>

          {/* Screenshots Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img 
                src={screenshot1} 
                alt="Galerie - Vue principale" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img 
                src={screenshot2} 
                alt="Galerie - Ajout d'image" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img 
                src={screenshot3} 
                alt="Galerie - Détails image" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card rounded-2xl p-8 mb-8"
          >
            <h2 className="font-display text-2xl font-bold mb-6 gradient-text">
              Conclusion
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Ce projet démontre une maîtrise du développement web avec PHP en combinant gestion sécurisée des fichiers, 
                traitement d'images, optimisation SQL et design moderne.
              </p>
              <p>
                Les compétences acquises sont directement applicables en contexte professionnel : uploads sécurisés, 
                performances optimisées et architecture maintenable.
              </p>
            </div>
          </motion.div>

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg">
              <a href="https://github.com/hannabar/galerie_images.git" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Voir sur GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Galerie;
