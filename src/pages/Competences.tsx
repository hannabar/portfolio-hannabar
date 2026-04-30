import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Code, Database, Shield, Wrench, Users, BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import competencesBgVideo from "@/assets/competences-bg-animated.mp4";

const technicalSkills = [
  { name: "Python", letters: "Py" },
  { name: "PHP", letters: "PHP" },
  { name: "JavaScript", letters: "JS" },
  { name: "C++", letters: "C++" },
  { name: "SQL", letters: "SQL" },
  { name: "HTML/CSS", letters: "</>" },
];

const dbSkills = [
  { name: "MySQL / MariaDB", letters: "My" },
  { name: "Requêtes SQL (JOIN, INSERT...)", letters: "PG" },
];

const securitySkills = [
  "Analyse des incidents de sécurité",
  "Tests d'intégration sécurisés",
  "Prévention des attaques (SQL injection, XSS, CSRF)",
  "Conformité aux standards de sécurité",
  "Gestion des habilitations et contrôle d'accès",
  "Analyse des logs",
];

const tools = ["Git / GitHub", "VS Code", "Visual Studio", "Docker", "Odoo", "Android Studio", "XAMPP"];

const btsSioBloc1 = [
  "Gérer le patrimoine informatique",
  "Répondre aux incidents et aux demandes",
  "Développer la présence en ligne de l'organisation",
  "Travailler en mode projet",
  "Mettre à disposition des utilisateurs un service informatique",
  "Organiser son développement professionnel",
];

const btsSioBloc2 = [
  "Concevoir et développer une solution applicative",
  "Assurer la maintenance corrective ou évolutive",
  "Gérer les données",
];


const softSkills = [
  { skill: "Gestion de projet", desc: "Planification, suivi, documentation" },
  { skill: "Travail en équipe", desc: "Collaboration, communication" },
  { skill: "Autonomie", desc: "Recherche de solutions, auto-formation" },
  { skill: "Pédagogie", desc: "Formation utilisateurs, rédaction documentation" },
  { skill: "Analyse", desc: "Compréhension besoins, spécifications techniques" },
  { skill: "Animation", desc: "Leadership, gestion d'équipe" },
];

const Competences = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Compétences"
        subtitle="Compétences techniques et transversales développées durant ma formation BTS SIO et mon expérience professionnelle."
        backgroundVideo={competencesBgVideo}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-primary" />
                Langages de programmation
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {technicalSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-primary/30 shadow-[0_0_12px_hsl(var(--primary)/0.2)] hover:border-primary/60 hover:shadow-[0_0_20px_hsl(var(--primary)/0.35)] transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-background/80 border border-primary/40 flex items-center justify-center"
                      style={{ textShadow: '0 0 8px hsl(350, 80%, 65%), 0 0 16px hsl(350, 80%, 65%), 0 0 24px hsl(350, 80%, 55%)' }}>
                      <span className="font-display font-bold text-lg text-primary">{skill.letters}</span>
                    </div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Database Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-primary" />
                Bases de données
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {dbSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="flex flex-col items-center gap-3 p-5 rounded-xl bg-secondary/50 border border-primary/30 shadow-[0_0_12px_hsl(var(--primary)/0.2)] hover:border-primary/60 hover:shadow-[0_0_20px_hsl(var(--primary)/0.35)] transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-background/80 border border-primary/40 flex items-center justify-center"
                      style={{ textShadow: '0 0 8px hsl(350, 80%, 65%), 0 0 16px hsl(350, 80%, 65%), 0 0 24px hsl(350, 80%, 55%)' }}>
                      <span className="font-display font-bold text-lg text-primary">{skill.letters}</span>
                    </div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Security Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-8"
            >
              <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                Sécurité informatique
              </h2>
              <ul className="space-y-3">
                {securitySkills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-8"
            >
              <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-primary" />
                Outils de développement
              </h2>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>

            </motion.div>
          </div>

          {/* BTS SIO Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 glass-card rounded-2xl p-8"
          >
            <h2 className="font-display text-xl font-bold mb-8 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-primary" />
              Compétences du référentiel BTS SIO
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display font-semibold mb-4 text-primary">
                  Bloc 1 : Support et mise à disposition de services informatiques
                </h3>
                <ul className="space-y-2">
                  {btsSioBloc1.map((comp, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      {comp}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-4 text-primary">
                  Bloc 2 : Option SLAM
                </h3>
                <ul className="space-y-2">
                  {btsSioBloc2.map((comp, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      {comp}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Button asChild size="sm" variant="outline">
                    <a href="/portfolio-hannabar/docs/TABLEAU_SYNTHESE_E5_2026.xlsx" download>
                      <Download className="mr-2 h-4 w-4" />
                      Tableau de Synthèse
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 glass-card rounded-2xl p-8"
          >
            <h2 className="font-display text-xl font-bold mb-8 flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              Compétences transversales
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-secondary/50">
                  <div className="font-semibold mb-1">{item.skill}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Competences;
