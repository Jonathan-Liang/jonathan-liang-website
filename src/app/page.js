"use client";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-nord-0">
      <Navbar />
      <motion.div 
        className="container mt-24 mx-auto px-12 py-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </motion.div>
      <Footer />
    </main>
  );
}
