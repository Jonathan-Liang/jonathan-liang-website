"use client";
import Link from "next/link";
import React, { useState} from "react";
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

    return (
        <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212]/95 backdrop-blur-sm border-b border-[#33353F]">
            <div className="flex container lg:py-4 items-center justify-between mx-auto px-4 py-3">
                <Link 
                    href={"/"} 
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent hover:from-blue-400 hover:to-cyan-300 transition-all duration-300"
                >
                    JL
                </Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? (
                            <button 
                            onClick={ () => setNavbarOpen(true)} 
                            className="flex items-center px-3 py-2 border-2 rounded-lg border-blue-500/50 text-blue-400 hover:text-blue-300 hover:border-blue-400 transition-all duration-200">
                                <Bars3Icon className="h-6 w-6" />
                            </button>
                        ) : (
                            <button 
                            onClick={ () => setNavbarOpen(false)} 
                            className="flex items-center px-3 py-2 border-2 rounded-lg border-blue-500/50 text-blue-400 hover:text-blue-300 hover:border-blue-400 transition-all duration-200">
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-2 mt-0">
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
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null }
        </nav>
    )
}

export default Navbar
