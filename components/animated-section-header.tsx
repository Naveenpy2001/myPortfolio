"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export function AnimatedSectionHeader({
  label,
  title,
  className = "",
}: AnimatedSectionHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        className="inline-block"
        initial={{ opacity: 0, y: 40, rotateX: 90 }}
        animate={hasAnimated ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.03,
          ease: [0.215, 0.61, 0.355, 1],
        }}
        style={{ transformOrigin: "center bottom" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <div ref={containerRef} className={className}>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-primary text-lg font-medium inline-flex items-center gap-2 font-serif italic"
      >
        <motion.span
          className="w-8 h-[2px] bg-primary"
          initial={{ width: 0 }}
          animate={isInView ? { width: 32 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        />
        {label}
      </motion.span>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-3 tracking-tight overflow-hidden">
        {splitText(title)}
      </h2>
      <motion.div
        className="h-1 bg-gradient-to-r from-primary to-transparent mt-4 rounded-full"
        initial={{ width: 0 }}
        animate={isInView ? { width: "40%" } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </div>
  );
}
