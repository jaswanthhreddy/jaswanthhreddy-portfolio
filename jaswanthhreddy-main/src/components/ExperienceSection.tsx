import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Data Science Intern",
    company: "AdZis Software Private Ltd",
    location: "Thiruvananthapuram, Kerala",
    duration: "May 2025 – June 2025",
    points: [
      "Applied data analysis, cleaning, and feature engineering to support AI-driven product development for e-commerce and content automation.",
      "Collaborated with technical teams to implement data science solutions contributing to real-world, industry-relevant projects in a fast-paced startup environment.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Mithra Construction Equipment Company",
    location: "Hyderabad, Telangana",
    duration: "April 2025 – May 2025",
    points: [
      "Conducted in-depth data analysis and created visualizations for critical business areas such as sales and revenue trends, uncovering actionable insights.",
      "Utilized analytical skills and modern data tools to support informed decision-making and improve operational efficiency.",
    ],
  },
  {
    role: "Marketing Intern",
    company: "IIT Madras — Shaastra 2025",
    location: "Chennai, Tamil Nadu",
    duration: "October 2024 – January 2025",
    points: [
      "Drove nationwide event promotion and digital outreach contributing to record attendance of over 70,000 participants at India's largest student-run technical festival.",
      "Coordinated project tasks and conducted comprehensive analyses, identifying and rectifying discrepancies in engineering designs.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Experience</h2>
          <p className="section-subheading">My professional journey so far</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative pl-14 pb-12 last:pb-0"
            >
              <div className="timeline-dot" />

              <div className="glass-card-glow p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {exp.company} · {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
