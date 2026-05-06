"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Django Developer",
];

export function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[1.3em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 60, opacity: 0, rotateX: -45 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -60, opacity: 0, rotateX: 45 }}
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            rotateX: { duration: 0.4 },
          }}
          className="absolute left-0 whitespace-nowrap font-serif italic"
        >
          <span className="relative text-primary">
            {roles[currentIndex]}
            <motion.span
              className="absolute -bottom-1 left-0 h-[3px] bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
