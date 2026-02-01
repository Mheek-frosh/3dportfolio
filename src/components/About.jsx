import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Code Commits", value: "10K+" },
];

const skills = [
    "React", "Next.js", "TypeScript", "Node.js",
    "Flutter", "Dart", "Three.js", "Framer Motion",
    "Tailwind CSS", "Firebase", "MongoDB", "PostgreSQL",
    "Git", "Docker", "AWS", "Figma"
];

const About = () => {
    return (
        <div className="flex flex-col gap-16 mt-10">
            {/* Header Section */}
            <motion.div variants={textVariant()} className="space-y-6">
                <p className={`${styles.sectionSubText} text-accent uppercase tracking-widest`}>
                    Introduction
                </p>
                <h2 className={`${styles.sectionHeadText} text-black dark:text-white max-w-5xl leading-[1.05]`}>
                    I'M A CREATIVE DEVELOPER BUILDING{" "}
                    <span className="relative inline-block">
                        <span className="text-accent">DIGITAL</span>
                        <motion.span
                            className="absolute bottom-0 left-0 w-full h-1 bg-accent"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        />
                    </span>{" "}
                    EXPERIENCES.
                </h2>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Description */}
                <motion.div
                    variants={fadeIn("right", "", 0.1, 1)}
                    className="space-y-6"
                >
                    <p className='text-gray-700 dark:text-gray-300 text-[18px] md:text-[20px] leading-[32px]'>
                        I specialize in <span className="text-accent font-semibold">3D visuals</span>,
                        {" "}<span className="text-accent font-semibold">user interfaces</span>, and
                        {" "}<span className="text-accent font-semibold">web applications</span>.
                    </p>
                    <p className='text-gray-700 dark:text-gray-300 text-[18px] md:text-[20px] leading-[32px]'>
                        My work blends technical expertise with a keen eye for design, ensuring every pixel implies motion and every interaction feels weightless.
                    </p>

                    {/* Skill Tags */}
                    <div className="pt-6">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-4">Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.1, backgroundColor: "rgb(250, 204, 21)" }}
                                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-full text-sm font-medium cursor-pointer transition-colors duration-200 hover:text-black"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Column - Stats */}
                <motion.div
                    variants={fadeIn("left", "", 0.1, 1)}
                    className="grid grid-cols-2 gap-6"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 group overflow-hidden"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <motion.h3
                                    className="text-4xl md:text-5xl font-black text-accent mb-2"
                                    initial={{ scale: 0.5 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.2 }}
                                >
                                    {stat.value}
                                </motion.h3>
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Expertise Areas */}
            <motion.div
                variants={fadeIn("up", "", 0.2, 1)}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
            >
                <div className="relative p-8 border-l-4 border-accent bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900/50 dark:to-zinc-900/30 rounded-r-2xl group hover:shadow-xl transition-all duration-300">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-transparent opacity-50" />
                    <h3 className="text-3xl font-bold text-black dark:text-white mb-4 group-hover:text-accent transition-colors">
                        Frontend Development
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        React, Next.js, Three.js, Tailwind, Framer Motion. Building responsive, accessible, and performant interfaces that users love.
                    </p>
                </div>
                <div className="relative p-8 border-l-4 border-accent bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900/50 dark:to-zinc-900/30 rounded-r-2xl group hover:shadow-xl transition-all duration-300">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-transparent opacity-50" />
                    <h3 className="text-3xl font-bold text-black dark:text-white mb-4 group-hover:text-accent transition-colors">
                        Mobile & Design
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Flutter, Dart, Figma, Blender, UI/UX Principles. Creating cohesive design systems and immersive mobile experiences.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(About, "about");
