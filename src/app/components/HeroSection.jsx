"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <div className="col-span-7 place-self-center text-center sm:text-left">
                        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-300">Hello, I&apos;m Jonathan, {" "}</span>
                            <br></br>
                            <div style={{ minHeight: '1.5em' }}> {/* Adjust '3em' as needed */}
                                <TypeAnimation
                                    sequence={[
                                        'a CS major @ Georgia Tech',
                                        1000,
                                        'an Incoming SDE @ Amazon',
                                        1000,
                                        'a Tech Enthusiast',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </div>
                        </h1>
                        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                            Hi, my name is Jonathan Liang! I am currently a computer science major with threads in intelligence
                            and information internetworks at the Georgia Institute of Technology. Please feel free to scroll down and 
                            explore my website to learn more about me, play around with my projects, or reach out to talk to me!
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            <button className="relative overflow-hidden px-[2px] py-[2px] w-full sm:w-fit rounded-full bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 group">
                                <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-3">
                                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/50 to-white/20 w-[40%] translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out"></span>
                                    <a href="https://www.linkedin.com/in/jonathan-liang-jl" target="_blank" rel="noopener noreferrer" className="relative z-10 group-hover:font-bold transition-all duration-150">
                                        LinkedIn
                                    </a>
                                </div>
                            </button>
                            <button className="relative overflow-hidden px-[4px] py-[4px] w-full sm:w-fit rounded-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-300 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 group">
                                <div className="relative rounded-full bg-[#121212] px-[20px] py-[10px] overflow-visible">
                                    <span className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-300 translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-700 ease-out"></span>
                                    <a href="/Jonathan_Liang_Resume.pdf" target="_blank" rel="noopener noreferrer" className="relative z-10 group-hover:font-bold transition-all duration-150">
                                        Download Resume
                                    </a>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                        <div className="rounded-full bg-[#181818] w-[250px] h-[250px]  lg:w-[250px] lg:h-[250px] relative">
                            <Image
                                src="/images/personal-pic.png"
                                alt="picture of me :)"
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;