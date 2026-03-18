import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ppeAndroidJavaVideo from "@/assets/ppe-android-java-animated.mp4";

const PPEAndroidJava = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="PPE Medicine App"
        subtitle="Application mobile Android développée en Java pour les visiteurs médicaux de GSB."
        backgroundVideo={ppeAndroidJavaVideo}
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
            {["Java", "Android", "SQLite", "XML"].map((tech) => (
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
                <strong className="text-foreground">Medicine App</strong> est une application mobile Android développée pour les visiteurs médicaux de l'entreprise GSB, leur permettant de rechercher rapidement des médicaments officiellement commercialisés en France. Elle s'appuie sur la Base de Données Publique des Médicaments du gouvernement français intégrée directement dans l'application. Le projet a été développé individuellement en Java avec Android Studio.
              </p>
              <p>
                L'accès à l'application est sécurisé par une authentification en deux étapes : le visiteur saisit son code visiteur, le serveur vérifie le token associé puis envoie un code aléatoire par email que l'utilisateur doit saisir pour valider sa connexion. Une fois connecté, il peut rechercher un médicament selon plusieurs critères et consulter ses informations détaillées.
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
                Authentification sécurisée par code visiteur et vérification par email
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Recherche multicritères : nom commercial, substance active, titulaire, voie d'administration, forme pharmaceutique
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Affichage des résultats en liste claire et intuitive
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Consultation des informations détaillées : composition, principes actifs, excipients, dosage, conditionnement
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
                Ce projet démontre une maîtrise du développement mobile Android natif en Java ainsi que la gestion d'une base de données locale volumineuse issue de données officielles gouvernementales. Les compétences acquises couvrent la conception d'interfaces mobiles, les requêtes SQL multicritères, et l'implémentation d'un système d'authentification sécurisé à double vérification.
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
              <a href="https://github.com/hannabar/GSB_MedicineApp.git" target="_blank" rel="noopener noreferrer">
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

export default PPEAndroidJava;
