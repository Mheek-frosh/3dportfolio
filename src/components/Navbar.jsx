import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { Menu, X, Moon, Sun } from "lucide-react";

const Navbar = ({ theme, toggleTheme }) => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${styles.paddingX
                } w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${scrolled ? "bg-white/70 dark:bg-black/70 backdrop-blur-lg shadow-sm" : "bg-transparent"
                }`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                {/* Logo Area */}
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className={`${scrolled ? "text-black dark:text-white" : "text-white"} text-[18px] font-bold cursor-pointer tracking-tight`}>
                        Codewithmike<span className='text-accent'>.</span>
                    </p>
                </Link>

                {/* Desktop Nav - Centered/Right leaning */}
                <div className="hidden sm:flex flex-row items-center gap-8 bg-white/50 dark:bg-black/50 px-8 py-3 rounded-full backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg">
                    <ul className='list-none flex flex-row gap-8'>
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`${active === nav.title ? "text-accent-red" : (scrolled ? "text-black dark:text-white" : "text-white")
                                    } text-[16px] font-medium cursor-pointer hover:text-accent-red transition-colors`}
                                onClick={() => setActive(nav.title)}
                            >
                                {nav.isExternal ? (
                                    <a href={nav.link} target="_blank" rel="noopener noreferrer">
                                        {nav.title}
                                    </a>
                                ) : (
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="w-[1px] h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <Moon size={18} color={scrolled ? "black" : "white"} /> : <Sun size={18} color="white" />}
                    </button>
                </div>

                {/* Mobile Nav */}
                <div className='sm:hidden flex flex-1 justify-end items-center gap-4'>
                    <button
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? <Moon size={20} color={scrolled ? "black" : "white"} /> : <Sun size={20} color="white" />}
                    </button>

                    <div className='w-[28px] h-[28px] object-contain cursor-pointer flex items-center justify-center' onClick={() => setToggle(!toggle)} >
                        {toggle ? <X color={(!scrolled || theme === 'dark') ? "white" : "black"} /> : <Menu color={(!scrolled || theme === 'dark') ? "white" : "black"} />}
                    </div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 bg-white dark:bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-card ring-1 ring-black/5 dark:ring-white/10`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-accent" : "text-secondary"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    {nav.isExternal ? (
                                        <a href={nav.link} target="_blank" rel="noopener noreferrer">
                                            {nav.title}
                                        </a>
                                    ) : (
                                        <a href={`#${nav.id}`}>{nav.title}</a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
