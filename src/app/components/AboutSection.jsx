"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_Data = [
    {
        title:"Skills",
        id:"skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Add</li>
                <li>Your</li>
                <li>Skills</li>
                <li>Here</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content: (
            <ul className="list-disc pl-2">
                <li>Add</li>
                <li>Your</li>
                <li>Education</li>
                <li>Here</li>
            </ul>
        )
    },
    {
        title:"Experience",
        id:"experience",
        content: (
            <ul className="list-disc pl-2">
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
                        Write about yourself: Fix Later
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
                    <div className="mt-8">{TAB_Data.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection