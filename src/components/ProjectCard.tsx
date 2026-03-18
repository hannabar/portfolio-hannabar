import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image?: string;
  video?: string;
  backgroundVideo?: boolean;
  animatedComponent?: React.ReactNode;
  demoLink?: string;
  githubLink?: string;
  detailLink?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  features,
  image,
  video,
  backgroundVideo = false,
  animatedComponent,
  demoLink,
  githubLink,
  detailLink,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl overflow-hidden group hover-lift h-full flex flex-col relative"
    >
      {/* Background video (fingerprint style) */}
      {backgroundVideo && video ? (
        <>
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </>
      ) : null}

      {/* Regular cover image/video */}
      {!backgroundVideo && (
      <div className="h-48 bg-gradient-to-br from-secondary to-muted relative overflow-hidden flex-shrink-0">
        {animatedComponent ? (
          animatedComponent
        ) : video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : image ? (
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-xl bg-primary/20 flex items-center justify-center">
              <span className="font-display text-2xl font-bold text-primary">
                {title.charAt(0)}
              </span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      )}

      <div className="relative z-10 p-6 flex flex-col flex-grow">
        <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="text-sm text-muted-foreground mb-6 space-y-1 flex-grow">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex flex-col gap-3 mt-auto">
          {detailLink && (
            <Button asChild size="sm" className="w-full">
              <Link to={detailLink}>
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
          <div className="flex gap-3">
            {demoLink && (
              <Button asChild size="sm" variant="outline" className="flex-1">
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Jouer
                </a>
              </Button>
            )}
            {githubLink && (
              <Button asChild size="sm" variant="outline" className="flex-1">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
