import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import todoListVideo from "@/assets/todolist-cpp-animated.mp4";

const TodoListCpp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="To-Do List"
        subtitle="Application de gestion de tâches développée en C++ sans vecteur."
        backgroundVideo={todoListVideo}
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
            {["C++", "Console"].map((tech) => (
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
                To-Do List est une application de gestion de tâches développée en C++ sans vecteur. Le programme propose un menu interactif permettant à l'utilisateur d'ajouter, afficher, modifier et supprimer des tâches stockées dans un tableau statique, chaque tâche étant représentée par une structure contenant un titre et un statut.
              </p>
              <p>
                Ce projet m'a permis de maîtriser les structures de données statiques, la gestion de menus et la manipulation de tableaux en C++.
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
                Ajout de tâches avec titre personnalisé (max 30)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Affichage de toutes les tâches avec leur statut (En cours / Terminée)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Marquage d'une tâche comme terminée
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Suppression d'une tâche avec décalage du tableau
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Menu en boucle avec option quitter
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
                Ce projet m'a permis de consolider les fondamentaux du C++ en travaillant sur les structures, les tableaux statiques et la logique de menu, des compétences essentielles en programmation bas niveau.
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
              <a href="https://github.com/hannabar/TodoList_Cpp.git" target="_blank" rel="noopener noreferrer">
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

export default TodoListCpp;
