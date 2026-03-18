import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Stethoscope, Building, FileText, Code, TestTube, Shield, Github, ArrowRight, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ateliersHeaderBgVideo from "@/assets/ateliers-header-bg-animated.mp4";
import medicineAppBgVideo from "@/assets/medicine-app-bg-animated.mp4";
import gsbBgVideo from "@/assets/gsb-bg-animated.mp4";

const ateliers = [
  {
    title: "Medicine App",
    icon: Stethoscope,
    context: "Application mobile Android permettant aux utilisateurs de rechercher et consulter des informations sur les médicaments officiellement commercialisés en France.",
    objectives: [
      "Recherche multicritères de médicaments (nom, substance active, forme pharmaceutique, voie d'administration)",
      "Consultation des informations détaillées d'un médicament",
      "Accès aux données officielles de l'ANSM",
    ],
    conception: [
      "Cahier des charges fonctionnel et technique",
      "Maquettes wireframes et mockups UI/UX",
    ],
    technologies: ["Java Android Studio", "Base de données SQLite locale"],
    competences: [
      "Développement mobile Android",
      "Gestion de bases de données locales",
      "Conception UI/UX mobile",
    ],
    githubLink: "https://github.com/hannabar/GSB_MedicineApp.git",
    tpLink: "/tp/ppe-android-java",
    tpLabel: "PPE Android Java",
    bgVideo: medicineAppBgVideo,
    cahierLink: "https://drive.google.com/file/d/1FYp_kHn9XAypf-bVAHYxeHdkpZ7G3sU8/view?usp=drive_link",
  },
  {
    title: "GSB - Gestion des Frais",
    icon: Building,
    context: "Application web permettant aux visiteurs médicaux de saisir et suivre leurs notes de frais lors de leurs déplacements professionnels.",
    objectives: [
      "Saisie des frais engagés (déplacement, restauration, hébergement)",
      "Suivi de l'état des fiches de frais (enregistré, validé, remboursé)",
      "Authentification sécurisée des visiteurs",
    ],
    conception: [
      "Analyse du cahier des charges",
      "Modèle Conceptuel de Données (MCD/MLD)",
      "Maquettes interface utilisateur",
    ],
    technologies: ["PHP / MySQL", "XAMPP / Visual Studio Code", "Architecture MVC"],
    competences: [
      "Développement web full-stack",
      "Authentification et gestion des sessions",
      "Modélisation de base de données",
    ],
    githubLink: "https://github.com/hannabar/PPE_PHP.git",
    tpLink: "/tp/ppe-main",
    tpLabel: "PPE GSB",
    bgVideo: gsbBgVideo,
    cahierLink: "https://docs.google.com/document/d/1yQOQrlsyGkEufn0FIOQtpcAaWkXpicSM/edit?usp=sharing&ouid=102439132412217033167&rtpof=true&sd=true",
  },
];

const Ateliers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Ateliers Professionnels"
        subtitle="2 PPE complets avec analyse, conception, développement et documentation technique."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {ateliers.map((atelier, index) => (
              <motion.div
                key={atelier.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card rounded-2xl overflow-hidden relative"
              >
                {/* Background Video */}
                {atelier.bgVideo && (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
                  >
                    <source src={atelier.bgVideo} type="video/mp4" />
                  </video>
                )}

                {/* Header */}
                <div className="p-8 border-b border-border relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <atelier.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold mb-2">{atelier.title}</h2>
                      <p className="text-muted-foreground">{atelier.context}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 relative z-10">
                  <div>
                    <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" />
                      Objectifs
                    </h3>
                    <ul className="space-y-2">
                      {atelier.objectives.map((obj, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                      <Code className="w-4 h-4 text-primary" />
                      Conception
                    </h3>
                    <ul className="space-y-2">
                      {atelier.conception.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                      <TestTube className="w-4 h-4 text-primary" />
                      Technologies
                    </h3>
                    <ul className="space-y-2">
                      {atelier.technologies.map((tech, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      Compétences
                    </h3>
                    <ul className="space-y-2">
                      {atelier.competences.map((comp, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                          {comp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Buttons */}
                <div className="px-8 pb-8 flex flex-wrap gap-3 relative z-10">
                  <Button asChild size="sm">
                    <Link to={atelier.tpLink}>
                      <ArrowRight className="mr-2 h-4 w-4" />
                      {atelier.tpLabel}
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href={atelier.cahierLink} target="_blank" rel="noopener noreferrer">
                      <FileDown className="mr-2 h-4 w-4" />
                      Cahier des charges
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href={atelier.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ateliers;
