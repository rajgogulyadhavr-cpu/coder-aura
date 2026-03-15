import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { X } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "National Level Hackathon",
    rank: "3rd Prize",
    description: "Secured 3rd Prize at the National Level Hackathon organized by Velammal College of Engineering & Technology, Madurai. Competed against teams from across India with an innovative AI-powered solution.",
    img: "/achievements/hackathon.jpg",
  },
  {
    id: 2,
    title: "Tamil Nadu Government Award",
    rank: "Centum in CS",
    description: "Received the prestigious Tamil Nadu Government Award for scoring Centum (100%) in Computer Science during Higher Secondary examinations. A testament to academic excellence and dedication.",
    img: "/achievements/tn_award.jpg",
  },
  {
    id: 3,
    title: "Youth Indians Round Table",
    rank: "Runner-up",
    description: "Runner-up at the Youth Indians Round Table event focused on Accessibility & Health Talk. Demonstrated strong communication and leadership skills addressing social impact topics.",
    img: "/achievements/youth_roundtable.jpg",
  },
];

const Achievements = () => {
  const [selected, setSelected] = useState<typeof achievements[0] | null>(null);

  return (
    <section id="achievements" className="section-padding grid-overlay">
      <SectionHeading title="ACHIEVEMENTS" subtitle="// MILESTONES" />

      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            onClick={() => setSelected(item)}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden border border-border rounded-lg hover:border-primary/30 hover:glow-primary transition-all duration-500"
          >
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-primary font-mono text-xs tracking-wider mb-1">{item.rank}</p>
              <h3 className="text-lg font-display font-bold">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card rounded-lg max-w-2xl w-full overflow-hidden"
            >
              <div className="relative aspect-video">
                <img src={selected.img} alt={selected.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-muted transition-colors"
                >
                  <X className="w-4 h-4" strokeWidth={1.25} />
                </button>
              </div>
              <div className="p-6">
                <p className="text-primary font-mono text-sm tracking-wider mb-2">{selected.rank}</p>
                <h3 className="text-2xl font-display font-bold mb-3">{selected.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
