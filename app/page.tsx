"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ThemeProvider, ThemeCustomizer } from "@/components/theme-customizer";
import { AnimatedBackground } from "@/components/animated-background";
import { LenisProvider } from "@/components/lenis-provider";
import { LoadingWrapper } from "@/components/loading-screen";

export default function Home() {
  return (
    <ThemeProvider>
      <LoadingWrapper>
        <LenisProvider>
          <AnimatedBackground />
          <main className="relative min-h-screen z-10">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
            <ThemeCustomizer />
          </main>
        </LenisProvider>
      </LoadingWrapper>
    </ThemeProvider>
  );
}
