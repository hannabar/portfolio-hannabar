import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
{ name: "Accueil", path: "/" },
{ name: "OKDOM", path: "/okdom" },
{ name: "Travaux Pratiques", path: "/tp" },
{ name: "Ateliers", path: "/ateliers" },
{ name: "Compétences", path: "/competences" },
{ name: "Veille Tech", path: "/veille" },
{ name: "Contact", path: "/contact" }];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-display font-bold text-xl tracking-tight">
            <span className="gradient-text text-primary">HB</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
              location.pathname === item.path ?
              "text-primary" :
              "text-muted-foreground"}`
              }>

                {item.name}
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground">

            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">

            <div className="container-custom py-6 flex flex-col gap-4">
              {navItems.map((item) =>
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-2 transition-colors duration-300 hover:text-primary ${
              location.pathname === item.path ?
              "text-primary" :
              "text-muted-foreground"}`
              }>

                  {item.name}
                </Link>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

};

export default Navbar;