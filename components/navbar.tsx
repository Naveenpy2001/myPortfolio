"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        setIsScrolled(true);
        if (currentScrollY < lastScrollY) {
          setScrollDirection("up");
        } else {
          setScrollDirection("down");
        }
      } else {
        setIsScrolled(false);
        setScrollDirection("up");
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isCompact = isScrolled && scrollDirection === "up";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ 
          y: scrollDirection === "down" && isScrolled ? -100 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed z-50 transition-all duration-500 ${
          isCompact
            ? "top-4 left-1/2 -translate-x-1/2 w-auto"
            : "top-0 left-0 right-0"
        }`}
      >
        <motion.nav
          layout
          className={`flex items-center justify-between transition-all duration-500 ${
            isCompact
              ? "bg-card/90 backdrop-blur-xl border border-border rounded-full px-2 py-2 shadow-xl shadow-background/50"
              : "max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-20 bg-transparent"
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#"
            layout
            className={`font-bold text-foreground hover:text-primary transition-colors ${
              isCompact ? "text-lg px-4" : "text-2xl"
            }`}
          >
            NP<span className="text-primary">.</span>
          </motion.a>

          {/* Desktop Nav - Full */}
          <AnimatePresence mode="wait">
            {!isCompact ? (
              <motion.div
                key="full-nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="hidden md:flex items-center gap-8"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="compact-nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="hidden md:flex items-center gap-1"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all font-medium px-4 py-2 rounded-full text-sm"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  asChild
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full ml-2"
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isCompact ? "h-10 w-10" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-bold text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full mt-4 bg-primary text-primary-foreground"
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </nav>

            {/* Mobile menu decorative elements */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-20 right-10 w-32 h-32 border border-primary/20 rounded-full"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute bottom-32 right-20 w-16 h-16 bg-primary/10 rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
