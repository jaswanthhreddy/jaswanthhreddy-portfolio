import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Brain, BarChart3, MessageSquare, Cloud, PenTool } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "XGBoost", level: 80 },
      { name: "Predictive Analytics", level: 75 },
    ],
  },
  {
    icon: BarChart3,
    title: "Data Science",
    skills: [
      { name: "Data Analysis", level: 85 },
      { name: "Statistical Modelling", level: 75 },
      { name: "Data Visualization", level: 80 },
    ],
  },
  {
    icon: MessageSquare,
    title: "NLP & LLMs",
    skills: [
      { name: "NLP Techniques", level: 80 },
      { name: "LLMs / RAG", level: 75 },
      { name: "LangChain / FAISS", level: 70 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Databases",
    skills: [
      { name: "AWS Fundamentals", level: 70 },
      { name: "Oracle Cloud", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    icon: PenTool,
    title: "Visualization & Tools",
    skills: [
      { name: "Power BI", level: 80 },
      { name: "Matplotlib", level: 85 },
      { name: "Excel", level: 85 },
      { name: "Canva / Adobe", level: 75 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Technical Skills</h2>
          <p className="section-subheading">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredCategory(i)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="glass-card-glow p-6 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-xs text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                        className="progress-bar-fill"
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
