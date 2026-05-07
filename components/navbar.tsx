"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Header ── */}
      <header
        className={cn(
          "fixed top-4 inset-x-0 z-50 flex justify-center transition-all duration-500",
          isScrolled ? "px-6 sm:px-8 pt-3 pb-3" : "px-0 pt-0 pb-0"
        )}
      >
        <nav
          className={cn(
          "flex items-center w-full max-w-4xl px-3 py-2.5 rounded-full",
          "border transition-all duration-500 ",
          isScrolled
            ? "bg-background/60 backdrop-blur-2xl border-border/40 shadow-2xl shadow-primary/10 bg-white/10 border-white/20"
            : "max-w-[1340px]  backdrop-blur-md border-white/0"
        )}
        >
          {/* Logo */}
          <a href="#"
            className={`font-bold text-foreground text-${isScrolled ? "2xl" : "4xl"}   px-4 py-1.5 shrink-0 tracking-tight`}
          >
            NP<span className="text-primary">.</span>
          </a>  

          {/* Desktop nav links — right-aligned */}
          <div className="hidden md:flex items-center gap-1 ml-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all font-medium px-4 py-2 rounded-full text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center gap-2 ml-3 shrink-0" >

            <Button size="sm"
              className="rounded-full bg-foreground text-background hover:bg-foreground/90 text-sm"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-3.5 h-3.5 mr-1.5 " />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <Button variant="ghost" size="icon"
            className="md:hidden ml-auto rounded-full w-10 h-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen
              ? <X className="w-5 h-5" />
              : <Menu className="w-5 h-5" />
            }
          </Button>
        </nav>
      </header>

      {/* ── Mobile fullscreen menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-8 md:hidden flex flex-col"
          >
            {/* Nav links */}
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl xs:text-5xl font-bold text-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Mobile action buttons — always visible */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="flex flex-col gap-3 mt-10"
            >

              <Button size="lg"
                className="rounded-full w-full text-base h-14 bg-foreground text-background hover:bg-foreground/90"
                asChild
              >
                <a href="/resume.pdf" target="_blank">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
