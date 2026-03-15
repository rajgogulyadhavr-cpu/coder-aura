import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown } from "lucide-react";
import { lazy, Suspense } from "react";

const ParticleField = lazy(() => import("@/components/ParticleField"));

const Hero = () => {
  return (
    <section id="hero" className="relative h-svh flex flex-col justify-center px-[5vw] md:px-[8vw] grid-overlay">
      <div className="z-10 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-primary mb-4 block tracking-[0.2em] text-sm"
        >
          SYSTEM_READY // RAJALINGAM_N
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.85] mb-8 tracking-tighter"
        >
          BUILDING <br />
          <span className="text-gradient">FUTURE_AI</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl sm:text-2xl md:text-4xl font-display font-light text-muted-foreground h-16 md:h-20"
        >
          <TypeAnimation
            sequence={[
              "AI Developer", 2000,
              "Full Stack Developer", 2000,
              "Robotics Enthusiast", 2000,
            ]}
            repeat={Infinity}
            speed={40}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap gap-4 sm:gap-6 mt-12"
        >
          <a
            href="#projects"
            className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 font-display font-bold tracking-wider hover:opacity-90 transition-all hover:scale-105 text-sm sm:text-base"
          >
            VIEW PROJECTS
          </a>
          <a
            href="#contact"
            className="border border-border hover:bg-muted/50 px-6 sm:px-8 py-3 sm:py-4 font-display tracking-wider transition-all text-sm sm:text-base"
          >
            CONTACT_ME
          </a>
        </motion.div>
      </div>

      {/* Particle background */}
      <div className="absolute inset-0 -z-0 opacity-40">
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-muted-foreground tracking-widest">SCROLL</span>
        <ArrowDown className="w-4 h-4 text-primary animate-float" strokeWidth={1.25} />
      </motion.div>
    </section>
  );
};

export default Hero;
