"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import CourseGraph from '../../components/CourseGraph';
import { institutionCourses, courseDescriptions } from '../../data/coursesData';

export default function CoursesPage({ params }) {
    const { slug } = params;
    const institution = institutionCourses[slug];

    if (!institution) {
        return (
            <div className="min-h-screen bg-[#121212] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Institution Not Found</h1>
                    <Link href="/" className="text-primary-500 hover:text-primary-400">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#121212] text-white">
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#181818] border-b border-primary-500/20"
            >
                <div className="container mx-auto px-8 py-6">
                    <Link 
                        href="/#about"
                        className="inline-flex items-center gap-2 text-[#ADB7BE] hover:text-white transition-colors duration-200 mb-4"
                    >
                        <ArrowLeftIcon className="w-4 h-4" />
                        Back to About
                    </Link>
                    <h1 className="text-4xl font-bold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-300">
                            {institution.name}
                        </span>
                    </h1>
                    <p className="text-[#ADB7BE] mt-2">Course Dependency Graph</p>
                </div>
            </motion.div>

            {/* Graph Container */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="container mx-auto px-8 py-8"
                style={{ height: 'calc(100vh - 120px)', minHeight: '800px' }}
            >
                <div className="bg-[#181818] border border-primary-500/20 rounded-xl overflow-hidden flex flex-col" style={{ height: '100%' }}>
                    <CourseGraph
                        courses={Object.values(institution.categories).flat()}
                        categories={institution.categories}
                        dependencies={institution.dependencies}
                        descriptions={courseDescriptions}
                    />
                </div>
            </motion.div>
        </div>
    );
}
