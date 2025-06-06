import React from 'react';
import { FaCode, FaServer, FaMobileAlt, FaCloud } from 'react-icons/fa';

const servicesData = [
    {
        icon: <FaCode />,
        title: "Frontend Development",
        description:
            "Creating stunning, responsive user interfaces using React.js and Tailwind CSS.",
        color: "from-purple-500 to-indigo-600",
    },
    {
        icon: <FaServer />,
        title: "Backend Development",
        description:
            "Building secure and scalable REST APIs with Node.js, Express & MongoDB.",
        color: "from-pink-500 to-red-600",
    },
    {
        icon: <FaMobileAlt />,
        title: "Mobile Friendly Design",
        description:
            "Designing seamless mobile experiences with responsive layouts.",
        color: "from-green-400 to-teal-600",
    },
    {
        icon: <FaCloud />,
        title: "Deployment & Hosting",
        description:
            "Deploying projects smoothly on platforms like Netlify, Vercel, and Render.",
        color: "from-yellow-400 to-orange-500",
    },
];


const Services = () => {
    return (
        <section id="services" className="bg-gray-900 py-16 px-6 md:px-20 text-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold mb-12 tracking-wide uppercase">
                    What I <span className="text-indigo-500">Offer</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {servicesData.map(({ icon, title, description, color }, index) => (
                        <div
                            key={index}
                            className={`group bg-gradient-to-br ${color} rounded-3xl p-8 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-rotate-2`}
                        >
                            <div
                                className="mb-6 mx-auto p-5 bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center text-black text-3xl drop-shadow-lg group-hover:bg-opacity-30"
                            >
                                {icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{title}</h3>
                            <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
