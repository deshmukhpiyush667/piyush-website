import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "Medical Chatbot",
    description:
      "LLM-based medical chatbot built using Flask providing symptom-based health guidance, remedies, and doctor suggestions.",
    features: [
      "Emergency detection",
      "Safety filtering",
      "Chat memory",
      "Database logging",
    ],
    highlight: "AI Safety Focus · Structured Responses",
    tech: ["Python", "Flask", "LLM Integration", "Database"],
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "Face Emotion Detection",
    description:
      "Real-time face emotion detection application using computer vision and deep learning with webcam live capture.",
    features: [
      "Live video capture",
      "Haar Cascade detection",
      "Emotion classification: Happy, Sad, Angry, Surprised, Neutral",
    ],
    highlight: "Real-time Processing · Facial Recognition",
    tech: ["Python", "OpenCV", "Deep Learning"],
    color: "from-blue-500/20 to-purple-500/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="glass-card-hover overflow-hidden cursor-pointer group"
              onClick={() => setSelected(i)}
            >
              <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                <span className="font-display text-2xl font-bold text-foreground/80">{p.title}</span>
              </div>
              <div className="p-8">
                <h3 className="font-display text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card max-w-lg w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
              <h3 className="font-display text-2xl font-bold mb-2">
                {projects[selected].title}
              </h3>
              <p className="text-primary text-sm mb-4">{projects[selected].highlight}</p>
              <p className="text-muted-foreground mb-6">{projects[selected].description}</p>
              <h4 className="font-semibold mb-3">Key Features</h4>
              <ul className="space-y-2 mb-6">
                {projects[selected].features.map((f) => (
                  <li key={f} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://github.com/deshmukhpiyush667"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Github size={18} /> View on GitHub
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
