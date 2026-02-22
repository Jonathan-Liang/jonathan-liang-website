"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

const EducationCard = ({ title, degree, date, info, courses, courseCategories, slug }) => {
    return (
        <div 
            className="bg-[#181818] rounded-xl border border-[#33353F] overflow-hidden hover:border-primary-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-[1.02] transition-all duration-300 relative"
        >
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                        <p className="text-[#ADB7BE] mb-2">{degree}</p>
                        <p className="text-sm text-[#ADB7BE] mb-4">{date}</p>
                        {info && info.map((item, idx) => (
                            <p key={idx} className="text-[#ADB7BE] mb-2">{item}</p>
                        ))}
                    </div>
                </div>

                {/* View Course Graph Button */}
                {slug && (
                    <Link href={`/courses/${slug}`}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
                        >
                            <span>View Course Graph</span>
                            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        </motion.button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default EducationCard;
