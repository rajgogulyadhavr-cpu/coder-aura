import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Cpu, Code, Trophy } from "lucide-react";

const stats = [
  { icon: Cpu, label: "PROJECTS", value: "4+", color: "text-primary" },
  { icon: Code, label: "TECH SKILLS", value: "6+", color: "text-success" },
  { icon: Trophy, label: "ACHIEVEMENTS", value: "3+", color: "text-accent" },
];

const About = () => (
  <section id="about" className="section-padding grid-overlay">
    <SectionHeading title="ABOUT" subtitle="// WHO_AM_I" />

    <div className="grid md:grid-cols-2 gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <p className="text-lg text-muted-foreground leading-relaxed">
          Pre-final year <span className="text-foreground font-semibold">B.Tech student</span> in Artificial Intelligence and Data Science at Chettinad College of Engineering and Technology, Karur with a CGPA of <span className="text-primary font-mono font-bold">8.46</span>.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Passionate about <span className="text-foreground">Artificial Intelligence</span>, <span className="text-foreground">Robotics</span>, <span className="text-foreground">Deep Learning</span>, and <span className="text-foreground">Full Stack Web Development</span>. Completed MERN Stack internship at IBM and developed multiple AI and robotics projects.
        </p>
        <div className="flex items-center gap-4 font-mono text-sm text-muted-foreground">
          <span className="text-primary">▶</span>
          <span>CGPA: 8.46 // 12th: 92% // CS: 100%</span>
        </div>
      </motion.div>

      <div className="grid gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <GlassCard className="flex items-center gap-6">
              <div className={`${stat.color} p-3 border border-border rounded-lg`}>
                <stat.icon className="w-6 h-6" strokeWidth={1.25} />
              </div>
              <div>
                <p className="text-3xl font-display font-bold">{stat.value}</p>
                <p className="font-mono text-xs text-muted-foreground tracking-widest">{stat.label}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
