import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Database, Globe, BrainCircuit, BarChart3, Wifi, FileSpreadsheet, Users, MessageSquare, Lightbulb, HeartHandshake } from "lucide-react";

const techSkills = [
  { name: "Python", icon: BrainCircuit, level: 85 },
  { name: "MERN Stack", icon: Globe, level: 80 },
  { name: "MySQL", icon: Database, level: 75 },
  { name: "Power BI", icon: BarChart3, level: 60 },
  { name: "IoT", icon: Wifi, level: 70 },
  { name: "MS Office", icon: FileSpreadsheet, level: 85 },
];

const softSkills = [
  { name: "Leadership", icon: Users },
  { name: "Communication", icon: MessageSquare },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Teamwork", icon: HeartHandshake },
];

const Skills = () => (
  <section id="skills" className="section-padding grid-overlay">
    <SectionHeading title="SKILLS" subtitle="// TECH_STACK" />

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
      {techSkills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <GlassCard className="group">
            <div className="flex items-center gap-4 mb-4">
              <skill.icon className="w-5 h-5 text-primary" strokeWidth={1.25} />
              <span className="font-display font-semibold">{skill.name}</span>
              <span className="ml-auto font-mono text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              />
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>

    <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
      <span className="h-px w-8 bg-accent" /> SOFT SKILLS
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {softSkills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <GlassCard glowColor="accent" className="text-center py-8">
            <skill.icon className="w-8 h-8 text-accent mx-auto mb-3" strokeWidth={1.25} />
            <p className="font-mono text-sm">{skill.name}</p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
