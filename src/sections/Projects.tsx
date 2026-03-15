import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Bot, MonitorSmartphone, Box, HeartPulse, ExternalLink } from "lucide-react";

const categories = ["All", "AI", "Robotics", "Web Development"] as const;

const projects = [
  {
    title: "Autonomous Service Robot",
    description: "An autonomous robot capable of navigating environments and serving tasks using AI-powered decision making and sensor fusion.",
    icon: Bot,
    category: "Robotics" as const,
    tags: ["Python", "IoT", "AI"],
  },
  {
    title: "Remote Control Service Robot",
    description: "A remotely operated service robot built with IoT components for real-time control and monitoring.",
    icon: MonitorSmartphone,
    category: "Robotics" as const,
    tags: ["IoT", "Arduino", "Sensors"],
  },
  {
    title: "3D Hologram Display System",
    description: "A holographic display system creating 3D visual projections for interactive presentations and demonstrations.",
    icon: Box,
    category: "AI" as const,
    tags: ["Python", "OpenCV", "Hardware"],
  },
  {
    title: "Deep Learning Healthcare App",
    description: "A healthcare application leveraging deep learning for disease prediction and medical image analysis.",
    icon: HeartPulse,
    category: "AI" as const,
    tags: ["Deep Learning", "Python", "TensorFlow"],
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding grid-overlay">
      <SectionHeading title="PROJECTS" subtitle="// SELECTED_WORK" />

      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 font-mono text-xs tracking-wider border transition-all ${
              filter === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="h-full group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 border border-border rounded-lg text-primary group-hover:glow-primary transition-all">
                    <project.icon className="w-6 h-6" strokeWidth={1.25} />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-mono text-primary border border-primary/20 bg-primary/5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Projects;
