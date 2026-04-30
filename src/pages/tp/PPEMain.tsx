import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ppeMainVideo from "@/assets/ppe-main-animated.mp4";

const PPEMain = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="PPE Main"
        subtitle="Application web de gestion des frais des visiteurs médicaux avec une architecture MVC complète."
        backgroundVideo={ppeMainVideo}
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

          {/* Technologies & Outils - aligned together */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {["PHP", "MySQL", "XAMPP", "Visual Studio Code"].map((tech) => (
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
                GSB Appli Frais est une application web de gestion des frais professionnels destinée aux visiteurs médicaux de l'entreprise Galaxy Swiss Bourdin. Ce projet répond à un besoin concret de centraliser et uniformiser la déclaration des dépenses engagées lors des déplacements professionnels comme les frais de restauration, d'hébergement et de déplacement. L'application a été développée individuellement en PHP avec une architecture MVC, une base de données MySQL, et une interface en HTML/CSS avec Bootstrap pour la rendre responsive.
              </p>
              <p>
                Le visiteur médical se connecte avec ses identifiants sécurisés et accède à son espace personnel depuis lequel il peut déclarer, consulter, modifier ou supprimer ses fiches de frais. Chaque dépense est classée selon qu'elle est remboursable (fiche forfait) ou non remboursable (fiche hors forfait), permettant une gestion claire et transparente des remboursements.
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
                Authentification sécurisée avec mot de passe haché et sessions protégées
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Saisie des frais par catégorie via un formulaire dédié
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Gestion des fiches forfait (remboursables) et hors forfait (non remboursables)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Modification et suppression des fiches de frais
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Suivi du statut de remboursement (enregistré, validé, remboursé)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Interface responsive compatible PC, tablette et smartphone
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
                Ce projet démontre une maîtrise du développement web full-stack en PHP avec une architecture MVC structurée et une base de données relationnelle MySQL. Les compétences acquises couvrent la gestion des sessions et de l'authentification, la manipulation des données via des requêtes SQL sécurisées, et la conformité RGPD pour la protection des données personnelles des utilisateurs.
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
              <a href="https://github.com/hannabar/PPE_PHP.git" target="_blank" rel="noopener noreferrer">
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

export default PPEMain;
