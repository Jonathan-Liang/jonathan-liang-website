// Course descriptions for all institutions
export const courseDescriptions = {
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

// Course data organized by institution
export const institutionCourses = {
    "georgia-tech": {
        name: "Georgia Institute of Technology",
        categories: {
            "Computer Science Foundations": [
                "CS 1331: Intro to Object-Oriented Programming",
                "CS 1332: Data Structures & Algorithms",
                "CS 2110: Computer Organization & Programming",
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
        },
        // Define dependencies between courses (prerequisite relationships)
        dependencies: {
            "CS 1332: Data Structures & Algorithms": ["CS 1331: Intro to Object-Oriented Programming"],
            "CS 2110: Computer Organization & Programming": ["CS 1331: Intro to Object-Oriented Programming"],
            "CS 2200: Systems and Networks": ["CS 2110: Computer Organization & Programming"],
            "CS 2340: Objects and Design": ["CS 1332: Data Structures & Algorithms"],
            "CS 3251: Computer Networking I": ["CS 2200: Systems and Networks"],
            "CS 3510: Design & Analysis of Algorithms": ["CS 1332: Data Structures & Algorithms", "CS 2050: Intro Discrete Math for CS"],
            "CS 3600: Intro to Artificial Intelligence": ["CS 1332: Data Structures & Algorithms"],
            "CS 3630: Intro to Perception & Robotics": ["CS 1332: Data Structures & Algorithms", "MATH 1554: Linear Algebra"],
            "CS 4400: Intro to Database Systems": ["CS 1332: Data Structures & Algorithms"],
            "CS 4641: Machine Learning": ["CS 1332: Data Structures & Algorithms", "MATH 1554: Linear Algebra", "ISYE 3770: Statistics & Applications"],
            "CS 4675: Internet Systems & Services": ["CS 3251: Computer Networking I"],
            "CS 6476: Computer Vision": ["CS 1332: Data Structures & Algorithms", "MATH 1554: Linear Algebra"],
            "CS 7643: Deep Learning": ["CS 4641: Machine Learning", "MATH 2551: Multivariable Calculus"],
            "MATH 2551: Multivariable Calculus": ["MATH 1554: Linear Algebra"],
            "MATH 3012: Applied Combinatorics": ["CS 2050: Intro Discrete Math for CS"]
        }
    },
    "ncssm": {
        name: "North Carolina School of Science and Mathematics",
        categories: {
            "All Courses": [
                "Graph Theory",
                "Multivariable Calculus",
                "Advanced Data Science",
                "Mathematical Modeling"
            ]
        },
        dependencies: {
            "Advanced Data Science": ["Graph Theory"],
            "Mathematical Modeling": ["Multivariable Calculus"]
        }
    }
};
