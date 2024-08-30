"use client";

import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Mail as MailIcon, Phone as PhoneIcon } from '@mui/icons-material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from 'react';

const ProfileCard = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('your-email@example.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copy state after 2 seconds
    };

    const handleCall = () => {
        window.location.href = 'tel:+1234567890'; // Replace with your phone number
    };

    return (
        <div className="max-w-xs shadow-2xl dark:shadow-lg bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 mx-auto text-center mt-8 ml-44">
            {/* Foto */}
            <img
                src="/juanma.jpeg" // Replace with your photo path
                alt="Profile Photo"
                className="w-64 h-64 rounded-xl mx-auto"
            />
            {/* Nombre y Mano Saludando */}
            <h1 className="text-2xl font-bold mt-4 text-gray-800 dark:text-white flex items-center justify-center">
                Juanma Garrido
                <ThumbUpIcon className="h-6 w-6 ml-2 text-gray-800 dark:text-white" />
            </h1>
            <p className="text-gray-500 text-lg dark:text-gray-300 mt-2">Entusiasta de la programación web, con 2 años de experiencia realizando proyectos </p>
            {/* Botones */}
            <div className="mt-4 flex flex-col gap-2">
                <button
                    onClick={handleCall}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-blue-600 transition"
                >
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    Llamar
                </button>
                <button
                    onClick={handleCopyEmail}
                    className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-green-600 transition"
                >
                    <MailIcon className="h-5 w-5 mr-2" />
                    {copied ? 'Email Copiado!' : 'Copiar Email'}
                </button>
            </div>
            {/* Iconos de GitHub y LinkedIn */}
            <div className="mt-4 flex justify-center space-x-4">
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="h-6 w-6 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition" />
                </a>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="h-6 w-6 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition" />
                </a>
            </div>
        </div>
    );
};

export default ProfileCard;
