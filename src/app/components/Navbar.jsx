"use client";
import Link from "next/link";
import React, { useState, useEffect} from "react";
import Navlink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "Home",
        path: "#home",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Determine if scrolled past threshold
            setScrolled(currentScrollY > 50);
            
            // Show/hide based on scroll direction - less aggressive
            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
                setVisible(false);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-10 transition-all duration-500 ease-out ${visible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-24 opacity-0 scale-95'}`}>
            <div className={`rounded-2xl transition-all duration-500 ease-out relative ${
                scrolled 
                    ? 'bg-[#121212] shadow-2xl shadow-primary-500/20 border-2 border-primary-500/30 scale-[0.98]' 
                    : 'bg-[#121212] shadow-xl shadow-primary-500/10 border-2 border-primary-500/20'
            }`}>
                {/* Gradient glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-secondary-500/0 opacity-50 pointer-events-none"></div>
                <div className="flex items-center justify-between px-8 py-3 relative z-10">
                    <div className="text-lg font-semibold text-white tracking-tight mr-8" style={{WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', textRendering: 'optimizeLegibility'}}>
                        Jonathan Liang
                    </div>
                    <div className="mobile-menu block md:hidden">
                        {
                            !navbarOpen ? (
                                <button 
                                onClick={ () => setNavbarOpen(true)} 
                                className="flex items-center px-3 py-2 text-white/80 hover:text-white transition-all duration-300 hover:scale-110">
                                    <Bars3Icon className="h-5 w-5" />
                                </button>
                            ) : (
                                <button 
                                onClick={ () => setNavbarOpen(false)} 
                                className="flex items-center px-3 py-2 text-white/80 hover:text-white transition-all duration-300 hover:scale-110">
                                    <XMarkIcon className="h-5 w-5" />
                                </button>
                            )
                        }
                    </div>
                    <div className="menu hidden md:block" id="navbar">
                        <ul className="flex space-x-2">
                            {
                                navLinks.map((link, index) => (
                                    <li key={index}>
                                        <Navlink href={link.path} title={link.title}></Navlink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null }
        </nav>
    )
}

export default Navbar
