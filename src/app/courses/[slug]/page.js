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
            <div className="min-h-screen bg-nord-0 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-nord-6 mb-4">Institution Not Found</h1>
                    <Link href="/" className="text-primary-500 hover:text-primary-400">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-nord-0 text-nord-6">
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-nord-1 border-b border-nord-3"
            >
                <div className="container mx-auto px-8 py-6">
                    <Link 
                        href="/#about"
                        className="inline-flex items-center gap-2 text-nord-4 hover:text-nord-6 transition-colors duration-200 mb-4"
                    >
                        <ArrowLeftIcon className="w-4 h-4" />
                        Back to About
                    </Link>
                    <h1 className="text-4xl font-bold">
                        <span className="text-nord-8">
                            {institution.name}
                        </span>
                    </h1>
                    <p className="text-nord-4 mt-2">Course Dependency Graph</p>
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
                <div className="bg-nord-1 border border-nord-3 rounded-xl overflow-hidden flex flex-col" style={{ height: '100%' }}>
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
