import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import cyberVideo from "@/assets/cyber-animated.mp4";
import cyberScreenshot1 from "@/assets/cyber-screenshot-1.png";
import cyberScreenshot2 from "@/assets/cyber-screenshot-2.png";
import cyberScreenshot3 from "@/assets/cyber-screenshot-3.png";

const Cyber = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Cyber"
        subtitle="Cybersécurité Web — Exploitation & Correction de vulnérabilités OWASP"
        backgroundVideo={cyberVideo}
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
            {["HTML", "CSS", "Sécurité"].map((tech) => (
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
                Ce TP pratique porte sur l'analyse et la correction de failles de sécurité courantes dans une application PHP/MySQL volontairement vulnérable, dans le cadre d'un exercice pédagogique encadré.
              </p>
              <p>
                Le projet consiste à identifier, exploiter puis corriger deux types de vulnérabilités classées par l'OWASP : une injection SQL sur un formulaire de connexion, et une faille XSS stockée dans un module de commentaires.
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
              <img src={cyberScreenshot1} alt="Cyber - Injection SQL connexion" className="rounded-lg w-full aspect-video object-cover" />
              <img src={cyberScreenshot2} alt="Cyber - Faille XSS commentaire" className="rounded-lg w-full aspect-video object-cover" />
              <img src={cyberScreenshot3} alt="Cyber - Alert XSS exécutée" className="rounded-lg w-full aspect-video object-cover" />
            </div>
          </motion.div>

          {/* Compétences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-8 mb-8"
          >
            <h2 className="font-display text-2xl font-bold mb-6">
              Compétences mobilisées
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Exploitation d'une injection SQL pour contourner l'authentification via une concaténation de requête non sécurisée
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Injection d'un script XSS stocké dans une base de données et exécuté côté client à chaque chargement de page
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Mise en place de correctifs concrets : requêtes préparées avec PDO, hachage des mots de passe avec password_hash / password_verify, échappement HTML avec htmlspecialchars
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Rédaction d'un rapport technique documentant les payloads utilisés, les impacts et les recommandations (CSP, cookies SameSite, rate limiting)
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
                Ce projet m'a permis de comprendre concrètement comment des failles critiques peuvent être exploitées, et surtout comment les prévenir grâce aux bonnes pratiques de développement sécurisé.
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
              <a href="https://github.com/hannabar/Cybersecurity_TP2-main.git" target="_blank" rel="noopener noreferrer">
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

export default Cyber;
