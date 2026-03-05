import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, BrainCircuit, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium mb-2">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Passionate Developer &{" "}
            <span className="gradient-text">AI Enthusiast</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Code2 size={28} />,
              title: "Full Stack Developer",
              desc: "Building modern web applications with Python, Django, and frontend technologies. Focused on clean, efficient code.",
            },
            {
              icon: <BrainCircuit size={28} />,
              title: "AI/ML Enthusiast",
              desc: "Passionate about Computer Vision, LLM applications, and building intelligent systems that solve real-world problems.",
            },
            {
              icon: <GraduationCap size={28} />,
              title: "CS Engineering Student",
              desc: "Pursuing B.E. in Computer Engineering from Konkan Gyanpeeth College of Engineering. Committed to continuous learning.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card-hover p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
