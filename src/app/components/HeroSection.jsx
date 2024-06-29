"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <div className="col-span-7 place-self-center text-center sm:text-left">
                        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Hello, I&apos;m Jonathan, {" "}</span>
                            <br></br>
                            <div style={{ minHeight: '1.5em' }}> {/* Adjust '3em' as needed */}
                                <TypeAnimation
                                    sequence={[
                                        'a CS major @ Georgia Tech',
                                        1000,
                                        'a Software Developer',
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
                        <div>
                            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 bg-white hover:bg-slate-200 text-white">
                                <a href="https://www.linkedin.com/in/jonathan-liang-jl" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </button>
                            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                                <a href="https://drive.google.com/file/d/1g-O53DpruIwCd3XREKr-bIRxiIEYkMHU/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                    Download Resume/CV
                                </a>
                            </button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
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
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection;