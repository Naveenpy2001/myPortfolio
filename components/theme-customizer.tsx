"use client";

import { useState, createContext, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paintbrush, X, Type, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type ThemeColor = {
  name: string;
  primary: string;
  accent: string;
  ring: string;
  preview: string;
};

type FontStyle = {
  name: string;
  className: string;
  variable: string;
  preview: string;
};

const themeColors: ThemeColor[] = [
  { name: "Emerald",    primary: "oklch(0.72 0.19 145)", accent: "oklch(0.72 0.19 145)", ring: "oklch(0.72 0.19 145)", preview: "#22c55e" },
  { name: "Iris",       primary: "oklch(0.62 0.22 265)", accent: "oklch(0.62 0.22 265)", ring: "oklch(0.62 0.22 265)", preview: "#6366f1" },
  { name: "Violet",     primary: "oklch(0.60 0.28 290)", accent: "oklch(0.60 0.28 290)", ring: "oklch(0.60 0.28 290)", preview: "#8b5cf6" },
  { name: "Fuchsia",    primary: "oklch(0.65 0.30 325)", accent: "oklch(0.65 0.30 325)", ring: "oklch(0.65 0.30 325)", preview: "#d946ef" },
  { name: "Rose",       primary: "oklch(0.65 0.25 350)", accent: "oklch(0.65 0.25 350)", ring: "oklch(0.65 0.25 350)", preview: "#f43f5e" },
  { name: "Crimson",    primary: "oklch(0.58 0.26 15)",  accent: "oklch(0.58 0.26 15)",  ring: "oklch(0.58 0.26 15)",  preview: "#e11d48" },
  { name: "Tangerine",  primary: "oklch(0.72 0.20 45)",  accent: "oklch(0.72 0.20 45)",  ring: "oklch(0.72 0.20 45)",  preview: "#f97316" },
  { name: "Teal",       primary: "oklch(0.70 0.16 180)", accent: "oklch(0.70 0.16 180)", ring: "oklch(0.70 0.16 180)", preview: "#14b8a6" },
  { name: "Cyan",       primary: "oklch(0.75 0.15 195)", accent: "oklch(0.75 0.15 195)", ring: "oklch(0.75 0.15 195)", preview: "#06b6d4" },
  { name: "Sky",        primary: "oklch(0.72 0.17 215)", accent: "oklch(0.72 0.17 215)", ring: "oklch(0.72 0.17 215)", preview: "#0ea5e9" },
  { name: "Azure",      primary: "oklch(0.65 0.22 250)", accent: "oklch(0.65 0.22 250)", ring: "oklch(0.65 0.22 250)", preview: "#3b82f6" },
];

const fontStyles: FontStyle[] = [
  { name: "Inter",              className: "font-sans",         variable: "Inter",                preview: "Clean & Modern"           },
  { name: "Playfair Display",   className: "font-serif",        variable: "Playfair Display",     preview: "Elegant & Editorial"      },
  { name: "Sora",               className: "font-sora",         variable: "Sora",                 preview: "Geometric & Friendly"     },
  { name: "DM Serif Display",   className: "font-dm-serif",     variable: "DM Serif Display",     preview: "High-contrast Serif"      },

];

type ThemeContextType = {
  currentColor: ThemeColor;
  currentFont: FontStyle;
  setColor: (color: ThemeColor) => void;
  setFont: (font: FontStyle) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentColor, setCurrentColor] = useState<ThemeColor>(themeColors[0]);
  const [currentFont, setCurrentFont] = useState<FontStyle>(fontStyles[0]);

  useEffect(() => {
    document.documentElement.style.setProperty("--primary", currentColor.primary);
    document.documentElement.style.setProperty("--accent", currentColor.accent);
    document.documentElement.style.setProperty("--ring", currentColor.ring);
    document.documentElement.style.setProperty("--sidebar-primary", currentColor.primary);
    document.documentElement.style.setProperty("--sidebar-ring", currentColor.ring);
  }, [currentColor]);

  return (
    <ThemeContext.Provider
      value={{
        currentColor,
        currentFont,
        setColor: setCurrentColor,
        setFont: setCurrentFont,
      }}
    >
      <div className={currentFont.className}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentColor, currentFont, setColor, setFont } = useTheme();

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 flex items-center justify-center hover:scale-110 transition-transform"
        whileHover={{ rotate: 15 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Customize theme"
      >
        <Paintbrush className="w-6 h-6" />
      </motion.button>
      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            />

            {/* Panel Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-card border-l border-border p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold font-serif italic">Customize</h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Accent Color</h3>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {themeColors.map((color) => (
                    <motion.button
                      key={color.name}
                      onClick={() => setColor(color)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative flex flex-col items-center gap-2 p-2 rounded-xl border-2 transition-colors ${
                        currentColor.name === color.name
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-muted-foreground"
                      }`}
                      title={color.name}
                    >
                      <div
                        className="w-10 h-10 rounded-full shadow-lg"
                        style={{ backgroundColor: color.preview }}
                      />
                      <span className="text-[10px] font-medium truncate w-full text-center">{color.name}</span>
                      {currentColor.name === color.name && (
                        <motion.div
                          layoutId="colorCheck"
                          className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary flex items-center justify-center"
                        >
                          <svg
                            className="w-2.5 h-2.5 text-primary-foreground"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Font Selection */}
              <div style={{overflow: "scroll"}}>
                <div className="flex items-center gap-2 mb-4">
                  <Type className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Font Style</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {fontStyles.map((font) => (
                    <motion.button
                      key={font.name}
                      onClick={() => setFont(font)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative flex items-center justify-between p-4 rounded-xl border-2 transition-colors ${
                        currentFont.name === font.name
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      <div className="flex flex-col items-start">
                        <span className={`text-lg font-bold ${font.className}`}>
                          {font.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {font.preview}
                        </span>
                      </div>
                      {currentFont.name === font.name && (
                        <motion.div
                          layoutId="fontCheck"
                          className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                        >
                          <svg
                            className="w-4 h-4 text-primary-foreground"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Preview Text */}
              <div className="mt-8 p-4 rounded-xl bg-secondary/50 border border-border">
                <p className="text-sm text-muted-foreground mb-2 font-serif italic">Preview</p>
                <p className="text-2xl font-bold text-primary font-serif">Naveen Poolakuntla</p>
                <p className="text-muted-foreground italic">Full Stack Developer</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
