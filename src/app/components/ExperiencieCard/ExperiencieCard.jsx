"use client";

const experiences = [
    {
        id: 1,
        startYear: 2020,
        endYear: 2022,
        companyName: "TechCorp",
        position: "Software Engineer",
        companyIcon: "/techcorp-icon.png", // Ruta del icono de la empresa
    },
    {
        id: 2,
        startYear: 2018,
        endYear: 2020,
        companyName: "Innovate Inc.",
        position: "Frontend Developer",
        companyIcon: "/innovate-icon.png",
    },
    {
        id: 3,
        startYear: 2018,
        endYear: 2020,
        companyName: "Innovate Inc.",
        position: "Frontend Developer",
        companyIcon: "/innovate-icon.png",
    },
    {
        id: 4,
        startYear: 2018,
        endYear: 2020,
        companyName: "Innovate Inc.",
        position: "Frontend Developer",
        companyIcon: "/innovate-icon.png",
    },
    // Agrega más experiencias según necesites
];

const ExperienceCard = () => {
    return (
        <div className="relative max-w-lg h-64 overflow-hidden bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 mx-auto mt-8">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white z-50">Experiencia Laboral</h1>
            <div className="absolute animate-scroll space-y-4">
                {experiences.map((exp) => (
                    <div
                        key={exp.id}
                        className="flex items-center space-x-4 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
                    >
                        <img
                            src={exp.companyIcon}
                            alt={exp.companyName}
                            className="h-10 w-10"
                        />
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                                {exp.companyName}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                {exp.position} ({exp.startYear} - {exp.endYear})
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;
