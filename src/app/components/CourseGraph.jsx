"use client";
import React from 'react';

const COURSE_SECTIONS = [
  {
    title: "AI / ML",
    courses: [
      { code: "CS 7643", title: "Deep Learning" },
      { code: "CS 4476", title: "Introduction to Computer Vision" },
      { code: "CS 4641", title: "Machine Learning" },
      { code: "CS 3630", title: "Introduction to Perception and Robotics" },
      { code: "CS 3600", title: "Introduction to Artificial Intelligence" },
    ]
  },
  {
    title: "Systems / Networking",
    courses: [
      { code: "CS 4675", title: "Internet Computing Systems, Services and Applications" },
      { code: "CS 3251", title: "Computer Networking I" },
      { code: "CS 2200", title: "Systems and Networks" },
      { code: "CS 2110", title: "Computer Organization & Programming" },
    ]
  },
  {
    title: "Software",
    courses: [
      { code: "CS 3510", title: "Design & Analysis of Algorithms" },
      { code: "CS 4400", title: "Introduction to Database Systems" },
      { code: "CS 2340", title: "Objects and Design" },
      { code: "CS 1332", title: "Data Structures & Algorithms" },
      { code: "CS 1331", title: "Intro to Object-Oriented Programming" },
    ]
  },
  {
    title: "Theory / Math",
    span: 2,
    courses: [
      { code: "MATH 3012", title: "Applied Combinatorics" },
      { code: "CS 2050", title: "Intro to Discrete Mathematics for Computer Science" },
      { code: "ISYE 3770", title: "Statistics & Applications" },
      { code: "MATH 2551", title: "Multivariable Calculus" },
      { code: "MATH 1552", title: "Integral Calculus" },
      { code: "MATH 1551", title: "Differential Calculus" },
      { code: "PHYS 2212", title: "Intro Physics II" },
      { code: "PHYS 2211", title: "Intro Physics I" },
    ]
  },
  {
    title: "Professional",
    courses: [
      { code: "VIP 4602", title: "Agile Communications Architectures" },
      { code: "LMC 3403", title: "Technical Communication, Theory and Practice" },
      { code: "CS 3001", title: "Computing & Society" },
    ]
  }
];

const CourseCard = ({ code, title }) => (
  <div className="bg-nord-1 border border-nord-3 rounded-lg px-3 py-0 shadow hover:border-primary-500/50 hover:bg-[#1f1f1f] transition-all duration-300 w-full h-[4.5rem] flex flex-col justify-center overflow-hidden">
    <div className="font-mono text-[11px] text-primary-400 mb-0.5 shrink-0">{code}</div>
    <div className="text-sm text-nord-5 leading-tight line-clamp-2" title={title}>{title}</div>
  </div>
);

const Section = ({ title, courses, span }) => (
  <div className={`flex flex-col h-full bg-[#1e1e1e] bg-opacity-40 p-6 rounded-2xl border border-gray-800/60 shadow-sm ${span === 2 ? 'md:col-span-2' : ''}`}>
    <h3 className="text-xl font-bold text-nord-6 mb-6 border-b border-gray-700/50 pb-3">
      {title}
    </h3>
    <div className={`flex-grow gap-3 ${span === 2 ? 'grid grid-cols-1 sm:grid-cols-2 grid-rows-4' : 'flex flex-col'}`}>
      {courses.map((course, idx) => (
        <CourseCard key={`${course.code}-${idx}`} code={course.code} title={course.title} />
      ))}
    </div>
  </div>
);

const CourseGraph = () => {
  return (
    <div className="w-full h-full bg-nord-0 py-8 px-2 sm:px-4">
      {/* Grid Layout for sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {COURSE_SECTIONS.map((section) => (
          <Section key={section.title} title={section.title} courses={section.courses} span={section.span} />
        ))}
      </div>
    </div>
  );
};

export default CourseGraph;
