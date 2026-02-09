"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const courseDescriptions = {
    // Georgia Tech - Core CS
    "CS 1100: Freshman Leap Seminar": "Small group discussions led by faculty covering foundational, motivational, and topical subjects for computationalists.",
    "CS 1301: Intro to Computing": "Introduction to computing principles and programming practices, emphasizing designing, constructing, and implementing problem solutions using software tools.",
    "CS 1331: Intro to Object-Oriented Programming": "Object-oriented programming methods such as encapsulation, inheritance, and polymorphism, with emphasis on software development and individual programming skills.",
    "CS 1332: Data Structures & Algorithms": "Core data structures and algorithms in an object-oriented context, focused on software development toward applications.",
    "CS 2050: Intro Discrete Math for CS": "Proof methods and correctness of algorithms over discrete structures; induction/recursion; complexity and order of growth; number-theoretic algorithms; counting and computability.",
    "CS 2110: Computer Organization & Programming": "Introduction to computer hardware, machine language, assembly language, and C programming.",
    "CS 2200: Systems and Networks": "Broad exposure to computer system structure and networking, including OS software abstractions for orchestrating computing resources.",
    "CS 2340: Objects and Design": "Object-oriented programming methods for large programs, focusing on quality processes, debugging techniques, and testing to assure a quality product.",
    "CS 3510: Design & Analysis of Algorithms": "Techniques for designing and analyzing efficient algorithms for standard computational problems, including NP-Completeness.",
    
    // Georgia Tech - AI & Machine Learning
    "CS 3600: Intro to Artificial Intelligence": "Introduction to AI and machine learning, including intelligent system design, search/problem solving, supervised learning, and reinforcement learning.",
    "CS 3630: Intro to Perception & Robotics": "Fundamental problems and solutions for robot perception and action, framed around autonomous robot navigation.",
    "CS 4641: Machine Learning": "Machine learning techniques and applications, covering foundational issues and inductive/analytical/numerical/theoretical approaches with real-world applications.",
    "CS 6476: Computer Vision": "Intro to computer vision: image formation, camera geometry, feature detection/matching, multiview geometry (stereo/motion/tracking), classification, and scene understanding.",
    "CS 7643: Deep Learning": "Fundamentals and math of deep learning with implementation details (e.g., gradient-based optimization/backprop, computation graphs, common neural architectures).",
    
    // Georgia Tech - Systems & Networking
    "CS 3251: Computer Networking I": "Networking fundamentals including error recovery, medium access, routing, flow control, and transport; emphasizes best practice and includes programming networked applications.",
    "CS 4400: Intro to Database Systems": "Mainstream database concepts including ER modeling, relational databases, query languages, and database design methodology; includes a project.",
    "CS 4675: Internet Systems & Services": "Fundamental issues, concepts, techniques, and technical challenges for designing and developing Internet systems, services, and applications.",
    
    // Georgia Tech - Mathematics
    "MATH 1554: Linear Algebra": "Linear algebra through eigenvalues/eigenvectors with applications to linear systems, least squares, diagonalization, and quadratic forms.",
    "MATH 2551: Multivariable Calculus": "Linear approximation and Taylor's theorem, Lagrange multipliers and constrained optimization, multiple integration, and vector analysis (Green/Gauss/Stokes).",
    "MATH 3012: Applied Combinatorics": "Combinatorial techniques for discrete problem solving, including counting methods, linear recurrences, graph/network models and related algorithms, and combinatorial designs.",
    "ISYE 3770: Statistics & Applications": "Intro to probability and distributions, estimation, confidence intervals, hypothesis testing, linear regression, and analysis of variance.",
    
    // Georgia Tech - Other
    "CS 3001: Computing & Society": "Role and impact of information and communication technology in society, emphasizing ethical, professional, and public policy issues.",
    "VIP 4602: VIP Project Team": "Multidisciplinary, project-based team course supporting faculty research; students can participate multiple semesters and take on significant technical and/or leadership responsibilities.",
    "LMC 3403: Technical Communication": "Workplace technical communication genres; develops visual/verbal skills for critical analysis and document development.",
    
    // NCSSM
    "Graph Theory": "Study of graphs, networks, paths, trees, and applications to computer science problems.",
    "Multivariable Calculus": "Calculus of functions of several variables, partial derivatives, and multiple integrals.",
    "Advanced Data Science": "Advanced statistical methods, machine learning techniques, and data visualization.",
    "Mathematical Modeling": "Mathematical techniques for modeling real-world phenomena and solving applied problems."
};

const EducationCard = ({ title, degree, date, info, courses, courseCategories }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hoveredCourse, setHoveredCourse] = useState(null);
    const [isHovering, setIsHovering] = useState(false);

    // Helper function to chunk array into groups of 3
    const chunkArray = (array, size) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    };

    const renderCourseCard = (course, idx) => (
        <div
            key={idx}
            className="relative"
            onMouseEnter={() => setHoveredCourse(course)}
            onMouseLeave={() => setHoveredCourse(null)}
        >
            <div className="p-4 bg-[#121212] rounded-lg border border-[#33353F] hover:border-primary-500/50 transition-all duration-200">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary-500">•</span>
                    <span className="text-white font-medium text-sm">{course}</span>
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
    );

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
                                
                                {courseCategories ? (
                                    <div className="space-y-6">
                                        {Object.entries(courseCategories).map(([category, categoryCourses]) => {
                                            const courseRows = chunkArray(categoryCourses, 3);
                                            return (
                                                <div key={category}>
                                                    <h5 className="text-md font-semibold text-[#ADB7BE] mb-3">{category}</h5>
                                                    <div className="space-y-3">
                                                        {courseRows.map((row, rowIdx) => (
                                                            <div key={rowIdx} className="grid grid-cols-3 gap-3">
                                                                {row.map((course, idx) => renderCourseCard(course, `${category}-${rowIdx}-${idx}`))}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <div className="flex gap-4">
                                        {/* Column 1 */}
                                        <div className="flex-1 space-y-4">
                                            {courses.filter((_, idx) => idx % 3 === 0).map((course, idx) => renderCourseCard(course, `col1-${idx}`))}
                                        </div>

                                        {/* Column 2 */}
                                        <div className="flex-1 space-y-4">
                                            {courses.filter((_, idx) => idx % 3 === 1).map((course, idx) => renderCourseCard(course, `col2-${idx}`))}
                                        </div>

                                        {/* Column 3 */}
                                        <div className="flex-1 space-y-4">
                                            {courses.filter((_, idx) => idx % 3 === 2).map((course, idx) => renderCourseCard(course, `col3-${idx}`))}
                                        </div>
                                    </div>
                                )}
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
