"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Workout Tracker",
        description: "A comprehensive fitness tracking application to monitor workouts, track progress, and achieve fitness goals.",
        image: "/images/projects/Workout_Tracker/workout_tracker_thumbnail.png",
        tag: ["All", "Mobile"],
        slug: "workout-tracker",
        previewUrl: "/projects/workout-tracker",
    },
    {
        id: 2,
        title: "Missed Flight Connection Risk",
        description: "Machine learning model to predict and analyze the risk of missed flight connections based on historical data and flight patterns.",
        image: "/images/projects/Missed_Flight_Connection_Risk/flight_connection_thumbnail.png",
        tag: ["All", "Machine Learning"],
        slug: "missed-flight-risk",
        previewUrl: "/projects/missed-flight-risk",
    },
    {
        id: 3,
        title: "Pendulum Simulation",
        description: "Physics simulation demonstrating chaotic motion and control systems for single and double pendulum configurations with real-time visualization.",
        image: "/images/projects/Pendulum_Simulation/pendulum_thumbnail.png",
        tag: ["All"],
        slug: "pendulum-simulation",
        previewUrl: "/projects/pendulum-simulation",
    },
    {
        id: 4,
        title: "Agile Semantic Communication",
        description: "Advanced communication system leveraging semantic understanding for efficient and adaptive information transfer.",
        image: "/images/projects/Agile_Semantic_Communication/semantic_comm_thumbnail.png",
        tag: ["All", "Machine Learning"],
        slug: "agile-semantic-communication",
        previewUrl: "/projects/agile-semantic-communication",
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
              className={`relative overflow-hidden px-[4px] py-[4px] rounded-full transition-all duration-300 group ${
                tag === category
                  ? "bg-gradient-to-r from-blue-800 via-blue-600 to-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                  : "bg-[#33353F] hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-600 hover:to-blue-300"
              }`}
            >
              <div className={`relative rounded-full px-8 py-4 overflow-visible ${
                tag === category ? "bg-[#121212]" : "bg-[#181818]"
              }`}>
                <span className={`absolute inset-[-2px] rounded-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-300 transition-transform duration-700 ease-out ${
                  tag === category ? "translate-x-0" : "translate-x-[-110%] group-hover:translate-x-0"
                }`}></span>
                <span className={`relative z-10 text-lg font-semibold transition-all duration-150 ${
                  tag === category ? "text-white font-bold" : "text-[#ADB7BE] group-hover:text-white group-hover:font-bold"
                }`}>
                  {category}
                </span>
              </div>
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