import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "primary" | "accent";
  hover?: boolean;
}

const GlassCard = ({ children, className, glowColor, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-lg p-6 transition-all duration-500",
        hover && "hover:border-primary/30 hover:glow-primary",
        glowColor === "accent" && hover && "hover:border-accent/30 hover:glow-accent",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
