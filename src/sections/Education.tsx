import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { GraduationCap, School } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "B.Tech – AI & Data Science",
    institution: "Chettinad College of Engineering and Technology, Karur",
    detail: "CGPA: 8.46",
    period: "2022 – Present",
    highlight: true,
  },
  {
    icon: School,
    title: "Higher Secondary (12th)",
    institution: "Government Higher Secondary School, Ayyarmalai",
    detail: "92% – School First | Centum in Computer Science",
    period: "2022",
  },
  {
    icon: School,
    title: "Higher Secondary (11th)",
    institution: "Government Higher Secondary School, Ayyarmalai",
    detail: "82% – School First",
    period: "2021",
  },
];

const Education = () => (
  <section id="education" className="section-padding grid-overlay">
    <SectionHeading title="EDUCATION" subtitle="// ACADEMIC_LOG" />

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

      <div className="space-y-8">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative pl-12 md:pl-20"
          >
            {/* Dot */}
            <div className={`absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full border-2 ${
              item.highlight ? "bg-primary border-primary glow-primary" : "bg-muted border-border"
            }`} />

            <div className={`glass-card rounded-lg p-6 ${item.highlight ? "border-primary/20" : ""}`}>
              <div className="flex items-start gap-3 mb-2">
                <item.icon className={`w-5 h-5 mt-0.5 ${item.highlight ? "text-primary" : "text-muted-foreground"}`} strokeWidth={1.25} />
                <div>
                  <h3 className="font-display font-bold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.institution}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-3 ml-8">
                <span className="font-mono text-sm text-primary">{item.detail}</span>
                <span className="font-mono text-xs text-muted-foreground">// {item.period}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
