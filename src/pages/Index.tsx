import FloatingNav from "@/components/FloatingNav";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Achievements from "@/sections/Achievements";
import Education from "@/sections/Education";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FloatingNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
