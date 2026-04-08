export const projectsData = [
    {
        id: 1,
        title: "Workout Tracker",
        description: "A comprehensive fitness tracking application to monitor workouts, track progress, and achieve fitness goals.",
        fullDescription: "This is a full-stack workout tracking mobile application built with React Native and Expo. The app allows users to log their exercise sets with reps and weight, view their workout history, and browse a comprehensive exercise database. It features user authentication, real-time data synchronization, and an intuitive interface for tracking fitness progress. The backend leverages a GraphQL API powered by StepZen that aggregates data from multiple sources: a MongoDB Atlas database for storing user workout data and the API Ninjas exercise database for exercise information. Users can explore exercises filtered by muscle group and equipment type, view detailed instructions, and maintain a personal workout log tied to their username.",
        image: "/images/projects/Workout_Tracker/workout_tracker_thumbnail.png",
        tag: ["All", "Mobile"],
        slug: "workout-tracker",
        previewUrl: "/projects/workout-tracker",
        technologies: ["JavaScript", "GraphQL", "React Native", "Expo Router",  "StepZen", "MongoDB Atlas"],
        githubUrl: "https://github.com/Jonathan-Liang/workout-tracker",
        liveUrl: null,
    },
    {
        id: 2,
        title: "Missed Flight Connection Risk",
        description: "Machine learning model to predict and analyze the risk of missed flight connections based on historical data and flight patterns.",
        fullDescription: "In this project, we built a system that estimates the chance that a traveler will miss a connecting flight. We used public U.S. flight data from the Bureau of Transportation Statistics, which includes things like departure and arrival times, the airline, and the airports involved. Instead of only predicting \"delayed\" or \"not delayed,\" the goal was to give a probability that can help people choose safer itineraries and help airlines plan for rebooking and routing costs. We cleaned the raw flight records, matched flights into realistic two-leg connections based on layover time, and then compared three different prediction models. All three models ended up with similar results, which suggests the main limit was the data itself. Important real-world factors like weather, airport congestion, and late incoming aircraft were not included, so the system mostly learned weaker patterns like time of day, season, and which airports were involved.",
        image: "/images/projects/Missed_Flight_Connection_Risk/flight_connection_thumbnail.png",
        tag: ["All", "Machine Learning"],
        slug: "missed-flight-risk",
        previewUrl: "/projects/missed-flight-risk",
        technologies: ["Python", "pandas", "NumPy", "Matplotlib", "Seaborn", "scikit-learn", "XGBoost", "Feature Engineering", "Supervised Learning", "Binary Classification", "Class Imbalance Handling", "Logistic Regression", "Tree Ensembles", "Gradient Boosting", "Categorical Encoding"],
        githubUrl: "https://github.gatech.edu/pages/jliang355/cs4641/",
        reportUrl: "/images/projects/Missed_Flight_Connection_Risk/Missed_Flight_Connection_Risk_Report.pdf",
        liveUrl: null,
    },
    {
        id: 3,
        title: "Pendulum Simulation",
        description: "Physics simulation demonstrating chaotic motion and control systems for single and double pendulum configurations with real-time visualization.",
        fullDescription: "This project is a set of physics simulations for three classic systems. A double pendulum. A spring pendulum. And an inverted pendulum. I started from scratch and wrote out the math myself instead of using a built in model. For each system, I chose the variables to describe the motion. I wrote the forces and energy relationships. Then I derived the differential equations that control how the system moves over time.\n\nAfter that, I implemented the equations in MATLAB. I used numerical solving to simulate the motion step by step. Then I plotted the results and created animations so the motion is easy to see. I also built the same systems in Simulink using block diagrams. This made it easy to change parameters and starting conditions and immediately see the effect in the simulation.",
        image: "/images/projects/Pendulum_Simulation/pendulum_thumbnail.png",
        tag: ["All"],
        slug: "pendulum-simulation",
        previewUrl: "/projects/pendulum-simulation",
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
    {
        id: 4,
        title: "Agile Semantic Communication",
        description: "Advanced communication system leveraging semantic understanding for efficient and adaptive information transfer.",
        fullDescription: "I am a researcher in Georgia Tech's Agile Communications Architecture group. I work on machine learning for wireless networking. The goal is to send images over wireless links using less bandwidth, while keeping the important meaning of the scene.\n\nI built a generative compression pipeline in PyTorch using Stable Diffusion. It lets us transmit a much smaller representation of an image and then reconstruct it on the other side. I use OpenAI CLIP to check that the reconstructed image still matches the original image in meaning. I also prototype software-defined radio systems in GNU Radio. This helps me study how interference and bit errors affect real transmissions, and how ML can make them more resilient.\n\nRight now, I am focused on DiT-JSCC (Diffusion Transformer Joint Source-Channel Coding). We moved away from converting images into short text captions, since captions can miss details. Instead, we send two streams of information. A semantic stream uses DINOv2 to capture the main objects and layout. A detail stream uses SwinJSCC to preserve textures and edges. The diffusion decoder uses both to rebuild a clear and faithful image at low bandwidth.",
        image: "/images/projects/Agile_Semantic_Communication/semantic_comm_thumbnail.png",
        tag: ["All", "Machine Learning"],
        slug: "agile-semantic-communication",
        previewUrl: "/projects/agile-semantic-communication",
        technologies: ["Python", "PyTorch", "Stable Diffusion", "Diffusion Transformers", "OpenAI CLIP", "DINOv2", "SwinJSCC", "GNU Radio", "Software-Defined Radio", "Wireless Communications", "Joint Source-Channel Coding", "Semantic Communication", "Image Compression", "Generative AI", "Computer Vision", "Deep Learning"],
        githubUrl: "https://github.com/Jonathan-Liang",
        liveUrl: null,
    }
];
