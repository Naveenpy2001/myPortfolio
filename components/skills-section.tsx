"use client";

import { motion } from "framer-motion";
import { AnimatedSectionHeader } from "@/components/animated-section-header";
import {
  Code2,
  Palette,
  Layout,
  Smartphone,
  Server,
  Database,
  Cloud,
  GitBranch,
  Terminal,
  Layers,
  Cpu,
  Globe,
  FileCode,
  Braces,
  Box,
  Settings,
  HardDrive,
  Workflow,
  MonitorSmartphone,
  Figma,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React.js", icon: Code2 },
      { name: "TypeScript", icon: FileCode },
      { name: "JavaScript (ES6+)", icon: Braces },
      { name: "HTML5", icon: Globe },
      { name: "CSS3", icon: Palette },
      { name: "Tailwind CSS", icon: Layers },
      { name: "Material UI", icon: Box },
      { name: "Redux", icon: Workflow },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Python", icon: Terminal },
      { name: "Django", icon: Server },
      { name: "Django REST Framework", icon: Cpu },
      { name: "FastAPI", icon: Workflow },
      { name: "RESTful APIs", icon: Globe },
      { name: "Microservices", icon: Layers },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "SQLite", icon: HardDrive },
      { name: "Redis", icon: Cpu },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    skills: [
      { name: "AWS EC2", icon: Cloud },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "Ubuntu", icon: Terminal },
      { name: "Celery", icon: Workflow },
      { name: "Postman", icon: Settings },
      { name: "VS Code", icon: MonitorSmartphone },
      { name: "Figma", icon: Figma },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0 },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSectionHeader label="Expertise" title="Technical Skills" />

        <div className="mt-16 md:mt-20 grid gap-12 md:gap-16">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <CategoryIcon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3 md:gap-4"
                >
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.span
                        key={skill.name}
                        variants={item}
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="group px-4 py-3 md:px-5 md:py-4 bg-secondary/80 backdrop-blur-sm text-secondary-foreground rounded-xl text-base md:text-lg font-medium border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default flex items-center gap-2"
                      >
                        <SkillIcon className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Years Experience", value: "2+" },
            { label: "Projects Completed", value: "10+" },
            { label: "Technologies", value: "15+" },
            { label: "Lines of Code", value: "50K+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
