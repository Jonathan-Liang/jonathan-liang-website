"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "../../data/projectsData";

export default function ProjectPage() {
    const params = useParams();
    const project = projectsData.find((p) => p.slug === params.slug);

    if (!project) {
        return (
            <main className="flex min-h-screen flex-col bg-nord-0 px-12 py-24">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-nord-6 mb-8">Project Not Found</h1>
                    <Link href="/#projects" className="text-blue-500 hover:text-blue-400">
                        ← Back to Projects
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="flex min-h-screen flex-col bg-nord-0">
            <motion.div 
                className="container mt-24 mx-auto px-4 md:px-12 py-8 max-w-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-12 border-b border-nord-3 pb-8">
                    <Link 
                        href="/#projects"
                        className="text-primary-500 hover:text-primary-400 mb-8 inline-block transition-colors"
                    >
                        ← Back to Projects
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold text-nord-6 mb-6">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-4 items-center text-nord-4">
                        <div className="flex gap-4">
                            {project.githubUrl && (
                                <a 
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-nord-3 hover:bg-nord-4 text-nord-6 px-6 py-2 rounded-full transition-colors flex items-center gap-2 font-medium"
                                >
                                    View Source
                                </a>
                            )}
                            {project.liveUrl && (
                                <a 
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary-500 hover:bg-primary-400 text-nord-0 px-6 py-2 rounded-full transition-colors flex items-center gap-2 font-bold shadow-lg shadow-primary-500/20"
                                >
                                    Live Demo
                                </a>
                            )}
                            {project.reportUrl && (
                                <a 
                                    href={project.reportUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-nord-3 hover:bg-nord-4 text-nord-6 px-6 py-2 rounded-full transition-colors flex items-center gap-2 font-medium"
                                >
                                    View Final Report
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-nord-1 rounded-2xl p-8 border border-nord-3 shadow-xl">
                            <h2 className="text-2xl font-bold text-nord-8 mb-6">Overview</h2>
                            <div className="prose prose-invert max-w-none text-nord-4 leading-relaxed whitespace-pre-wrap text-lg">
                                {project.fullDescription}
                            </div>
                        </div>

                        {project.videos && (
                            <div className="space-y-8">
                                {project.videos.map((video, index) => (
                                    <div key={index} className="bg-nord-1 rounded-2xl p-8 border border-nord-3 shadow-xl">
                                        <h3 className="text-2xl font-bold text-nord-8 mb-6">{video.title}</h3>
                                        <div className="relative aspect-video rounded-xl overflow-hidden bg-nord-0 border border-nord-3">
                                            <video 
                                                src={video.url}
                                                controls
                                                className="absolute inset-0 w-full h-full object-contain"
                                            >
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="space-y-8">
                        {project.technologies && (
                            <div className="bg-nord-1 rounded-2xl p-8 border border-nord-3 shadow-xl sticky top-28">
                                <h2 className="text-2xl font-bold text-nord-8 mb-6">Technologies</h2>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech, index) => (
                                        <span 
                                            key={index}
                                            className="bg-nord-2 border border-nord-3 text-nord-6 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
