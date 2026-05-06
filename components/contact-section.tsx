"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSectionHeader } from "@/components/animated-section-header";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "naveenpoolakuntla09@gmail.com",
    href: "mailto:naveenpoolakuntla09@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9676238249",
    href: "tel:+919676238249",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Naveenpy2001",
    href: "https://github.com/Naveenpy2001",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Naveen Kumar",
    href: "https://linkedin.com/in/naveen-kumar",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <AnimatedSectionHeader
            label="Contact"
            title="Let's Work Together"
            className="flex flex-col items-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            I&apos;m currently open to new opportunities and exciting projects.
            Feel free to reach out!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 md:mt-20 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group flex items-center gap-4 p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 p-3 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                <contact.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="relative z-10 flex-1">
                <p className="text-sm text-muted-foreground">{contact.label}</p>
                <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {contact.value}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-2 text-muted-foreground"
        >
          <MapPin className="w-5 h-5 text-primary" />
          <span className="text-lg">Hyderabad, Telangana, India</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button
            asChild
            size="lg"
            className="text-lg px-10 py-6 bg-primary text-primary-foreground hover:bg-primary/90 group relative overflow-hidden"
          >
            <a href="mailto:naveenpoolakuntla09@gmail.com">
              <span className="relative z-10 flex items-center gap-2">
                <Send className="w-5 h-5" />
                Send Me a Message
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
