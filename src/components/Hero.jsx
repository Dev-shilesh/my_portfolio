import React from "react";
import { motion } from "framer-motion";
// import { NET } from "vanta/dist/vanta.net.min.js";

const Hero = () => {
    // useEff            
    return (
        <section className="w-full h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center px-4" id="main">
            <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                {/* Left: Text */}
                <div className="text-center md:text-left flex-1">
                    <motion.h1
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", stiffness: 70 }}
                        className="text-4xl sm:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
                    >
                        Hello, I'm Shilesh.dev
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="text-lg sm:text-xl text-gray-300 max-w-xl mb-6"
                    >
                        A Passionate Full Stack Developer — I craft interactive web apps using React, Tailwind, and Node.js.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-full text-white font-semibold shadow-lg"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 border border-purple-500 hover:bg-purple-600 transition rounded-full text-white font-semibold shadow-lg"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                {/* Right: Profile Image */}
                <motion.div
                    className="relative w-96 h-96 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    <img
                        src="https://i.pravatar.cc/300"
                        alt="Shilesh Mavchi"
                        className="w-96 h-96 object-cover rounded-full border-4 border-gray-900 shadow-2xl z-10"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
