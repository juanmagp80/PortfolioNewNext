"use client";

const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "CSS",
    "Tailwind CSS",
    // Agrega más habilidades según sea necesario
];

const SkillsCard = () => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 mx-auto mt-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Habilidades</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {skills.map((skill, index) => (
                    <li key={index} className="my-1">{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default SkillsCard;
