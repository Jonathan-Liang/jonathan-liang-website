"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section className="relative pt-8 pb-10 lg:pt-12 lg:pb-16 flex flex-col items-center justify-center">

            <div className="flex flex-col items-center w-full max-w-4xl px-4 z-10 space-y-7">

                {/* 1. Title (Outside Widget) */}
                <h1 className="text-nord-6 text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    <span className="text-nord-8">
                        Hello, I&apos;m Jonathan
                    </span>
                    <br />
                    <div className="mt-2 h-[1.5em] flex items-center justify-center">
                        <TypeAnimation
                            sequence={[
                                'a CS Major @ Georgia Tech',
                                2500,
                                'an Incoming SDE @ Amazon',
                                2500,
                            ]}
                            wrapper="span"
                            speed={10}
                            repeat={Infinity}
                            className="text-2xl sm:text-3xl lg:text-4xl text-nord-6 drop-shadow-sm"
                        />
                    </div>
                </h1>

                {/* 2. CTA Destination Row (Outside Widget) */}
                <div className="relative flex flex-wrap w-full justify-center items-center gap-5 sm:gap-6 mt-6 mb-4 z-20">

                    {/* Primary Button */}
                    <button className="relative overflow-hidden w-full sm:w-fit rounded-full bg-nord-8 text-nord-0 transition-all duration-300 hover:bg-nord-9">
                        <a href="https://www.linkedin.com/in/jonathan-liang-jl" target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden px-8 sm:px-10 py-4 sm:py-[1.1rem]">
                            <span className="relative z-10 text-base sm:text-lg font-bold tracking-wide flex items-center justify-center gap-2.5">
                                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                </svg>
                                Connect on LinkedIn
                            </span>
                        </a>
                    </button>
                    
                    {/* Secondary Button */}
                    <button className="relative overflow-hidden w-full sm:w-fit rounded-full bg-nord-6 text-nord-0 transition-all duration-300 hover:bg-nord-5">
                        <a href="/Jonathan_Liang_Resume.pdf" target="_blank" rel="noopener noreferrer" className="block relative px-8 sm:px-10 py-4 sm:py-[1.1rem]">
                            <span className="relative z-10 transition-all duration-150 text-base sm:text-lg font-bold tracking-wide flex items-center justify-center gap-2.5 text-nord-0">
                                <svg className="w-5 h-5 flex-shrink-0 text-nord-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>Download Resume</span>
                            </span>
                        </a>
                    </button>
                    
                </div>

                {/* Personal Profile Card */}
                <div className="relative z-30 w-full max-w-2xl mt-8 sm:mt-12 mx-auto rounded-2xl bg-nord-1 border border-nord-3 shadow-md shadow-black/20 overflow-hidden">
                    <div className="bg-nord-1 relative flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 rounded-[15px] p-6 sm:p-7 overflow-hidden z-20">
                        {/* Clean gradient overlay for the card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-nord-6/[0.04] to-transparent pointer-events-none -z-10" />
                        
                        <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-full overflow-hidden border-2 border-nord-6/10 shadow-xl ring-4 ring-black/20">
                            <Image
                                src="/images/personal-pic.png"
                                alt="Jonathan Liang"
                                fill
                                sizes="(max-width: 640px) 128px, 160px"
                                className="object-cover object-center"
                            />
                        </div>
                        
                        <div className="relative z-10 flex flex-col justify-center w-full text-center sm:text-left">
                            <h2 className="text-2xl sm:text-3xl font-bold text-nord-6 mb-4 sm:mb-5">Jonathan Liang</h2>
                            
                            <ul className="space-y-2.5 text-sm sm:text-base text-nord-4 text-left mx-auto sm:mx-0 max-w-fit">
                                <li className="flex items-start gap-4">
                                    <span className="font-semibold text-nord-6/40 w-20 flex-shrink-0">From</span>
                                    <span className="text-nord-6">Chapel Hill, NC</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="font-semibold text-nord-6/40 w-20 flex-shrink-0">Athletics</span>
                                    <a href="/swimming" className="text-nord-6 hover:text-primary-400 transition-colors underline decoration-nord-4/30 hover:decoration-primary-400 underline-offset-4">Swam competitively for 14 years</a>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="font-semibold text-nord-6/40 w-20 flex-shrink-0">Hobbies</span>
                                    <a href="/cooking" className="text-nord-6 hover:text-primary-400 transition-colors underline decoration-nord-4/30 hover:decoration-primary-400 underline-offset-4">Love to cook</a>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="font-semibold text-nord-6/40 w-20 flex-shrink-0">Pets</span>
                                    <span className="text-nord-6">Dog named Coco</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroSection;