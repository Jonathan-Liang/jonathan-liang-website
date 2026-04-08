"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseGraph from './CourseGraph';
import {
    ShieldCheckIcon,
    ChartBarIcon,
    GlobeAltIcon,
    LightBulbIcon,
    AcademicCapIcon,
    SparklesIcon,
    TrophyIcon
} from '@heroicons/react/24/outline';

const getActivityProps = (activity) => {
    const text = activity.toLowerCase();
    if (text.includes('sga') || text.includes('security')) {
        return { Icon: ShieldCheckIcon, category: 'Infrastructure & Security' };
    }
    if (text.includes('swim')) {
        return { Icon: TrophyIcon, category: 'Athletics & Leadership' };
    }
    if (text.includes('teaching')) {
        return { Icon: AcademicCapIcon, category: 'Academic Leadership' };
    }
    if (text.includes('data science')) {
        return { Icon: ChartBarIcon, category: 'Academic Organization' };
    }
    if (text.includes('vietnamese') || text.includes('chinese')) {
        return { Icon: GlobeAltIcon, category: 'Cultural Organization' };
    }
    if (text.includes('tedx')) {
        return { Icon: LightBulbIcon, category: 'Event Leadership' };
    }
    return { Icon: SparklesIcon, category: 'Campus Involvement' };
};

const ExpandableSection = ({ title, subtitle, previewChips, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div 
            className="mt-6 bg-nord-0 rounded-xl border border-[#33353F] overflow-hidden hover:border-primary-500/60 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer relative group"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            {/* Subtle top glow highlight on hover */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-nord-4/0 to-transparent group-hover:via-nord-4/50 transition-all duration-500" />

            <div className="p-5 md:p-6">
                <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                        <h4 className="text-xl font-semibold text-nord-6 group-hover:text-primary-400 transition-colors">{title}</h4>
                        {subtitle && <p className="text-base text-nord-4 mt-1">{subtitle}</p>}
                        
                        <AnimatePresence>
                            {!isExpanded && previewChips && previewChips.length > 0 && (
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex flex-wrap gap-2 overflow-hidden"
                                >
                                    {previewChips.map((chip, idx) => {
                                        const isHighlight = chip.startsWith('+');
                                        return (
                                            <span key={idx} className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${isHighlight ? 'bg-primary-500/10 border-primary-500/30 text-primary-400 font-medium group-hover:bg-primary-500/20 group-hover:border-primary-500/50' : 'bg-nord-1 border-[#33353F] text-nord-4 group-hover:border-[#444] group-hover:text-nord-6'}`}>
                                                {chip}
                                            </span>
                                        );
                                    })}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-nord-1 border border-[#33353F] group-hover:border-primary-500/50 group-hover:bg-primary-500/10 transition-colors flex-shrink-0 mt-1">
                        <motion.svg
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2} 
                            stroke="currentColor" 
                            className="w-4 h-4 text-nord-4 group-hover:text-primary-400"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </motion.svg>
                    </div>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="pt-6 mt-4 border-t border-[#33353F]/50">
                                {children}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const EducationCard = ({ title, degree, date, info, activities, slug }) => {
    const isPrimary = slug === 'georgia-tech';

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className={`bg-nord-1 rounded-xl border ${
                isPrimary 
                    ? 'border-primary-500/30 shadow-[0_0_40px_rgba(59,130,246,0.08)]' 
                    : 'border-[#33353F]'
            } overflow-hidden relative transition-all duration-300`}
        >
            {/* Subtle top indicator for primary item */}
            {isPrimary && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-nord-8 via-nord-9 to-nord-8 opacity-80" />
            )}

            <div className={`p-6 md:p-8 ${isPrimary ? 'pt-7 md:pt-9' : ''}`}>
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h3 className={`text-2xl md:text-3xl font-bold tracking-tight ${
                                isPrimary 
                                    ? 'text-nord-6 drop-shadow-sm' 
                                    : 'text-nord-6'
                            }`}>
                                {title}
                            </h3>
                            {isPrimary && (
                                <span className="px-3 py-1 text-sm font-semibold rounded-full bg-primary-500/10 text-primary-400 border border-nord-3 shadow-sm animate-pulse-slow">
                                    Current
                                </span>
                            )}
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 text-base md:text-lg text-nord-4 font-medium mt-3">
                            <span className="flex items-center gap-1.5 text-nord-6">
                                <AcademicCapIcon className="w-6 h-6 text-primary-400" />
                                {degree}
                            </span>
                            <span className="text-nord-4/50">•</span>
                            <span>{date}</span>
                        </div>

                        {info && info.length > 0 && (
                            <div className="flex flex-wrap items-center mt-2 text-base md:text-lg text-nord-4">
                                {info.map((item, idx) => {
                                    const parts = item.split(':');
                                    const isLast = idx === info.length - 1;
                                    
                                    return (
                                        <React.Fragment key={idx}>
                                            <span className="flex items-center mt-1">
                                                {parts.length > 1 ? (
                                                    <>
                                                        <span className={isPrimary ? "text-primary-400/90 font-medium" : "text-nord-4 font-medium"}>{parts[0]}:</span>
                                                        <span className="text-nord-5 ml-1">{parts.slice(1).join(':')}</span>
                                                    </>
                                                ) : (
                                                    <span className="text-nord-5 font-medium">{item}</span>
                                                )}
                                            </span>
                                            {!isLast && <span className="text-nord-4/50 font-bold mx-2 mt-1">/</span>}
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>

                {slug === 'georgia-tech' && (
                    <ExpandableSection 
                        title="Relevant Coursework"
                        subtitle="Interactive graph of computing coursework and prerequisites."
                        previewChips={[
                            'CS 7643 Deep Learning',
                            'CS 4476 Introduction to Computer Vision',
                            'CS 4641 Machine Learning',
                            'CS 4675 Internet Computing Systems, Services and Applications',
                            'CS 3251 Computer Networking I',
                            'CS 3510 Design & Analysis of Algorithms',
                            'CS 4400 Introduction to Database Systems',
                            'MATH 3012 Applied Combinatorics',
                            'VIP 4602 Agile Communications Architectures',
                            '+ 16 more'
                        ]}
                    >
                        <div className="w-full bg-nord-1 rounded-xl border border-gray-800/60 overflow-hidden">
                            <CourseGraph />
                        </div>
                    </ExpandableSection>
                )}

                {activities && activities.length > 0 && (
                    <ExpandableSection 
                        title="Campus Involvement"
                        subtitle="Leadership roles, student organizations, and extracurriculars."
                        previewChips={activities}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {activities.map((activity, idx) => {
                                const { Icon, category } = getActivityProps(activity);
                                return (
                                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-nord-1 border border-[#33353F] hover:border-primary-500/50 hover:bg-[#1f1f1f] transition-all group">
                                        <div className="w-12 h-12 rounded-lg bg-nord-0 border border-[#33353F] flex items-center justify-center flex-shrink-0 group-hover:border-primary-500/30 transition-colors">
                                            <Icon className="w-6 h-6 text-nord-4 group-hover:text-primary-500 transition-colors" />
                                        </div>
                                        <div className="flex flex-col flex-1 justify-center min-w-0">
                                            <p className="text-base font-medium text-nord-6 leading-tight truncate whitespace-normal line-clamp-2" title={activity}>
                                                {activity}
                                            </p>
                                            <p className="text-sm text-primary-400/80 mt-1">
                                                {category}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </ExpandableSection>
                )}
            </div>
        </motion.div>
    );
};

export default EducationCard;
