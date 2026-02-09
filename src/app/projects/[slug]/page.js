"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const projectsData = {
    "workout-tracker": {
        title: "Workout Tracker",
        description: "A comprehensive fitness tracking application to monitor workouts, track progress, and achieve fitness goals.",
        fullDescription: "This is a full-stack workout tracking mobile application built with React Native and Expo. The app allows users to log their exercise sets with reps and weight, view their workout history, and browse a comprehensive exercise database. It features user authentication, real-time data synchronization, and an intuitive interface for tracking fitness progress. The backend leverages a GraphQL API powered by StepZen that aggregates data from multiple sources: a MongoDB Atlas database for storing user workout data and the API Ninjas exercise database for exercise information. Users can explore exercises filtered by muscle group and equipment type, view detailed instructions, and maintain a personal workout log tied to their username.",
        technologies: ["JavaScript", "GraphQL", "React Native", "Expo Router",  "StepZen", "MongoDB Atlas"],
        githubUrl: "https://github.com/Jonathan-Liang/workout-tracker",
        liveUrl: null,
    },
    "missed-flight-risk": {
        title: "Missed Flight Connection Risk",
        description: "Machine learning model to predict and analyze the risk of missed flight connections based on historical data and flight patterns.",
        fullDescription: "In this project, we built a system that estimates the chance that a traveler will miss a connecting flight. We used public U.S. flight data from the Bureau of Transportation Statistics, which includes things like departure and arrival times, the airline, and the airports involved. Instead of only predicting \"delayed\" or \"not delayed,\" the goal was to give a probability that can help people choose safer itineraries and help airlines plan for rebooking and routing costs. We cleaned the raw flight records, matched flights into realistic two-leg connections based on layover time, and then compared three different prediction models. All three models ended up with similar results, which suggests the main limit was the data itself. Important real-world factors like weather, airport congestion, and late incoming aircraft were not included, so the system mostly learned weaker patterns like time of day, season, and which airports were involved.",
        technologies: ["Python", "pandas", "NumPy", "Matplotlib", "Seaborn", "scikit-learn", "XGBoost", "Feature Engineering", "Supervised Learning", "Binary Classification", "Class Imbalance Handling", "Logistic Regression", "Tree Ensembles", "Gradient Boosting", "Categorical Encoding"],
        githubUrl: "https://github.gatech.edu/pages/jliang355/cs4641/",
        reportUrl: "/images/projects/Missed_Flight_Connection_Risk/Missed_Flight_Connection_Risk_Report.pdf",
        liveUrl: null,
    },
    "pendulum-simulation": {
        title: "Pendulum Simulation",
        description: "Physics simulation demonstrating chaotic motion and control systems for single and double pendulum configurations with real-time visualization.",
        fullDescription: "This project is a set of physics simulations for three classic systems. A double pendulum. A spring pendulum. And an inverted pendulum. I started from scratch and wrote out the math myself instead of using a built in model. For each system, I chose the variables to describe the motion. I wrote the forces and energy relationships. Then I derived the differential equations that control how the system moves over time.\n\nAfter that, I implemented the equations in MATLAB. I used numerical solving to simulate the motion step by step. Then I plotted the results and created animations so the motion is easy to see. I also built the same systems in Simulink using block diagrams. This made it easy to change parameters and starting conditions and immediately see the effect in the simulation.",
        technologies: ["Classical Mechanics", "Differential Equations", "Dynamics Modeling", "Deriving Equations of Motion", "Numerical Methods", "ODE Solvers", "MATLAB", "Simulink", "Block Diagram Modeling", "Parameter Sweeps", "Data Visualization", "Animation / Simulation Rendering"],
        githubUrl: "https://github.com/Jonathan-Liang",
        liveUrl: null,
        videos: [
            {
                title: "Double Pendulum Simulation",
                url: "/images/projects/Pendulum_Simulation/double_pendulum.mp4", 
                type: "video"
            },
            {
                title: "Spring Pendulum Simulation",
                url: "/images/projects/Pendulum_Simulation/spring_pendulum.mp4",
                type: "video"
            },
            {
                title: "Inverted Pendulum Control Simulation",
                url: "/images/projects/Pendulum_Simulation/inverted_pendulum.mp4",
                type: "video"
            }
        ]
    },
    "agile-semantic-communication": {
        title: "Agile Semantic Communication",
        description: "Advanced communication system leveraging semantic understanding for efficient and adaptive information transfer.",
        fullDescription: "I am a researcher in Georgia Tech's Agile Communications Architecture group. I work on machine learning for wireless networking. The goal is to send images over wireless links using less bandwidth, while keeping the important meaning of the scene.\n\nI built a generative compression pipeline in PyTorch using Stable Diffusion. It lets us transmit a much smaller representation of an image and then reconstruct it on the other side. I use OpenAI CLIP to check that the reconstructed image still matches the original image in meaning. I also prototype software-defined radio systems in GNU Radio. This helps me study how interference and bit errors affect real transmissions, and how ML can make them more resilient.\n\nRight now, I am focused on DiT-JSCC (Diffusion Transformer Joint Source-Channel Coding). We moved away from converting images into short text captions, since captions can miss details. Instead, we send two streams of information. A semantic stream uses DINOv2 to capture the main objects and layout. A detail stream uses SwinJSCC to preserve textures and edges. The diffusion decoder uses both to rebuild a clear and faithful image at low bandwidth.",
        technologies: ["Python", "PyTorch", "Stable Diffusion", "Diffusion Transformers", "OpenAI CLIP", "DINOv2", "SwinJSCC", "GNU Radio", "Software-Defined Radio", "Wireless Communications", "Joint Source-Channel Coding", "Semantic Communication", "Image Compression", "Generative AI", "Computer Vision", "Deep Learning"],
        githubUrl: "https://github.com/Jonathan-Liang",
        liveUrl: null,
    }
};

export default function ProjectPage() {
    const params = useParams();
    const project = projectsData[params.slug];

    if (!project) {
        return (
            <main className="flex min-h-screen flex-col bg-[#121212] px-12 py-24">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-white mb-8">Project Not Found</h1>
                    <Link href="/#projects" className="text-blue-500 hover:text-blue-400">
                        ← Back to Projects
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <motion.div 
                className="container mt-24 mx-auto px-4 md:px-12 py-8 max-w-7xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Back Button */}
                <Link 
                    href="/#projects" 
                    className="inline-block mb-8 text-[#ADB7BE] hover:text-white transition-colors duration-200"
                >
                    ← Back to Projects
                </Link>

                {/* Project Header */}
                <div className="mb-12 w-full overflow-hidden">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4 break-words leading-normal pb-2">
                        {project.title}
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-[#ADB7BE] break-words">{project.description}</p>
                </div>

                {/* About This Project & Skills */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* About This Project */}
                    <div className="md:col-span-2">
                        <div className="bg-[#181818] rounded-xl p-8 border border-[#33353F]">
                            <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
                            <p className="text-[#ADB7BE] text-lg leading-relaxed">
                                {project.fullDescription}
                            </p>
                        </div>
                    </div>

                    {/* Skills & Links Sidebar */}
                    <div className="space-y-6">
                        {/* Skills */}
                        <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
                            <h3 className="text-xl font-bold text-white mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <span 
                                        key={idx}
                                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-500/30 rounded-full text-sm text-white"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
                            <h3 className="text-xl font-bold text-white mb-4">Links</h3>
                            <div className="space-y-3">
                                {project.githubUrl && (
                                    <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full px-4 py-2 bg-[#121212] border border-[#33353F] rounded-lg text-white hover:border-blue-500 transition-all duration-200 text-center"
                                    >
                                        View on GitHub
                                    </a>
                                )}
                                {project.reportUrl && (
                                    <a 
                                        href={project.reportUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full px-4 py-2 bg-[#121212] border border-[#33353F] rounded-lg text-white hover:border-blue-500 transition-all duration-200 text-center"
                                    >
                                        View Report (PDF)
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a 
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg text-white hover:from-blue-400 hover:to-cyan-300 transition-all duration-200 text-center"
                                    >
                                        View Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Demonstrations */}
                {project.videos && project.videos.length > 0 && (
                    <div className="bg-[#181818] rounded-xl p-8 border border-[#33353F] mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">Demonstrations</h2>
                        <div className="space-y-6">
                            {project.videos.map((video, idx) => (
                                <div key={idx}>
                                    <h3 className="text-lg font-semibold text-white mb-3">{video.title}</h3>
                                    {video.type === "youtube" ? (
                                        <div className="aspect-video rounded-lg overflow-hidden border border-[#33353F]">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={video.url}
                                                title={video.title}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <div className="rounded-lg overflow-hidden border border-[#33353F]">
                                            <video
                                                controls
                                                className="w-full"
                                            >
                                                <source src={video.url} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>
        </main>
    );
}
