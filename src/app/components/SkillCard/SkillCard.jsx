"use client";

const skills = [
    { name: "HTML5", icon: "/icons/html5.png" }, // Reemplaza con la ruta correcta de la imagen
    { name: "CSS3", icon: "/icons/css3.png" },
    { name: "JavaScript", icon: "/icons/javascript.png" },
    { name: "React", icon: "/icons/react.png" },
    { name: "Next.js", icon: "/icons/nextjs.png" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
    { name: "Node.js", icon: "/icons/nodejs.png" },
    { name: "PostgreSQL", icon: "/icons/postgresql.png" },
    { name: "Supabase", icon: "/icons/supabase.png" },
    // Agrega más tecnologías según necesites
];

const SkillsCard = () => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 mt-2 relative">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Habilidades</h2>
            <div className="grid grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="h-12 w-12 object-contain"
                        />
                        <p className="mt-2 text-gray-700 dark:text-gray-300">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsCard;
