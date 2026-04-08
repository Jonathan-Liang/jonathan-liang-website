import React from "react";
import Link from "next/link";

const DumbbellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-36 h-36 md:w-48 md:h-48 text-nord-4 group-hover:text-nord-8 transition-all duration-500">
    <path d="M6 5 L6 19 M18 5 L18 19 M6 12 L18 12 M2 9 L2 15 M22 9 L22 15" />
    <rect x="4" y="5" width="4" height="14" rx="1" />
    <rect x="16" y="5" width="4" height="14" rx="1" />
    <path d="M8 12 L16 12" strokeWidth="2" />
    <rect x="2" y="8" width="2" height="8" rx="0.5" />
    <rect x="20" y="8" width="2" height="8" rx="0.5" />
  </svg>
);

const FlightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-36 h-36 md:w-48 md:h-48 text-nord-4 group-hover:text-nord-8 transition-all duration-500">
    <path d="M12 2 C 12 2 10 4 10 7 L 10 13 L 3 17 L 3 19 L 10 17 L 10 20 L 7 22 L 7 23 L 12 22 L 17 23 L 17 22 L 14 20 L 14 17 L 21 19 L 21 17 L 14 13 L 14 7 C 14 4 12 2 12 2 Z" />
  </svg>
);

const PendulumIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-36 h-36 md:w-48 md:h-48 text-nord-4 group-hover:text-nord-8 transition-all duration-500">
    {/* Ceiling mount */}
    <line x1="12" y1="2" x2="12" y2="4" strokeWidth="2" />
    <line x1="6" y1="4" x2="18" y2="4" strokeWidth="2" />
    
    {/* Arch path */}
    <path d="M6 16 A 10 10 0 0 0 18 16" strokeDasharray="2 4" strokeOpacity="0.4" />
    
    {/* Center active pendulum */}
    <line x1="12" y1="4" x2="16" y2="15" />
    <circle cx="16" cy="15" r="3.5" fill="currentColor" stroke="none" />
  </svg>
);

const SignalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-36 h-36 md:w-48 md:h-48 text-nord-4 group-hover:text-nord-8 transition-all duration-500">
    <path d="M12 20 L12 9" />
    <path d="M9 20 L15 20" strokeWidth="1.5" />
    <path d="M10 16 L14 16" strokeWidth="1.5" />
    <path d="M11 12 L13 12" strokeWidth="1.5" />
    <circle cx="12" cy="7" r="2" fill="currentColor" stroke="none" />
    <path d="M8 7 A 4 4 0 0 0 8 11" strokeOpacity="0.8" />
    <path d="M16 7 A 4 4 0 0 1 16 11" strokeOpacity="0.8" />
    <path d="M5 4 A 8 8 0 0 0 5 14" strokeOpacity="0.5" />
    <path d="M19 4 A 8 8 0 0 1 19 14" strokeOpacity="0.5" />
  </svg>
);

const getIcon = (id) => {
  switch(id) {
    case 1: return <DumbbellIcon />;
    case 2: return <FlightIcon />;
    case 3: return <PendulumIcon />;
    case 4: return <SignalIcon />;
    default: return <SignalIcon />;
  }
};

const ProjectCard = ({ id, title, description, previewUrl }) => {
return (
    <Link href={previewUrl} className="group outline-none focus:outline-none block h-full">
        <div className="flex flex-col h-full rounded-xl border border-nord-3 overflow-hidden group-hover:border-nord-8 transform transition-all duration-300 group-hover:scale-[1.02] cursor-pointer shadow-sm shadow-nord-0 bg-nord-1">
            <div className="h-52 md:h-64 w-full flex items-center justify-center bg-nord-0 border-b border-nord-3 group-hover:border-nord-8 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-nord-0 to-nord-1/50 transition-opacity duration-500 opacity-80 group-hover:opacity-100"></div>
                <div className="z-10 flex items-center justify-center w-full h-full transition-transform duration-500 group-hover:scale-105 drop-shadow-xl text-nord-8">
                    {getIcon(id)}
                </div>
            </div>
            <div className="text-nord-6 py-6 px-4 flex-grow flex flex-col">
                <h5 className="text-xl font-semibold mb-2 group-hover:text-nord-8 transition-colors duration-500">{title}</h5>
                <p className="text-nord-4 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    </Link>
);
};

export default ProjectCard;