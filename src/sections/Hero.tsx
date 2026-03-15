import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown } from "lucide-react";
import { lazy, Suspense } from "react";

const ParticleField = lazy(() => import("@/components/ParticleField"));

const Hero = () => {
  return (
    <section id="hero" className="relative h-svh flex flex-col justify-center px-[5vw] md:px-[8vw] grid-overlay">
      <div className="z-10 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left side */}
        <div className="max-w-2xl flex-1">
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.9] mb-8 tracking-tighter"
          >
            RAJALINGAM <br />
            <span className="text-gradient">NARAYANAKUMAR</span>
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

        {/* Right side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative flex-shrink-0"
        >
          {/* Outer glow */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 blur-2xl animate-pulse-glow" />

          {/* Holographic ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 rounded-full border border-primary/20"
            style={{
              background: "conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.15), transparent, hsl(var(--accent) / 0.1), transparent)",
            }}
          />

          {/* Glass card frame */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden"
            style={{
              boxShadow: "0 0 30px hsl(var(--primary) / 0.3), 0 0 60px hsl(var(--primary) / 0.15), inset 0 0 30px hsl(var(--primary) / 0.1)",
              border: "2px solid hsl(var(--primary) / 0.4)",
            }}
          >
            {/* Dark overlay to blend blue background */}
            <div className="absolute inset-0 bg-background/30 mix-blend-multiply z-10 pointer-events-none" />
            {/* Gradient overlay for color blending */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60 z-10 pointer-events-none" />

            <img
              src="/profile/profile.jpg"
              alt="Rajalingam Narayanakumar"
              className="w-full h-full object-cover object-top grayscale-[30%] contrast-[1.1] brightness-[0.85]"
            />

            {/* Holographic scanline effect */}
            <div
              className="absolute inset-0 z-20 pointer-events-none opacity-10"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary) / 0.15) 2px, hsl(var(--primary) / 0.15) 4px)",
              }}
            />
          </motion.div>

          {/* Corner accents */}
          <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
          <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-primary/50 rounded-bl-lg" />
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
