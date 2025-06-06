import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Job Portal Web App",
        description: "A MERN stack job portal with authentication, job filtering, admin controls, and dashboard.",
        demo: "https://your-job-portal-demo-link.netlify.app",
        code: "https://github.com/shileshmavchi/job-portal",
    },
    {
        title: "Online Shopping App",
        description: "A full-stack shopping platform with cart, product search, and payment integration.",
        demo: "https://your-shopping-demo.netlify.app",
        code: "https://github.com/shileshmavchi/shopping-app",
    },
    {
        title: "Video Editor App",
        description: "React-based video editor with trimming, cropping, and basic video effects.",
        demo: "#",
        code: "https://github.com/shileshmavchi/video-editor",
    },
    {
        title: "Jokes Generator App 🤣",
        description: "A fun app that fetches random jokes using a public API with category filters and punchlines!",
        demo: "https://your-jokes-app-demo-link.netlify.app",
        code: "https://github.com/shileshmavchi/jokes-generator-app",
    },
    {
        title: "Paper Scissors Game ✊✋✌️",
        description: "A simple and fun Rock Paper Scissors game using React with score tracking and animations.",
        demo: "https://your-paper-scissors-demo.netlify.app",
        code: "https://github.com/shileshmavchi/paper-scissors-game",
    },
    {
        title: "Currency Converter App 💱",
        description: "A currency converter that fetches real-time exchange rates and converts between multiple currencies.",
        demo: "https://your-currency-converter-demo.netlify.app",
        code: "https://github.com/shileshmavchi/currency-converter-app",
    }, 

];

const Projects = () => {
    return (
        <section id="projects" className="bg-gray-950 text-white py-16 px-4 sm:px-10 min-h-screen">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold text-purple-400 mb-12"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    My Projects
                </motion.h2>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700 hover:scale-105 transition-transform duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold text-purple-300 mb-3">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                            <div className="flex justify-center gap-4">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 text-sm rounded-md"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-purple-500 px-4 py-2 text-sm rounded-md hover:bg-purple-600"
                                >
                                    Source Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
