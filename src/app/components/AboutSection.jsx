"use client";
import React from 'react';
import { motion } from "framer-motion";
import { TAB_Data } from './aboutData';
import EducationCard from './EducationCard';

const AboutSection = () => {
    const experienceData = TAB_Data.find(t => t.id === "experience");
    const skillsData = TAB_Data.find(t => t.id === "skills");
    
    return (
        <section id="about" className="text-white py-16">
            {/* Education Section - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-300">Education</span>
                    </h2>
                    <div className="space-y-6">
                        <EducationCard
                            title="Georgia Institute of Technology"
                            degree="Bachelor of Science in Computer Science"
                            date="Aug 2023 - May 2026"
                            info={["Threads: Intelligence, Information Internetworks", "Grade: 3rd Year"]}
                            slug="georgia-tech"
                            activities={[
                                "SGA IT Board Infrastructure and Security Project Team",
                                "Georgia Tech Swim Club",
                                "Data Science at Georgia Tech",
                                "Vietnamese Student Association",
                                "Chinese Student Association"
                            ]}
                        />
                        <EducationCard
                            title="North Carolina School of Science and Mathematics"
                            degree="High School Diploma, Mathematics and Computer Science"
                            date="Aug 2021 - May 2023"
                            info={["Focus: Computer Science, Mathematics, Data Science"]}
                            slug="ncssm"
                            activities={[
                                "TEDxYouth @NCSSM Leadership Committee Member",
                                "Data Science Teaching Assistant",
                                "Varsity Swim Team Captain"
                            ]}
                        />
                    </div>
                </motion.div>

                {/* Experience and Skills - Two Column Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="grid md:grid-cols-[7fr_3fr] gap-8"
                >
                    {/* Experience - Left Column */}
                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-300">Experience</span>
                        </h2>
                        {experienceData.content}
                    </div>

                    {/* Skills - Right Column */}
                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-300">Skills</span>
                        </h2>
                        {skillsData.content}
                    </div>
                </motion.div>
        </section>
    )
}

export default AboutSection