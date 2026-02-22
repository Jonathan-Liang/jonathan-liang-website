"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const EducationCard = ({ title, degree, date, info, activities, slug }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div 
            className="bg-[#181818] rounded-xl border border-[#33353F] overflow-hidden hover:border-primary-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-[1.02] transition-all duration-300 cursor-pointer relative pb-4"
            onClick={() => setIsExpanded(!isExpanded)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="p-6">
                <div className="flex justify-between items-center gap-8">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                        <p className="text-[#ADB7BE] mb-2">{degree}</p>
                        <p className="text-sm text-[#ADB7BE] mb-4">{date}</p>
                        {info && info.map((item, idx) => (
                            <p key={idx} className="text-[#ADB7BE] mb-2">{item}</p>
                        ))}
                    </div>
                    
                    {/* View Course Graph Button - Centered in Right Space */}
                    {slug && (
                        <div className="flex justify-center items-center w-[200px] mr-8">
                            <Link href={`/courses/${slug}`} onClick={(e) => e.stopPropagation()}>
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative flex flex-col items-center justify-center gap-3 px-10 py-6 bg-gradient-to-br from-primary-500/20 via-primary-600/15 to-secondary-500/20 border-2 border-primary-500/40 text-white font-bold rounded-xl hover:border-primary-400 hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 whitespace-nowrap group overflow-hidden"
                                >
                                    {/* Shimmer Effect on Hover */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                    
                                    {/* Enhanced Gradient on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 via-transparent to-secondary-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    <span className="text-lg relative z-10">View Course Graph</span>
                                    {/* Custom Asymmetrical Graph Icon */}
                                    <svg 
                                        className="w-16 h-16 relative z-10 group-hover:scale-110 transition-transform duration-300" 
                                        viewBox="0 0 64 64" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {/* Connection Lines - Asymmetrical Pattern */}
                                        <path d="M10 15L25 30M25 30L45 20M25 30L20 45M25 30L40 42M45 20L54 32M40 42L54 32M40 42L48 55M20 45L32 52" 
                                              stroke="currentColor" 
                                              strokeWidth="2" 
                                              strokeLinecap="round" 
                                              opacity="0.5"/>
                                        
                                        {/* Nodes - Various Sizes, Asymmetrical Layout */}
                                        <circle cx="10" cy="15" r="3.5" fill="currentColor" className="drop-shadow-lg"/>
                                        <circle cx="25" cy="30" r="5" fill="currentColor" className="drop-shadow-lg"/>
                                        <circle cx="45" cy="20" r="4" fill="currentColor" className="drop-shadow-lg"/>
                                        <circle cx="54" cy="32" r="3.5" fill="currentColor" className="drop-shadow-lg"/>
                                        <circle cx="20" cy="45" r="3" fill="currentColor" className="drop-shadow-lg"/>
                                        <circle cx="40" cy="42" r="4.5" fill="currentColor" className="drop-shadow-lg"/>
                                        <circle cx="48" cy="55" r="3" fill="currentColor" className="drop-shadow-lg"/>
                                        <circle cx="32" cy="52" r="3.5" fill="currentColor" className="drop-shadow-lg"/>
                                    </svg>
                                </motion.button>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Expandable Activities Section */}
                {activities && activities.length > 0 && (
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
                                    <h4 className="text-lg font-semibold text-white mb-4">Activities and Societies</h4>
                                    <div className="space-y-3">
                                        {activities.map((activity, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <span className="text-primary-500 mt-1">•</span>
                                                <p className="text-[#ADB7BE] text-sm leading-relaxed">{activity}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                )}
            </div>

            {/* Hover Widget at Bottom */}
            {activities && activities.length > 0 && (
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
            )}
        </div>
    );
};

export default EducationCard;
