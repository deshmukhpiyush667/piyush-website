import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "Python", level: 90 },
      { name: "Django", level: 80 },
      { name: "SQL", level: 75 },
      { name: "Flask", level: 70 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Computer Vision", level: 70 },
      { name: "LLM Applications", level: 65 },
      { name: "Deep Learning", level: 60 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium mb-2">My Skills</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              className="glass-card p-8"
            >
              <h3 className="font-display text-xl font-semibold mb-6 text-primary">
                {cat.title}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2 text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-orange-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + ci * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
