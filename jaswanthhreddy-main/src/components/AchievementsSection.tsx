import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Camera, Palette, Globe } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Shaastra 2025, IIT Madras",
    description:
      "Contributed as Marketing Intern, driving nationwide event promotion and digital outreach, leading to record participation of over 70,000 attendees.",
  },
  {
    icon: Camera,
    title: "Photography Contest Winner",
    description:
      "Won 1st place in college photography contests, showcasing creative storytelling through visual media.",
  },
  {
    icon: Palette,
    title: "Poster Design Competition",
    description:
      "Secured 2nd place in poster-making competition, demonstrating strong design and visual communication skills.",
  },
  {
    icon: Globe,
    title: "Event Designer",
    description:
      "Designed invitations and posters for multiple national-level seminars and academic events, supporting branding and promotion.",
  },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Telugu", level: "Native" },
  { name: "Hindi", level: "Fluent" },
  { name: "Tamil", level: "Fluent" },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Achievements & Activities</h2>
          <p className="section-subheading">Beyond academics</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card-glow p-6 text-center transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display font-semibold text-sm text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="font-display font-semibold text-xl text-foreground mb-6">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="glass-card px-6 py-3 flex items-center gap-3 transition-all duration-300 hover:scale-105"
              >
                <span className="font-medium text-foreground text-sm">{lang.name}</span>
                <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
