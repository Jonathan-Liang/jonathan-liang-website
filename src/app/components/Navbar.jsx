"use client";
import Link from "next/link";
import Image from "next/image";
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
                    ? 'bg-nord-1/90 backdrop-blur-md shadow-lg shadow-black/20 border border-nord-3 scale-[0.98]' 
                    : 'bg-nord-1 shadow-md shadow-black/10 border border-nord-2'
            }`}>
                <div className="flex items-center justify-between px-8 py-3.5 sm:px-10 sm:py-4 relative z-10 gap-x-8 sm:gap-x-12">
                    
                    {/* Profile Identity Area */}
                    <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                        <div className="flex flex-col sm:flex">
                            <span className="text-[17px] font-semibold text-nord-6 tracking-tight leading-tight" style={{WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', textRendering: 'optimizeLegibility'}}>
                                Jonathan Liang
                            </span>
                        </div>
                    </div>

                    <div className="mobile-menu block md:hidden">
                        {
                            !navbarOpen ? (
                                <button 
                                onClick={ () => setNavbarOpen(true)} 
                                className="flex items-center px-3 py-2 text-nord-6/80 hover:text-nord-6 transition-all duration-300 hover:scale-110">
                                    <Bars3Icon className="h-5 w-5" />
                                </button>
                            ) : (
                                <button 
                                onClick={ () => setNavbarOpen(false)} 
                                className="flex items-center px-3 py-2 text-nord-6/80 hover:text-nord-6 transition-all duration-300 hover:scale-110">
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
