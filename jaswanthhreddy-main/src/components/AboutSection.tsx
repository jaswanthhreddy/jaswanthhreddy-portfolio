import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "CGPA", value: "7.71", suffix: "/10" },
  { icon: Brain, label: "Projects", value: "3", suffix: "+" },
  { icon: Briefcase, label: "Internships", value: "3", suffix: "" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">Getting to know the person behind the code</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-foreground/90 text-lg leading-relaxed">
              I'm a results-driven AI and Data Science undergraduate with hands-on experience in designing
              and deploying machine learning solutions across healthcare, document analysis, and smart IoT systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Proficient in Python, predictive modeling, and data visualization through impactful internships
              and academic projects. I bring expertise in cloud platforms, NLP, and state-of-the-art AI frameworks,
              backed by industry-recognized certifications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My track record includes collaborating with diverse teams, optimizing data-driven processes,
              and delivering innovative solutions to real-world challenges. I'm passionate about leveraging
              technology to drive business value and advance cutting-edge initiatives.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 grid gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card-glow p-6 flex items-center gap-4 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="text-primary" size={24} />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-foreground">
                    {stat.value}
                    <span className="text-primary text-xl">{stat.suffix}</span>
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
