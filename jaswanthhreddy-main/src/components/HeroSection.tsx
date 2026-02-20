import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, FolderOpen, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const roles = [
  "AI & Data Science Engineer",
  "Machine Learning | NLP | Data Analytics",
  "Building Intelligent Solutions",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentRole.substring(0, text.length - 1)
              : currentRole.substring(0, text.length + 1)
          );
        },
        isDeleting ? 30 : 60
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-6"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
        >
          <span className="text-foreground">Bandi</span>{" "}
          <span className="gradient-text">Jaswanth Reddy</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="h-10 mb-8 flex items-center justify-center"
        >
          <span className="text-xl md:text-2xl text-muted-foreground font-display">
            {text}
          </span>
          <span className="ml-1 border-r-2 border-primary h-7 animate-typing-cursor" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg"
        >
          Leveraging AI, machine learning, and data-driven insights to build
          intelligent solutions that solve real-world challenges.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="/Jaswanth_Reddy_Resume.pdf" download className="btn-primary-glow inline-flex items-center gap-2">
            <Download size={18} />
            Download Resume
          </a>
          <a href="#projects" className="btn-outline-glow inline-flex items-center gap-2">
            <FolderOpen size={18} />
            View Projects
          </a>
          <a href="#contact" className="btn-outline-glow inline-flex items-center gap-2">
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
