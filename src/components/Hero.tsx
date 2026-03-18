import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import profileImage from "@/assets/hanna-profile.jpeg";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
{ name: "Accueil", path: "/" },
{ name: "OKDOM", path: "/okdom" },
{ name: "Travaux Pratiques", path: "/tp" },
{ name: "Ateliers", path: "/ateliers" },
{ name: "Compétences", path: "/competences" },
{ name: "Veille Tech", path: "/veille" },
{ name: "Contact", path: "/contact" }];


const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <section className="min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      {/* Integrated Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 w-full pt-8 px-6">

        <div className="flex flex-col items-center gap-4">
          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-1 bg-card/30 backdrop-blur-xl rounded-full px-2 py-2 border border-border/30">
            {navItems.map((item) =>
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              location.pathname === item.path ?
              "bg-primary text-primary-foreground" :
              "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`
              }>

                {item.name}
              </Link>
            )}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors duration-300"
              aria-label="Toggle theme">

              {theme === "dark" ?
              <Sun size={18} className="text-foreground" /> :

              <Moon size={18} className="text-foreground" />
              }
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <span className="font-display font-bold text-xl gradient-text">HB</span>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-card/50 backdrop-blur-xl border border-border/30"
                aria-label="Toggle theme">

                {theme === "dark" ?
                <Sun size={20} className="text-foreground" /> :

                <Moon size={20} className="text-foreground" />
                }
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-card/50 backdrop-blur-xl border border-border/30">

                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen &&
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden w-full overflow-hidden">

                <div className="bg-card/50 backdrop-blur-xl rounded-2xl border border-border/30 p-4 flex flex-col gap-2">
                  {navItems.map((item) =>
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                  location.pathname === item.path ?
                  "bg-primary text-primary-foreground" :
                  "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`
                  }>

                      {item.name}
                    </Link>
                )}
                </div>
              </motion.div>
            }
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="container-custom relative z-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-12 mb-8 flex justify-center">

              <div className="relative group">
                {/* Animated ring */}
                <motion.div
                  className="absolute -inset-2 rounded-full opacity-75"
                  style={{ background: "var(--gradient-primary)" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />

                {/* Glow effect */}
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors duration-500" />
                {/* Photo container */}
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Hanna Baron"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" />

                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6">

              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                BTS SIO Option SLAM • Euroforma Paris
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">

              Hanna <span className="gradient-text">Baron</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">

              Passionnée par l'informatique, je transforme ma curiosité en compétences concrètes en développement et en gestion de projets. Toujours motivée à apprendre et à créer des solutions innovantes.
            

            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4">

              <Button asChild size="lg" className="group">
                <Link to="/contact">
                  En savoir plus
                  <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 md:mt-28">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
              { value: "6+", label: "Projets TP" },
              { value: "2", label: "Ateliers PPE" },
              { value: "10+", label: "Technologies" },
              { value: "1", label: "Alternance" }].
              map((stat, index) =>
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center hover-lift">

                  <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default Hero;