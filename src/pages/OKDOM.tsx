import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Code, CheckCircle } from "lucide-react";
import okdomLogo from "@/assets/okdom-logo-square.png";
import okdomVideo from "@/assets/okdom-animated.mp4";

const OKDOM = () => {
  const missions = [
    "Maintenance d'applications web",
    "Développement de nouvelles fonctionnalités sur Odoo",
    "Tests et débogage des fonctionnalités",
    "Documentation technique des projets",
    "Collaboration avec l'équipe de développement",
  ];

const technologies = [
    "HTML/CSS", "Git", "VS Code", "Odoo", "Docker", "Python", "PostgreSQL"
  ];

  const skills = [
    { category: "Techniques", items: ["Création d'un environnement de test", "Exploitation d'Odoo", "Amélioration des fonctionnalités existantes"] },
    { category: "Transversales", items: ["Travail en équipe", "Autonomie", "Communication", "Gestion du temps"] },
  ];

  return (
    <div className="min-h-screen bg-background okdom-theme">
      <Navbar />
      
      <PageHeader
        title="Alternance chez OKDOM"
        subtitle="Mon expérience en entreprise dans le cadre de mon BTS SIO, où je développe mes compétences techniques et professionnelles."
        backgroundVideo={okdomVideo}
      />

      {/* Company Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="glass-card rounded-2xl p-8">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <img src={okdomLogo} alt="Logo OKDOM" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold mb-2">OKDOM</h2>
                    <p className="text-muted-foreground">
                      OKDOM est une société spécialisée dans la domiciliation d'entreprises, 
                      offrant aux professionnels et entrepreneurs des solutions flexibles 
                      pour établir leur siège social.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-display text-lg font-semibold mb-4">Services principaux</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                      <span><strong className="text-foreground">Domiciliation commerciale :</strong> mise à disposition d'une adresse professionnelle</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                      <span><strong className="text-foreground">Gestion du courrier :</strong> réception, numérisation et réexpédition</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                      <span><strong className="text-foreground">Permanence téléphonique :</strong> accueil des appels professionnels</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                      <span><strong className="text-foreground">Espaces de travail :</strong> salles de réunion et bureaux équipés en location ponctuelle</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                      <span><strong className="text-foreground">Accompagnement administratif :</strong> aide à la création et gestion d'entreprise</span>
                    </li>
                  </ul>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">2024 - 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">Paris, France</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">Équipe Tech</span>
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold mb-4">Missions réalisées</h3>
                <ul className="space-y-3">
                  {missions.map((mission, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{mission}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-display font-semibold mb-4 flex items-center gap-3">
                  <Code className="w-5 h-5 text-accent" />
                  Technologies utilisées
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {skills.map((skill, index) => (
                <div key={index} className="glass-card rounded-2xl p-6">
                  <h3 className="font-display font-semibold mb-4">
                    Compétences {skill.category.toLowerCase()}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OKDOM;
