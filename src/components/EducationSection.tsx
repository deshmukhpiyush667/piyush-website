import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium mb-2">Education</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap size={24} />
              </div>
              <div className="w-0.5 flex-1 bg-border mt-3" />
            </div>
            <div className="pb-12">
              <span className="text-xs text-primary font-medium uppercase tracking-wider">
                Currently Pursuing
              </span>
              <h3 className="font-display text-2xl font-bold mt-1 mb-2">
                Bachelor of Engineering
              </h3>
              <p className="text-lg text-muted-foreground mb-1">Computer Engineering</p>
              <p className="text-muted-foreground">
                Konkan Gyanpeeth College of Engineering
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
