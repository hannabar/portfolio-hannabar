import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import miniBlogVideo from "@/assets/mini-blog-animated.mp4";
import miniblogScreenshot1 from "@/assets/miniblog-screenshot-1.png";
import miniblogScreenshot2 from "@/assets/miniblog-screenshot-2.png";
import miniblogScreenshot3 from "@/assets/miniblog-screenshot-3.png";

const MiniBlog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Mini Blog"
        subtitle="Blog complet avec système de publication d'articles et authentification."
        backgroundVideo={miniBlogVideo}
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
                <strong className="text-foreground">Mini Blog</strong> est une plateforme de blogging complète
                développée en PHP avec MySQL. Elle permet la publication, l'édition et la suppression d'articles
                avec un système de commentaires.
              </p>
              <p>
                Le projet inclut un système d'authentification complet avec différents niveaux d'accès
                (administrateur, auteur, lecteur).
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
              <img src={miniblogScreenshot1} alt="MiniBlog - Liste des articles" className="rounded-lg w-full aspect-video object-cover" />
              <img src={miniblogScreenshot2} alt="MiniBlog - Détail d'un article" className="rounded-lg w-full aspect-video object-cover" />
              <img src={miniblogScreenshot3} alt="MiniBlog - Suppression d'un article" className="rounded-lg w-full aspect-video object-cover" />
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
                CRUD complet pour les articles
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Système de commentaires modéré
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Authentification avec gestion des rôles
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Interface d'administration complète
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
                Ce projet m'a permis d'approfondir la sécurité web (protection contre les injections SQL,
                XSS) et la gestion des sessions utilisateur.
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
              <a href="https://github.com/hannabar/MINIBLOG.git" target="_blank" rel="noopener noreferrer">
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

export default MiniBlog;
