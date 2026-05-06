"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Calendar, Briefcase } from "lucide-react";
import { AnimatedSectionHeader } from "@/components/animated-section-header";

const experiences = [
  {
    title: "Junior Software Developer",
    company: "The Cloud Soft",
    type: "Full-time",
    period: "Jan 2026 - Present",
    duration: "4 mos",
    location: "Hyderabad, Telangana, India",
    workType: "On-site",
    description: [
      "Developing and maintaining web applications using React.js and TypeScript",
      "Collaborating with cross-functional teams to deliver high-quality software solutions",
      "Implementing responsive designs and optimizing application performance",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "TSAR IT PRIVATE LIMITED",
    type: "Full-time",
    period: "Jan 2025 - Mar 2026",
    duration: "1 yr 3 mos",
    location: "India",
    workType: "Remote",
    description: [
      "Developed and deployed 4+ scalable web applications using React.js and Django",
      "Designed and consumed REST APIs using Django REST Framework",
      "Ensured mobile responsiveness and UI performance optimization",
      "Managed cloud deployment using AWS EC2 and Ubuntu for production",
      "Used Git and GitHub for code collaboration and version tracking",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSectionHeader label="Career" title="Experience" />

        <div className="mt-16 md:mt-20 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Timeline line with glow */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary to-primary/50 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-shadow duration-500">
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="pl-8 md:pl-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div>
                    <motion.h3
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <span className="font-serif italic">{exp.title}</span>
                    </motion.h3>
                    <div className="flex items-center gap-2 mt-4 flex-wrap">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        <span className="text-lg md:text-xl text-muted-foreground font-medium">
                          {exp.company}
                        </span>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground hidden sm:block" />
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground text-sm">{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 text-muted-foreground lg:text-right">
                    <div className="flex items-center gap-2 lg:justify-end flex-wrap">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm md:text-base">{exp.period}</span>
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs md:text-sm rounded-full font-medium">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 lg:justify-end flex-wrap">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm md:text-base">{exp.location}</span>
                      <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs md:text-sm rounded-full">
                        {exp.workType}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="mt-8 space-y-4">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-4 text-base md:text-lg text-muted-foreground group/item hover:text-foreground transition-colors"
                    >
                      <motion.span
                        className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
