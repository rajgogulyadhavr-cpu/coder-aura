import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:rajgogulyadhavr@gmail.com?subject=Contact from ${formState.name}&body=${formState.message}`;
  };

  return (
    <section id="contact" className="section-padding grid-overlay">
      <SectionHeading title="CONTACT" subtitle="// GET_IN_TOUCH" />

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-muted-foreground text-lg leading-relaxed">
            Interested in working together or have a question? Feel free to reach out.
          </p>

          <div className="space-y-4">
            <GlassCard className="flex items-center gap-4 py-4">
              <Mail className="w-5 h-5 text-primary" strokeWidth={1.25} />
              <a href="mailto:rajgogulyadhavr@gmail.com" className="font-mono text-sm hover:text-primary transition-colors">
                rajgogulyadhavr@gmail.com
              </a>
            </GlassCard>
            <GlassCard className="flex items-center gap-4 py-4">
              <Phone className="w-5 h-5 text-primary" strokeWidth={1.25} />
              <a href="tel:+919791703480" className="font-mono text-sm hover:text-primary transition-colors">
                +91 9791703480
              </a>
            </GlassCard>
            <GlassCard className="flex items-center gap-4 py-4">
              <MapPin className="w-5 h-5 text-primary" strokeWidth={1.25} />
              <span className="font-mono text-sm">Karur, Tamil Nadu, India</span>
            </GlassCard>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="#" className="p-3 border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all">
              <Github className="w-5 h-5" strokeWidth={1.25} />
            </a>
            <a href="#" className="p-3 border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all">
              <Linkedin className="w-5 h-5" strokeWidth={1.25} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard hover={false} className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-mono text-xs text-muted-foreground tracking-wider mb-2 block">NAME</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground tracking-wider mb-2 block">EMAIL</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground tracking-wider mb-2 block">MESSAGE</label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 font-display font-bold tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-all group"
              >
                SEND MESSAGE
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.25} />
              </button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
