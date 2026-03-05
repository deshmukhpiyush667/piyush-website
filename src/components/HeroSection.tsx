import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
const profileImg = "https://i.postimg.cc/9MnvsvKm/Whats-App-Image-2026-02-21-at-12-44-04-PM.jpg";

const roles = [
  "Python Full-Stack Developer",
  "AI/ML Enthusiast",
  "Web Application Builder",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium mb-2">Hello, I'm</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            Piyush{" "}
            <span className="gradient-text">Deshmukh</span>
          </h1>
          <div className="h-8 mb-6">
            <span className="text-lg text-muted-foreground">
              {text}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>
          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
            A Python Full-Stack Developer focused on building innovative projects,
            intelligent AI systems, and modern web applications. Passionate about
            problem solving and continuous learning.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="bg-primary text-primary-foreground px-7 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-border px-7 py-3 rounded-lg font-medium text-foreground hover:border-primary/50 transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/deshmukhpiyush667"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right - Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 animate-glow-pulse">
              <img
                src={profileImg}
                alt="Piyush Deshmukh"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-display font-bold text-sm">
              Open to Work
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hidden md:block"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
