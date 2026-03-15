import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-16"
  >
    <h2 className="text-4xl md:text-5xl font-display font-bold flex items-center gap-4">
      <span className="h-px w-12 bg-primary" />
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground mt-4 font-mono text-sm tracking-wider">{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeading;
