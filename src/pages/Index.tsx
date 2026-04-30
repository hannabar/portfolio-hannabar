import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionCard from "@/components/SectionCard";
import { motion } from "framer-motion";
import { Briefcase, Code, FolderOpen, Brain, Eye, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {/* About Section - Moved to top */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>

              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                À propos de <span className="gradient-text">moi</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Actuellement étudiante en BTS SIO option SLAM à Euroforma Paris, 
                  je me forme aux métiers du développement logiciel et des applications métiers.
                </p>
              <p>Titulaire d'un Baccalauréat Général mention Bien avec la spécialité NSI, j'ai acquis de solides bases en algorithmique, en Python et en  bases de données.
                </p>
                <p>
                  En alternance, je développe mes compétences en entreprise tout en suivant ma formation. 
                  Mes expériences d'animatrice et responsable d'animation m'ont également permis de développer 
                  des qualités de leadership et de gestion d'équipe.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6">

              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-display font-semibold mb-4 flex items-center gap-3">
        
                  Formation
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">2024-2026</span>
                    <span className="text-muted-foreground">BTS SIO SLAM - Euroforma Paris</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">2023</span>
                    <span className="text-muted-foreground">Bac Général Mention Bien - Beth Hanna Paris</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-display font-semibold mb-4 flex items-center gap-3">
                
                  Expériences
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary">2024-2025</span>
                    <span className="text-muted-foreground">Responsable animation - Centres de loisirs Nice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary">2022-2023</span>
                    <span className="text-muted-foreground">Animatrice - Association Centre Maor</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sections Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Découvrez mon <span className="gradient-text">parcours</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explorez mes projets, compétences et expériences dans le domaine du développement informatique.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectionCard
              title="Expérience OKDOM"
              description="Mon alternance chez OKDOM : missions, projets réalisés et compétences développées en entreprise."
              icon={Briefcase}
              link="/okdom"
              delay={0} />

            <SectionCard
              title="Travaux Pratiques"
              description="Projets pratiques réalisés durant ma formation : jeux, e-commerce, blog et plus encore."
              icon={FolderOpen}
              link="/tp"
              delay={0.1} />

            <SectionCard
              title="Ateliers Professionnels"
              description="2 Projets Professionnels Encadrés : Medicine App et GSB avec conception et développement complets."
              icon={Code}
              link="/ateliers"
              delay={0.2} />

            <SectionCard
              title="Compétences"
              description="Langages, frameworks, outils et compétences transversales acquises pendant ma formation."
              icon={Brain}
              link="/competences"
              delay={0.3} />

            <SectionCard
              title="Veille Technologique"
              description="IA en imagerie médicale et données biométriques : mes sujets de veille technologique."
              icon={Eye}
              link="/veille"
              delay={0.4} />

            <SectionCard
              title="Contact"
              description="Envie de collaborer ou d'échanger ? Contactez-moi pour discuter de vos projets."
              icon={Mail}
              link="/contact"
              delay={0.5} />

          </div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default Index;
