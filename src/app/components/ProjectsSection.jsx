"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { projectsData } from "../data/projectsData";

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  
    return (
      <section id="projects">
        <h2 className="text-left text-4xl font-bold text-nord-6 mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="flex flex-wrap gap-4 mb-12">
          {["All", "Mobile", "Machine Learning"].map((category) => (
             <button 
             key={category}
             onClick={() => handleTagChange(category)}
             className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 md:text-base ${
               tag === category
                 ? "bg-primary-500 text-nord-0 shadow-[0_0_20px_rgba(136,192,208,0.4)] border border-primary-400"
                 : "bg-nord-1 text-nord-4 border border-nord-3 hover:border-nord-4 hover:text-nord-6"
             }`}
           >
             {category}
           </button>
          ))}
        </div>
        <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                gitUrl={project.githubUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default ProjectsSection;
