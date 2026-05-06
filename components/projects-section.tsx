"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Zap, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSectionHeader } from "@/components/animated-section-header";

const projects = [
  {
    title: "Hospital Management System",
    description:
      "Full-stack HMS with React-Vite frontend and Django REST Framework backend featuring JWT authentication, role-based access for Admin and Doctors, and secure patient record management.",
    highlights: [
      "Role-based access control",
      "23% faster response time",
      "AWS EC2 deployment",
    ],
    tech: ["React", "Vite", "Django REST", "JWT", "AWS EC2"],
    link: "https://hms.tsaritservices.com/",
    icon: Sparkles,
  },
  {
    title: "AI Chatbot Demo",
    description:
      "Full-stack AI chatbot using React-Vite and FastAPI, integrated with GROQ API and LLama3-70B model for natural language conversations with real-time user interaction.",
    highlights: [
      "LLama3-70B integration",
      "Real-time chat",
      "Dynamic prompt formatting",
    ],
    tech: ["React", "Vite", "FastAPI", "GROQ", "LLama3"],
    link: "https://rynaty.tsaritservices.com",
    icon: Zap,
  },
  {
    title: "Internship Project Platform",
    description:
      "Full-stack web application with React.js frontend and Django REST Framework backend featuring authentication, routing, and real-time data updates.",
    highlights: [
      "Reusable component architecture",
      "Real-time CRUD operations",
      "Production-ready deployment",
    ],
    tech: ["React.js", "Django REST", "Axios", "AWS EC2"],
    link: "https://internship.tsaritservices.com",
    icon: Code2,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSectionHeader label="Portfolio" title="Featured Projects" />

        <div className="mt-16 md:mt-20 grid gap-8 md:gap-12">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group relative p-6 md:p-10 bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <ProjectIcon className="w-6 h-6" />
                      </motion.div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                      {project.description}
                    </p>

                    <ul className="mt-6 space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 bg-secondary/80 text-secondary-foreground text-sm rounded-lg font-medium border border-border hover:border-primary/30 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 lg:flex-col">
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="gap-2 border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 text-lg px-8 py-6 hover:bg-primary/5 hover:border-primary transition-all"
          >
            <a
              href="https://github.com/Naveenpy2001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
