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
                            date="Expected Graduation: May 2026"
                            info={["Threads: Intelligence, Information Internetworks"]}
                            slug="georgia-tech"
                            courseCategories={{
                                "Computer Science Foundations": [
                                    "CS 1331: Intro to Object-Oriented Programming",
                                    "CS 1332: Data Structures & Algorithms",
                                    "CS 2110: Computer Organization",
                                    "CS 2340: Objects and Design"
                                ],
                                "Information Internetworks": [
                                    "CS 2200: Systems and Networks",
                                    "CS 3251: Computer Networking I",
                                    "CS 3510: Design & Analysis of Algorithms",
                                    "CS 4400: Intro to Database Systems",
                                    "CS 4675: Internet Systems & Services",
                                    "VIP 4602: VIP Project Team"
                                ],
                                "Intelligence": [
                                    "CS 3600: Intro to Artificial Intelligence",
                                    "CS 3630: Intro to Perception & Robotics",
                                    "CS 4641: Machine Learning",
                                    "CS 6476: Computer Vision",
                                    "CS 7643: Deep Learning"
                                ],
                                "Mathematics": [
                                    "CS 2050: Intro Discrete Math for CS",
                                    "MATH 1554: Linear Algebra",
                                    "MATH 2551: Multivariable Calculus",
                                    "MATH 3012: Applied Combinatorics",
                                    "ISYE 3770: Statistics & Applications"
                                ],
                                "Professional Settings": [
                                    "CS 3001: Computing & Society",
                                    "LMC 3403: Technical Communication"
                                ]
                            }}
                        />
                        <EducationCard
                            title="North Carolina School of Science and Mathematics"
                            degree="Graduated: May 2023"
                            date=""
                            info={["Focus: Computer Science, Mathematics, Data Science"]}
                            slug="ncssm"
                            courses={[
                                "Graph Theory",
                                "Multivariable Calculus",
                                "Advanced Data Science",
                                "Mathematical Modeling"
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