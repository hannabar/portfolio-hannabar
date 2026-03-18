import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface SectionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  delay?: number;
}

const SectionCard = ({ title, description, icon: Icon, link, delay = 0 }: SectionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        to={link}
        className="glass-card rounded-2xl p-8 block group hover-lift h-full"
      >
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex items-center text-primary text-sm font-medium">
          Découvrir
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
        </div>
      </Link>
    </motion.div>
  );
};

export default SectionCard;
