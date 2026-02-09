"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const courseDescriptions = {
    // Georgia Tech
    "Data Structures & Algorithms": "Study of fundamental data structures and algorithms, including analysis of time and space complexity.",
    "Computer Organization & Programming": "Introduction to computer organization, assembly language, and low-level programming concepts.",
    "Objects and Design": "Object-oriented programming principles, design patterns, and software engineering practices.",
    "Discrete Mathematics": "Mathematical foundations for computer science including logic, sets, functions, and graph theory.",
    "Linear Algebra": "Vector spaces, matrices, determinants, eigenvalues, and applications to computer science.",
    "Object-Oriented Programming": "Advanced object-oriented concepts, inheritance, polymorphism, and software design.",
    
    // NCSSM
    "Graph Theory": "Study of graphs, networks, paths, trees, and applications to computer science problems.",
    "Multivariable Calculus": "Calculus of functions of several variables, partial derivatives, and multiple integrals.",
    "Advanced Data Science": "Advanced statistical methods, machine learning techniques, and data visualization.",
    "Mathematical Modeling": "Mathematical techniques for modeling real-world phenomena and solving applied problems."
};

const EducationCard = ({ title, degree, date, info, courses }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hoveredCourse, setHoveredCourse] = useState(null);
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div 
            className="bg-[#181818] rounded-xl border border-[#33353F] overflow-hidden hover:border-primary-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-[1.02] transition-all duration-300 cursor-pointer relative pb-4"
            onClick={() => setIsExpanded(!isExpanded)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                        <p className="text-[#ADB7BE] mb-2">{degree}</p>
                        <p className="text-sm text-[#ADB7BE] mb-4">{date}</p>
                        {info && info.map((item, idx) => (
                            <p key={idx} className="text-[#ADB7BE] mb-2">{item}</p>
                        ))}
                    </div>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="mt-6 border-t border-[#33353F] pt-6">
                                <h4 className="text-lg font-semibold text-white mb-4">Relevant Coursework</h4>
                                <div className="flex gap-4">
                                    {/* Column 1 */}
                                    <div className="flex-1 space-y-4">
                                        {courses.filter((_, idx) => idx % 3 === 0).map((course, idx) => (
                                            <div
                                                key={idx}
                                                className="relative"
                                                onMouseEnter={() => setHoveredCourse(course)}
                                                onMouseLeave={() => setHoveredCourse(null)}
                                            >
                                                <div className="p-4 bg-[#121212] rounded-lg border border-[#33353F] hover:border-primary-500/50 transition-all duration-200">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-primary-500">•</span>
                                                        <span className="text-white font-medium">{course}</span>
                                                    </div>
                                                    
                                                    <AnimatePresence>
                                                        {hoveredCourse === course && courseDescriptions[course] && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.5, ease: "easeOut" }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="mt-2 pt-2 border-t border-primary-500/30">
                                                                    <p className="text-sm text-[#ADB7BE] italic">{courseDescriptions[course]}</p>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Column 2 */}
                                    <div className="flex-1 space-y-4">
                                        {courses.filter((_, idx) => idx % 3 === 1).map((course, idx) => (
                                            <div
                                                key={idx}
                                                className="relative"
                                                onMouseEnter={() => setHoveredCourse(course)}
                                                onMouseLeave={() => setHoveredCourse(null)}
                                            >
                                                <div className="p-4 bg-[#121212] rounded-lg border border-[#33353F] hover:border-primary-500/50 transition-all duration-200">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-primary-500">•</span>
                                                        <span className="text-white font-medium">{course}</span>
                                                    </div>
                                                    
                                                    <AnimatePresence>
                                                        {hoveredCourse === course && courseDescriptions[course] && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.5, ease: "easeOut" }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="mt-2 pt-2 border-t border-primary-500/30">
                                                                    <p className="text-sm text-[#ADB7BE] italic">{courseDescriptions[course]}</p>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Column 3 */}
                                    <div className="flex-1 space-y-4">
                                        {courses.filter((_, idx) => idx % 3 === 2).map((course, idx) => (
                                            <div
                                                key={idx}
                                                className="relative"
                                                onMouseEnter={() => setHoveredCourse(course)}
                                                onMouseLeave={() => setHoveredCourse(null)}
                                            >
                                                <div className="p-4 bg-[#121212] rounded-lg border border-[#33353F] hover:border-primary-500/50 transition-all duration-200">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-primary-500">•</span>
                                                        <span className="text-white font-medium">{course}</span>
                                                    </div>
                                                    
                                                    <AnimatePresence>
                                                        {hoveredCourse === course && courseDescriptions[course] && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.5, ease: "easeOut" }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="mt-2 pt-2 border-t border-primary-500/30">
                                                                    <p className="text-sm text-[#ADB7BE] italic">{courseDescriptions[course]}</p>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Hover Widget at Bottom */}
            <AnimatePresence>
                {isHovering && (
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute bottom-0 left-0 right-0 bg-primary-500/20 border-t border-primary-500/50 backdrop-blur-sm origin-bottom"
                    >
                        <div className="flex justify-center py-1.5">
                            <motion.svg
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                width="20"
                                height="12"
                                viewBox="0 0 24 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-primary-500"
                            >
                                <path
                                    d="M2 2L12 12L22 2"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </motion.svg>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EducationCard;
