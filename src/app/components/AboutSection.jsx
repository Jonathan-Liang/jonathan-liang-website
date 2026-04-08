"use client";
import React from 'react';
import { motion } from "framer-motion";
import EducationCard from './EducationCard';

const SKILLS_DATA = [
    {
        category: "Languages",
        skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C", "C++", "React Native", "PHP", "HTML/CSS", "Swift", "MATLAB"]
    },
    {
        category: "Frameworks",
        skills: ["Spring", "Next.js", "React.js", "Express.js", "Tailwind CSS", "SwiftUI", "Flask", "JavaFX", "Alexa Skills Kit"]
    },
    {
        category: "Cloud & Databases",
        skills: ["AWS S3", "AWS DynamoDB", "AWS Lambda", "AWS AppConfig", "PostgreSQL", "MongoDB"]
    },
    {
        category: "Developer Tools",
        skills: ["Git", "Docker", "Linux", "Jira", "Vercel", "Android Studio", "JupyterLab", "Tableau", "PyCharm"]
    },
    {
        category: "Libraries",
        skills: ["pandas", "NumPy", "Matplotlib", "scikit-learn", "TensorFlow", "PyTorch", "Pygame"]
    }
];

const EXPERIENCE_DATA = [
    {
        title: "Computer Science Teaching Assistant",
        company: "CS 4400 Introduction to Database Systems at Georgia Tech — Atlanta, GA",
        date: "Aug 2025 - Present",
        bullets: [
            "Building and refining autograder infrastructure for projects and exams to streamline grading for 545 students.",
            "Guiding students in office hours and forums with SQL debugging and clarifying core database concepts."
        ]
    },
    {
        title: "Software Development Engineer Intern",
        company: "Amazon — Bellevue, WA",
        date: "May 2025 - Aug 2025",
        bullets: [
            "Built a tool for a high-traffic service central to Amazon's ordering experience with Java, Spring, and AWS AppConfig.",
            "Achieved 3x reduction in average ticket resolution time and enabled more production-realistic load and stress testing.",
            "Authored the design document and led the design, operational readiness, and security certification reviews.",
            "Spearheaded coordination with other service teams, security reviewers, and product managers to secure approvals."
        ]
    },
    {
        title: "Software Engineer (Infrastructure and Security Team)",
        company: "Student Government Association IT Board at Georgia Tech — Atlanta, GA",
        date: "Aug 2024 - May 2025",
        bullets: [
            "Secured apps used by 20,000+ Georgia Tech students by developing safeguards to prevent sensitive PII exposure."
        ]
    },
    {
        title: "Software Engineer Intern",
        company: "Emnovate - DigMe — Atlanta, GA",
        date: "May 2024 - Aug 2024",
        bullets: [
            "Designed and built an end-to-end, fully responsive product page using Next.js and Tailwind CSS.",
            "Wrote and streamlined product documentation, achieving a 7x reduction in onboarding time for new customers."
        ]
    },
    {
        title: "Full Stack Software Engineer",
        company: "Data Science at Georgia Tech - Tech Team — Atlanta, GA",
        date: "Aug 2023 - May 2024",
        bullets: [
            "Enhanced the Data Science at GT member portal used by 500+ faculty and students by shipping collaboration features in React.js, optimizing Express.js API endpoints and PostgreSQL queries, and deploying to Heroku."
        ]
    },
    {
        title: "Software and Information Technology Intern",
        company: "University of North Carolina Chapel Hill — Chapel Hill, NC",
        date: "Jun 2023 - Aug 2023",
        bullets: [
            "Developed and maintained personas and event modules for CarolinaGo, enhancing campus engagement for over 20,000+ students and faculty by publicizing orientations and events with PHP, JavaScript, and HTML/CSS."
        ]
    }
];

const SkillCategory = ({ category, skills }) => (
    <div className="bg-nord-1 rounded-xl p-6 border border-nord-3">
        <h3 className="text-xl font-bold mb-4 text-nord-6">{category}</h3>
        <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-nord-2 border border-nord-3 rounded-full text-sm font-medium text-nord-6 hover:bg-nord-3 hover:border-nord-4 transition-all duration-200">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const ExperienceItem = ({ title, company, date, bullets }) => (
    <div className="bg-nord-1 rounded-xl p-6 border border-nord-3">
        <h3 className="text-2xl font-bold mb-2 text-nord-6">{title}</h3>
        <p className="text-nord-4 mb-1">{company}</p>
        <p className="text-sm text-nord-4 mb-4">{date}</p>
        <ul className="space-y-2 list-disc pl-5 text-nord-4">
            {bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
            ))}
        </ul>
    </div>
);

const AboutSection = () => {
    return (
        <section id="about" className="text-nord-6 pt-10 pb-16">
            {/* Education Section - Full Width */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-12"
            >
                <h2 className="text-4xl font-bold mb-6">
                    <span className="text-nord-8">Education</span>
                </h2>
                <div className="space-y-6">
                    <EducationCard
                        title="Georgia Institute of Technology"
                        degree="Bachelor of Science in Computer Science"
                        date="Aug 2023 - May 2026"
                        info={["Threads: Intelligence, Information Internetworks"]}
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
                        <span className="text-nord-8">Experience</span>
                    </h2>
                    <div className="space-y-6">
                        {EXPERIENCE_DATA.map((exp, idx) => (
                            <ExperienceItem key={idx} {...exp} />
                        ))}
                    </div>
                </div>

                {/* Skills - Right Column */}
                <div>
                    <h2 className="text-4xl font-bold mb-6">
                        <span className="text-nord-8">Skills</span>
                    </h2>
                    <div className="space-y-8">
                        {SKILLS_DATA.map((group, idx) => (
                            <SkillCategory key={idx} category={group.category} skills={group.skills} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutSection;
