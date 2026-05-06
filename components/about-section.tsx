"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";
import myImage from "@/assets/naveen.png"; 

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Colored accent circle behind image */}
              <motion.div
                className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary/60 to-primary/20 rounded-full blur-sm"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              
              {/* Main image container */}
              <motion.div
                className="relative rounded-2xl overflow-hidden border-2 border-border/50 shadow-2xl shadow-primary/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={myImage}
                  alt="Naveen Poolakuntla"
                  className="w-full aspect-[4/5] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">2+</p>
                    <p className="text-sm text-muted-foreground">Years Exp.</p>
                  </div>
                </div>
              </motion.div>

              {/* Corner decoration */}
              <motion.div
                className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-primary/40 rounded-tr-2xl"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Section label */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                About Me
              </span>
            </motion.div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Hello, I am</span>
              <br />
              <span className="text-primary font-serif italic">Naveen Poolakuntla</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A passionate <span className="text-foreground font-medium">Full Stack Developer</span> from 
              Hyderabad, India. I specialize in building modern, responsive web applications using 
              <span className="text-primary font-semibold"> React.js</span>, 
              <span className="text-primary font-semibold"> Django</span>, and 
              <span className="text-primary font-semibold"> TypeScript</span>. 
              I love turning complex problems into <span className="font-serif italic text-foreground">simple, beautiful</span> solutions.
            </p>

            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: MapPin, label: "Location", value: "Hyderabad, India" },
                { icon: Calendar, label: "Experience", value: "2+ Years" },
                { icon: GraduationCap, label: "Education", value: "BSC Graduate" },
                { icon: Briefcase, label: "Current", value: "The Cloud Soft" },
              ].map(({ icon: Icon, label, value }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/50"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech stack badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <p className="text-sm text-muted-foreground mb-3 font-serif italic">Technologies I work with</p>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Django", "FastAPI" , "TypeScript", "Python", "PostgreSQL", "Tailwind CSS", "REST APIs","Material UI"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm bg-secondary/50 text-foreground rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
