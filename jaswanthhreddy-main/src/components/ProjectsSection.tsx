import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ExternalLink, Github, HeartPulse, MessageSquareText, Lightbulb } from "lucide-react";

const projects = [
  {
    icon: HeartPulse,
    title: "Healthcare Disease Prediction System",
    problem: "Early disease detection and patient management remain challenging due to fragmented healthcare systems.",
    description: [
      "Developed an AI-powered healthcare system integrating XGBoost for disease prediction and Gemini API for AI-generated diagnostic summaries, with secure user authentication, MongoDB backend, and Streamlit UI.",
      "Implemented real-time PDF report generation with automated email delivery and follow-up reminders, enhancing patient care management and outreach effectiveness.",
    ],
    techStack: ["Python", "XGBoost", "Gemini API", "MongoDB", "Streamlit"],
    impact: "Automated diagnostic workflows, enabling faster clinical decision-making.",
  },
  {
    icon: MessageSquareText,
    title: "RAG-based Document Query Chatbot",
    problem: "Extracting precise answers from large documents is time-consuming and error-prone.",
    description: [
      "Built an interactive Retrieval-Augmented Generation (RAG) chatbot using LangChain, FAISS, and Groq LLM models, supporting PDF/text upload and real-time semantic search with MiniLM embeddings.",
      "Created custom pipelines for document chunking, vector indexing, and query-driven retrieval; deployed via Streamlit using Groq-hosted LLaMA3 and Mixtral for context-rich responses.",
    ],
    techStack: ["LangChain", "FAISS", "Groq", "LLaMA3", "Mixtral", "Streamlit"],
    impact: "Enabled instant, context-aware Q&A from uploaded documents.",
  },
  {
    icon: Lightbulb,
    title: "IoT Smart Street Light Monitoring",
    problem: "Street light faults lead to safety risks and energy waste with no real-time monitoring.",
    description: [
      "Developed an IoT-enabled smart streetlight monitoring system using sensors for real-time detection of faults and outages, automating notifications to maintenance teams.",
      "Implemented automated energy optimization based on environmental conditions to improve efficiency, reduce manual oversight, and promote sustainable urban infrastructure.",
    ],
    techStack: ["IoT Sensors", "Python", "Real-time Analytics", "Automation"],
    impact: "Reduced energy waste and improved urban safety through smart automation.",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading">Solving real-world problems with intelligent solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card-glow p-6 flex flex-col transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
              onClick={() => setSelectedProject(i)}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <project.icon className="text-primary" size={24} />
              </div>

              <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 flex-1">
                {project.problem}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              <button className="text-sm text-primary font-medium group-hover:underline text-left">
                View Details →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card-glow p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                {(() => {
                  const Icon = projects[selectedProject].icon;
                  return (
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary" size={20} />
                    </div>
                  );
                })()}
                <h3 className="font-display font-bold text-xl text-foreground">
                  {projects[selectedProject].title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {projects[selectedProject].description.map((desc, idx) => (
                <p key={idx} className="text-muted-foreground leading-relaxed text-sm">
                  {desc}
                </p>
              ))}
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-2">Impact</h4>
              <p className="text-primary text-sm">{projects[selectedProject].impact}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {projects[selectedProject].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-md bg-primary/10 text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
