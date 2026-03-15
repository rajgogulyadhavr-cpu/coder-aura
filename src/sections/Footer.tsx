import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-[5vw] md:px-[8vw]">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-muted-foreground">
        © 2025 RAJALINGAM_N // ALL RIGHTS RESERVED
      </p>
      <div className="flex items-center gap-4">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Github className="w-4 h-4" strokeWidth={1.25} />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="w-4 h-4" strokeWidth={1.25} />
        </a>
        <a href="mailto:rajgogulyadhavr@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail className="w-4 h-4" strokeWidth={1.25} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
