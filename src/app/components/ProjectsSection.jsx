"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "Project 1 Description",
        image: "/images/projects/dummy.png",
        tag: ["All", "Machine Learning"],
        gitUrl: " ",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Project 2",
        description: "Project 2 Description",
        image: "/images/projects/dummy.png",
        tag: ["All", "Machine Learning"], 
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Project 3",
        description: "Project 3 Description",
        image: "/images/projects/dummy.png",
        tag: ["All", "Machine Learning"],
        gitUrl: "/",
        previewUrl: "/",
    }
]

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
        <h2 className="text-left text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="flex flex-wrap gap-4 mb-12">
          {["All", "Mobile", "Machine Learning"].map((category) => (
            <button
              key={category}
              onClick={() => handleTagChange(category)}
              className={`px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                tag === category
                  ? "bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 text-white shadow-lg transform scale-105"
                  : "bg-[#181818] text-[#ADB7BE] hover:bg-[#222222] border border-[#33353F]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default ProjectsSection;