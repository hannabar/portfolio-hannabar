import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import cataloguePaniersVideo from "@/assets/catalogue-paniers-animated.mp4";
import catalogueScreenshot1 from "@/assets/catalogue-screenshot-1.png";
import catalogueScreenshot2 from "@/assets/catalogue-screenshot-2.png";
import catalogueScreenshot3 from "@/assets/catalogue-screenshot-3.png";

const CataloguePaniers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Catalogue des paniers"
        subtitle="Site e-commerce de vente de paniers avec gestion CRUD complète."
        backgroundVideo={cataloguePaniersVideo}
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
                <strong className="text-foreground">Catalogue des paniers</strong> est un site e-commerce complet
                permettant de gérer un catalogue de produits (paniers artisanaux) avec toutes les fonctionnalités
                CRUD nécessaires.
              </p>
              <p>
                Le projet inclut un système de panier d'achat, la gestion des quantités et une interface
                d'administration pour gérer les produits.
              </p>
            </div>
          </motion.div>

          {/* Screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="glass-card rounded-2xl p-8 mb-8"
          >
            <h2 className="font-display text-2xl font-bold mb-6">
              Captures d'écran
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <img src={catalogueScreenshot1} alt="Catalogue - Boutique en ligne" className="rounded-lg w-full aspect-video object-cover" />
              <img src={catalogueScreenshot2} alt="Catalogue - Mon Panier" className="rounded-lg w-full aspect-video object-cover" />
              <img src={catalogueScreenshot3} alt="Catalogue - Confirmation de commande" className="rounded-lg w-full aspect-video object-cover" />
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
                Affichage du catalogue produits avec pagination
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Panier d'achat fonctionnel avec persistance
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Gestion dynamique des quantités
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Interface d'administration CRUD
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
                Ce projet e-commerce m'a permis de maîtriser les opérations CRUD, la gestion des sessions
                PHP et l'architecture MVC.
              </p>
            </div>
          </motion.div>

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button asChild size="lg">
              <a href="#" target="_blank" rel="noopener noreferrer">
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

export default CataloguePaniers;
