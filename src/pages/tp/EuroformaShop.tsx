import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import euroformaVideo from "@/assets/euroforma-shop-animated.mp4";

const EuroformaShop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="EuroformaShop"
        subtitle="Simulation de caisse de magasin développée en Python."
        backgroundVideo={euroformaVideo}
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
            {["Python", "Flask", "SQLite"].map((tech) => (
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
                EuroformaShop est une simulation de caisse de magasin développée en Python. Le programme guide l'utilisateur étape par étape : saisie du nombre d'articles, entrée des prix un par un avec affichage du total progressif, puis gestion du paiement en espèces avec calcul automatique de la monnaie à rendre.
              </p>
              <p>
                Ce projet m'a permis de travailler sur les boucles, la gestion des entrées utilisateur et la logique de calcul financier en temps réel.
              </p>
            </div>
          </motion.div>

          {/* Fonctionnalités */}
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
                Saisie dynamique du nombre d'articles et de leurs prix
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Affichage du total mis à jour après chaque article
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Calcul du montant total à payer
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Gestion du paiement en plusieurs fois avec rendu de monnaie
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Messages d'accueil et de fin personnalisés
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
                Ce projet concret m'a permis d'ancrer les bases de Python à travers un cas d'usage réel et quotidien, en combinant logique de boucles, conditions et interactions utilisateur.
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
              <a href="https://github.com/hannabar/Euroforma_Shop.git" target="_blank" rel="noopener noreferrer">
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

export default EuroformaShop;
