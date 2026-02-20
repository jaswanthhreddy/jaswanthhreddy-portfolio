import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:jaswanthreddy0304@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">Let's build something intelligent together.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new opportunities, collaborations in AI & Data Science,
              or just connecting over shared interests in technology.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "jaswanthreddy0304@gmail.com", href: "mailto:jaswanthreddy0304@gmail.com" },
                { icon: Phone, label: "+91 8919500070", href: "tel:+918919500070" },
                { icon: MapPin, label: "Kovur, Nellore, Andhra Pradesh, India", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/jaswanth-reddy-bandi-899525289/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow inline-flex items-center gap-2 mt-4"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="glass-card-glow p-8 space-y-5"
          >
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="What would you like to discuss?"
              />
            </div>
            <button type="submit" className="btn-primary-glow w-full inline-flex items-center justify-center gap-2">
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
