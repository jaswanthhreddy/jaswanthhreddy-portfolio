import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certifications = [
  { title: "Python and SQL for Data Science", platform: "Scaler", year: "2025" },
  { title: "Introduction to Data Analysis using Microsoft Excel", platform: "Coursera", year: "2025" },
  { title: "Python for Data Science & Machine Learning", platform: "Udemy", year: "2025" },
  { title: "Python for OOP: The A-to-Z Course", platform: "Udemy", year: "2025" },
  { title: "Mastering AI on AWS: Certified AI-Practitioner", platform: "Udemy", year: "2025" },
  { title: "Oracle AI Vector Search Certified Professional", platform: "Oracle University", year: "2025" },
  { title: "OCI 2024 Data Certified Foundations Associate", platform: "Oracle University", year: "2025" },
  { title: "Introduction to Master Data Management", platform: "Infosys", year: "2025" },
  { title: "Data Visualization Essentials", platform: "Infosys", year: "2024" },
  { title: "C Programming Bootcamp", platform: "Udemy", year: "2023" },
];

const platformColors: Record<string, string> = {
  Coursera: "bg-glow-blue/10 text-glow-blue",
  Udemy: "bg-accent/10 text-accent",
  "Oracle University": "bg-destructive/10 text-destructive",
  Infosys: "bg-primary/10 text-primary",
  Scaler: "bg-primary/10 text-primary",
};

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Certifications</h2>
          <p className="section-subheading">Industry-recognized credentials</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card p-5 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="text-primary" size={16} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-medium text-sm text-foreground mb-1 leading-snug">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        platformColors[cert.platform] || "bg-muted text-muted-foreground"
                      }`}
                    >
                      {cert.platform}
                    </span>
                    <span className="text-xs text-muted-foreground">{cert.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
