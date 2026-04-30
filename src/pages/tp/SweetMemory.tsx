import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import sweetMemoryVideo from "@/assets/sweet-memory-animated.mp4";

const SweetMemory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Sweet Memory"
        subtitle="Jeu de memory interactif développé en JavaScript autour de petites sucreries."
        backgroundVideo={sweetMemoryVideo}
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
            {["JavaScript", "HTML", "CSS"].map((tech) => (
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
                Sweet Memory est une application web interactive développée en JavaScript 
                permettant aux utilisateurs de jouer à un jeu de memory ludique basé sur des illustrations de petites sucreries.
                Ce projet met en œuvre les fondamentaux du développement front-end moderne : gestion des événements, logique de jeu, 
                calcul du temps et animations CSS.
              </p>
              <p>
                Le joueur doit retourner des cartes afin de retrouver les paires correspondantes. L'application gère automatiquement 
                les comparaisons, le comptage des mouvements, le calcul du temps de jeu et la réinitialisation complète de la partie, 
                offrant une expérience fluide et intuitive.
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
                Affichage dynamique des cartes de sucreries
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Mécanique de jeu de memory (retournement et comparaison)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Gestion des paires trouvées
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Compteur de mouvements
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Chronomètre de jeu
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Bouton pour recommencer la partie
              </li>
            </ul>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card rounded-2xl p-8 mb-8"
          >
            <h2 className="font-display text-2xl font-bold mb-6 gradient-text">
              Conclusion
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Ce projet démontre une maîtrise des bases du JavaScript appliquées à un jeu interactif : 
                logique conditionnelle, gestion du temps et comptage des actions.
              </p>
              <p>
                Les compétences acquises sont directement exploitables en contexte professionnel pour la création 
                d'interfaces interactives, de jeux web simples et d'expériences utilisateur dynamiques.
              </p>
            </div>
          </motion.div>

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg">
              <a href="https://github.com/hannabar/tp-memory.git" target="_blank" rel="noopener noreferrer">
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

export default SweetMemory;
