import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Server, Layers, BrainCircuit, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: <Globe size={28} />,
    title: "Web Development",
    desc: "Responsive website development and dynamic web applications with modern frameworks.",
  },
  {
    icon: <Server size={28} />,
    title: "Backend Development",
    desc: "API development, database integration, and scalable server-side architecture.",
  },
  {
    icon: <Layers size={28} />,
    title: "Full Stack Development",
    desc: "End-to-end application building from database design to polished UI.",
  },
  {
    icon: <BrainCircuit size={28} />,
    title: "AI / ML Solutions",
    desc: "Chatbots, Computer Vision systems, and intelligent automation solutions.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium mb-2">What I Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            My <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card-hover p-8 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {s.icon}
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
