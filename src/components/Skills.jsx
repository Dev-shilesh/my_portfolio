// src/components/SkillSection.jsx
import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const skills = [
    { name: 'React.js', icon: <FaReact className="text-sky-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-white" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-300" /> },
    { name: 'Python', icon: <FaPython className="text-gray-300" /> },
    { name: 'MySQL', icon: <FaDatabase className="text-gray-500" /> },
];

const SkillSection = () => {
    return (
        <section id="skills" className="min-h-screen bg-gray-900 text-white py-16 px-5 md:px-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-purple-400 mb-3 hover:text-white hover:transition duration-300">My Skills</h2>
                <p className="text-gray-400">Technologies I work with</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center ">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:-rotate-2 hover:bg-gray-700 hover:cursor-pointer"
                    >
                        <div className="text-5xl mb-3">{skill.icon}</div>
                        <p className="mt-1 text-lg font-semibold">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillSection;
