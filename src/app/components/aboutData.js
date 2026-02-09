// About Section Data - separated for easier maintenance

export const TAB_Data = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="space-y-8">
                {/* Languages */}
                <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
                    <h3 className="text-xl font-bold mb-4 text-white">
                        Languages
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {["Java", "Python", "JavaScript", "TypeScript", "SQL", "C", "C++", "React Native", "PHP", "HTML/CSS", "Swift", "MATLAB"].map((skill) => (
                            <span key={skill} className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-cyan-400/20 border border-cyan-500/30 rounded-full text-sm font-medium text-white hover:from-cyan-500/30 hover:to-cyan-400/30 transition-all duration-200">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Frameworks */}
                <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
                    <h3 className="text-xl font-bold mb-4 text-white">
                        Frameworks
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {["Spring", "Next.js", "React.js", "Express.js", "Tailwind CSS", "SwiftUI", "Flask", "JavaFX", "Alexa Skills Kit"].map((skill) => (
                            <span key={skill} className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-white hover:from-purple-500/30 hover:to-violet-500/30 transition-all duration-200">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Cloud & Databases */}
                <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
                    <h3 className="text-xl font-bold mb-4 text-white">
                        Cloud & Databases
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {["AWS S3", "AWS DynamoDB", "AWS Lambda", "AWS AppConfig", "PostgreSQL", "MongoDB"].map((skill) => (
                            <span key={skill} className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-sky-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-white hover:from-blue-500/30 hover:to-sky-500/30 transition-all duration-200">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Developer Tools */}
                <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
                    <h3 className="text-xl font-bold mb-4 text-white">
                        Developer Tools
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {["Git", "Docker", "Linux", "Jira", "Vercel", "Android Studio", "JupyterLab", "Tableau", "PyCharm"].map((skill) => (
                            <span key={skill} className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-indigo-400/20 border border-indigo-500/30 rounded-full text-sm font-medium text-white hover:from-indigo-500/30 hover:to-indigo-400/30 transition-all duration-200">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Libraries */}
                <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
                    <h3 className="text-xl font-bold mb-4 text-white">
                        Libraries
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {["pandas", "NumPy", "Matplotlib", "scikit-learn", "TensorFlow", "PyTorch", "Pygame"].map((skill) => (
                            <span key={skill} className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/30 rounded-full text-sm font-medium text-white hover:from-teal-500/30 hover:to-emerald-500/30 transition-all duration-200">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <div className="space-y-6">
                <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
                    <h3 className="text-2xl font-bold mb-2 text-white">Georgia Institute of Technology</h3>
                    <p className="text-[#ADB7BE] mb-2">Bachelor of Science in Computer Science</p>
                    <p className="text-sm text-[#ADB7BE] mb-4">Expected Graduation: May 2026</p>
                    <div className="mb-4">
                        <p className="text-white font-semibold mb-2">Threads: Intelligence, Information Internetworks</p>
                        <p className="text-white font-semibold mb-2">Relevant Coursework:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[#ADB7BE]">
                            <div>
                                <p className="font-medium text-cyan-400 mt-3 mb-1">Core CS</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>CS 1331: Object-Oriented Programming</li>
                                    <li>CS 1332: Data Structures & Algorithms</li>
                                    <li>CS 2050: Discrete Math for CS</li>
                                    <li>CS 2110: Computer Organization</li>
                                    <li>CS 2200: Systems and Networks</li>
                                    <li>CS 2340: Objects and Design</li>
                                    <li>CS 3510: Design & Analysis of Algorithms</li>
                                </ul>
                                <p className="font-medium text-cyan-400 mt-3 mb-1">AI & Machine Learning</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>CS 3600: Intro to Artificial Intelligence</li>
                                    <li>CS 3630: Intro to Perception & Robotics</li>
                                    <li>CS 4641: Machine Learning</li>
                                    <li>CS 6476: Computer Vision</li>
                                    <li>CS 7643: Deep Learning (in progress)</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium text-cyan-400 mt-3 mb-1">Systems & Networking</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>CS 3251: Computer Networking I</li>
                                    <li>CS 4400: Intro to Database Systems</li>
                                    <li>CS 4675: Internet Systems & Services (in progress)</li>
                                </ul>
                                <p className="font-medium text-cyan-400 mt-3 mb-1">Mathematics</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>MATH 1554: Linear Algebra</li>
                                    <li>MATH 2551: Multivariable Calculus</li>
                                    <li>MATH 3012: Applied Combinatorics (in progress)</li>
                                    <li>ISYE 3770: Statistics & Applications</li>
                                </ul>
                                <p className="font-medium text-cyan-400 mt-3 mb-1">Other</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>CS 3001: Computing & Society</li>
                                    <li>VIP 4602: VIP Project Team</li>
                                    <li>LMC 3403: Technical Communication (in progress)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
                    <h3 className="text-2xl font-bold mb-2 text-white">North Carolina School of Science and Mathematics</h3>
                    <p className="text-[#ADB7BE] mb-2">Graduated: 2022</p>
                    <ul className="mb-4 list-disc pl-5 text-[#ADB7BE]">
                        <li>Focus: Computer Science, Mathematics, Data Science</li>
                        <li>Relevant Coursework: Graph Theory, Multivariable Calculus, Advanced Data Science, Mathematical Modeling</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <div className="space-y-6">
                <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
                    <h3 className="text-2xl font-bold mb-2 text-white">Computer Science Teaching Assistant</h3>
                    <p className="text-[#ADB7BE] mb-1">CS 4400 Introduction to Database Systems at Georgia Tech — Atlanta, GA</p>
                    <p className="text-sm text-[#ADB7BE] mb-4">Aug 2025 – Present</p>
                    <ul className="space-y-2 list-disc pl-5 text-[#ADB7BE]">
                        <li>Building and refining autograder infrastructure for projects and exams to streamline grading for 545 students.</li>
                        <li>Guiding students in office hours and forums with SQL debugging and clarifying core database concepts.</li>
                    </ul>
                </div>

                <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
                    <h3 className="text-2xl font-bold mb-2 text-white">Software Development Engineer Intern</h3>
                    <p className="text-[#ADB7BE] mb-1">Amazon — Bellevue, WA</p>
                    <p className="text-sm text-[#ADB7BE] mb-4">May 2025 – Aug 2025</p>
                    <ul className="space-y-2 list-disc pl-5 text-[#ADB7BE]">
                        <li>Built a tool for a high-traffic service central to Amazon&apos;s ordering experience with Java, Spring, and AWS AppConfig.</li>
                        <li>Achieved 3x reduction in average ticket resolution time and enabled more production-realistic load and stress testing.</li>
                        <li>Authored the design document and led the design, operational readiness, and security certification reviews.</li>
                        <li>Spearheaded coordination with other service teams, security reviewers, and product managers to secure approvals.</li>
                    </ul>
                </div>

                <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
                    <h3 className="text-2xl font-bold mb-2 text-white">Software Engineer (Infrastructure and Security Team)</h3>
                    <p className="text-[#ADB7BE] mb-1">Student Government Association IT Board at Georgia Tech — Atlanta, GA</p>
                    <p className="text-sm text-[#ADB7BE] mb-4">Aug 2024 – May 2025</p>
                    <ul className="space-y-2 list-disc pl-5 text-[#ADB7BE]">
                        <li>Secured apps used by 20,000+ Georgia Tech students by developing safeguards to prevent sensitive PII exposure.</li>
                    </ul>
                </div>

                <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
                    <h3 className="text-2xl font-bold mb-2 text-white">Software Engineer Intern</h3>
                    <p className="text-[#ADB7BE] mb-1">Emnovate - DigMe — Atlanta, GA</p>
                    <p className="text-sm text-[#ADB7BE] mb-4">May 2024 – Aug 2024</p>
                    <ul className="space-y-2 list-disc pl-5 text-[#ADB7BE]">
                        <li>Designed and built an end-to-end, fully responsive product page using Next.js and Tailwind CSS.</li>
                        <li>Wrote and streamlined product documentation, achieving a 7x reduction in onboarding time for new customers.</li>
                    </ul>
                </div>

                <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
                    <h3 className="text-2xl font-bold mb-2 text-white">Full Stack Software Engineer</h3>
                    <p className="text-[#ADB7BE] mb-1">Data Science at Georgia Tech - Tech Team — Atlanta, GA</p>
                    <p className="text-sm text-[#ADB7BE] mb-4">Aug 2023 – May 2024</p>
                    <ul className="space-y-2 list-disc pl-5 text-[#ADB7BE]">
                        <li>Enhanced the Data Science at GT member portal used by 500+ faculty and students by shipping collaboration features in React.js, optimizing Express.js API endpoints and PostgreSQL queries, and deploying to Heroku.</li>
                    </ul>
                </div>

                <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
                    <h3 className="text-2xl font-bold mb-2 text-white">Software and Information Technology Intern</h3>
                    <p className="text-[#ADB7BE] mb-1">University of North Carolina Chapel Hill — Chapel Hill, NC</p>
                    <p className="text-sm text-[#ADB7BE] mb-4">Jun 2023 – Aug 2023</p>
                    <ul className="space-y-2 list-disc pl-5 text-[#ADB7BE]">
                        <li>Developed and maintained personas and event modules for CarolinaGo, enhancing campus engagement for over 20,000+ students and faculty by publicizing orientations and events with PHP, JavaScript, and HTML/CSS.</li>
                    </ul>
                </div>
            </div>
        )
    }
];
