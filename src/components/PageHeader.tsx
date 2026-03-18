import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  backgroundComponent?: ReactNode;
  children?: ReactNode;
}

const PageHeader = ({ title, subtitle, badge, backgroundImage, backgroundVideo, backgroundComponent, children }: PageHeaderProps) => {
  return (
    <section className="pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(222_47%_12%)_0%,hsl(222_47%_6%)_70%)]" />
      {backgroundComponent && (
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          {backgroundComponent}
        </div>
      )}
      {backgroundVideo && !backgroundComponent && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      {backgroundImage && !backgroundVideo && !backgroundComponent && (
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: `url(${backgroundImage})` }} />
      )}
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {badge}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white dark:text-foreground">

            {title}
          </motion.h1>
          {subtitle &&
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 dark:text-muted-foreground leading-relaxed">

              {subtitle}
            </motion.p>
          }
          {children}
        </div>
      </div>
    </section>);

};

export default PageHeader;