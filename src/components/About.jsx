import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section
            id="about"
            className="w-full min-h-screen bg-gray-950 text-white flex items-center justify-center px-6 sm:px-12"
        >
            <motion.div
                className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
            >
                {/* Left: Text */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-4xl sm:text-5xl font-bold text-purple-400 mb-6 tracking-wide relative inline-block">
                        <span className="relative z-10">About Me</span>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 animate-pulse rounded-full z-0" />
                    </h2>

                    <motion.p
                        className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1.5 }}
                    >
                        I'm <span className="text-purple-400 font-medium">Shilesh Mavchi</span>, a passionate Full Stack Developer with expertise in
                        <span className="text-orange-400"> React.js</span>, <span className="text-cyan-400">Node.js</span>, and modern frameworks like
                        Tailwind CSS. I enjoy building smooth, responsive, and user-friendly web applications. I love solving complex problems and crafting
                        creative, meaningful experiences on the web.
                    </motion.p>
                </div>

                {/* Right: Image */}
                {/* Right: Image with animated colorful ring */}
                {/* Image with animated border ring */}
                <motion.div
                    className="relative w-80 h-80 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    {/* Animated rotating colorful ring */}
                    <div className="absolute w-full h-full rounded-full border-gradient animate-spin-slow" />

                    {/* Profile Image */}
                    <img
                        src="https://i.pravatar.cc/300"
                        alt="Shilesh Mavchi"
                        className="w-72 h-72 object-cover rounded-full border-4 border-gray-900 shadow-2xl z-10"
                    />
                </motion.div>


            </motion.div>
        </section>
    );
};

export default About;
