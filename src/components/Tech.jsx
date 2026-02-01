import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const techStack = [
    {
        category: "Frontend",
        skills: [
            { name: "React", level: 95 },
            { name: "Next.js", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Framer Motion", level: 90 },
        ]
    },
    {
        category: "Mobile",
        skills: [
            { name: "Flutter", level: 90 },
            { name: "Dart", level: 88 },
            { name: "React Native", level: 80 },
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", level: 85 },
            { name: "Express", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "PostgreSQL", level: 75 },
            { name: "Firebase", level: 90 },
        ]
    },
    {
        category: "Tools & 3D",
        skills: [
            { name: "Three.js", level: 85 },
            { name: "Blender", level: 70 },
            { name: "Figma", level: 90 },
            { name: "Git", level: 95 },
            { name: "Docker", level: 75 },
        ]
    }
];

const Tech = () => {
    return (
        <div className="flex flex-col gap-12">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <p className="text-sm md:text-base text-accent uppercase tracking-widest font-bold">
                    My Skills
                </p>
                <h2 className={`${styles.sectionHeadText} text-gray-900 dark:text-white`}>
                    TECH STACK.
                </h2>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techStack.map((category, categoryIndex) => (
                    <motion.div
                        key={category.category}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                        className="relative group"
                    >
                        {/* Category Card */}
                        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 h-full">
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-accent">
                                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">                                 {category.category}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                        className="group/skill"
                                    >
                                        {/* Skill Name */}
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium text-black dark:text-white group-hover/skill:text-accent transition-colors">
                                                {skill.name}
                                            </span>
                                            <span className="text-gray-900 dark:text-white font-semibold">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{
                                                    delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                                                    duration: 0.8,
                                                    ease: "easeOut"
                                                }}
                                                className="h-full bg-gradient-to-r from-accent to-yellow-500 rounded-full"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Floating decoration */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full opacity-20 group-hover:opacity-40 transition-opacity"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Additional Info */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-8"
            >
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Constantly learning and exploring new technologies to build better experiences.
                </p>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Tech, "");
