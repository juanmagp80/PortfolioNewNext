"use client";
import { EnvelopeIcon, FolderIcon, HomeIcon, MoonIcon, SunIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            if (darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        }
    }, [darkMode, mounted]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    if (!mounted) {
        return null;
    }

    return (
        <nav className="bg-white dark:bg-gray-800 mt-4 max-w-6xl mx-auto shadow-2xl dark:shadow-lg rounded-xl p-4 transition-transform transform">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800 dark:text-white">
                    <Link href="/">Juanma Garrido</Link>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="flex items-center text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md transition-colors">
                            <HomeIcon className="h-5 w-5 mr-2" /> Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="flex items-center text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md transition-colors">
                            <UserIcon className="h-5 w-5 mr-2" /> Acerca de mí
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="flex items-center text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md transition-colors">
                            <FolderIcon className="h-5 w-5 mr-2" /> Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="flex items-center text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md transition-colors">
                            <EnvelopeIcon className="h-5 w-5 mr-2" /> Contacto
                        </Link>
                    </li>
                </ul>
                <button
                    onClick={toggleTheme}
                    className="flex items-center hover:bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-2 rounded-md transition-colors"
                >
                    {darkMode ? <SunIcon className="h-5 w-5 mr-2" /> : <MoonIcon className="h-5 w-5 mr-2" />}

                </button>
            </div>
        </nav>
    );
};

export default Navbar;
