"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_Data = [
    {
        title:"Skills",
        id:"skills",
        content: (
            <ul className="list-disc pl-5">
                <li>Java (JavaFX) </li>
                <li>Python (pandas, Numpy, TensorFlow, Keras, PyTorch, Matplotlib) </li>
                <li>Javascript (React.js, Next.js, Express.js)</li>
                <li>PHP</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content: (
            <ul className="list-disc pl-5">
                <li>
                    Georgia Institute of Technology
                    <ul className="list-disc pl-7">
                        <li>Major: Computer Science with threads in Intelligence and Information Internetworks</li>
                        <li>
                            Relevant Courses:
                            <ul className="list-disc pl-7">
                                <li>Data Structures and Algorithms</li>
                                <li>Computer Organization and Programming</li>
                                <li>Objects and Design</li>
                                <li>Discrete Mathematics</li>
                                <li>Linear Algebra</li>
                                <li>Object-Oriented Programming</li>
                            </ul> 
                        </li>
                    </ul>
                </li>
                <li>
                    North Carolina School of Science and Mathematics
                    <ul className="list-disc pl-7">
                        <li>Studied: Computer Science, Mathematics, and Data Science</li>
                        <li>
                            Relevant Courses:
                            <ul className="list-disc pl-7">
                                <li>Graph Theory</li>
                                <li>Multivariable Calculus</li>
                                <li>Data Structures and Algorithms</li>
                                <li>Advanced Data Science</li>
                                <li>Mathematical Modeling</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        )
    },
    {
        title:"Experience",
        id:"experience",
        content: (
            <ul className="list-disc pl-5">
                <li>Add</li>
                <li>Your</li>
                <li>Experience</li>
                <li>Here</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    };
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/hero-image.png" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am super interested in all things software-related! I am currently working on developing 
                        web/mobile applications and learning more about machine learning and AI.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}>
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton 
                        selectTab={() => handleTabChange("experience")} 
                        active={tab === "experience"}>
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>
                    <div className="mt-3">{TAB_Data.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection