import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, isLarge, isMobile }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className={`group relative overflow-hidden rounded-3xl ${isLarge ? 'md:col-span-2' : ''
                }`}
        >
            <div className={`relative w-full ${isMobile ? 'min-h-[500px] md:min-h-[600px]' : 'min-h-[300px] md:min-h-[400px]'} bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center p-6`}>

                {/* Media Container (Phone Frame for Mobile) */}
                <div className={`relative overflow-hidden ${isMobile ? 'w-[280px] aspect-[9/19] rounded-[3rem] border-[8px] border-gray-800 dark:border-gray-700 shadow-2xl' : 'w-full h-full absolute inset-0'}`}>
                    {image ? (
                        (typeof image === 'string' && (
                            image.endsWith('.mp4') ||
                            image.includes('.mp4') ||
                            image.includes('p1') ||
                            image.includes('p3') ||
                            image.includes('p5') ||
                            image.includes('Recording')
                        )) ? (
                            <motion.video
                                src={image}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                            />
                        ) : (
                            <motion.img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            />
                        )
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5">
                            <span className="text-accent text-2xl font-bold">No Media</span>
                        </div>
                    )}

                    {!isMobile && (
                        /* Gradient Overlay for Landscape */
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    )}
                </div>

                {/* Content Overlay */}
                <div className={`${isMobile ? 'relative mt-8 w-full' : 'absolute inset-0 p-6 md:p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500'}`}>
                    {/* Tags */}
                    <div className={`flex flex-wrap gap-2 mb-4 ${!isMobile ? 'opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100' : ''}`}>
                        {tags.map((tag) => (
                            <span
                                key={`${name}-${tag.name}`}
                                className="px-3 py-1 bg-accent text-black text-xs font-bold rounded-full"
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className={`${isMobile ? 'text-gray-900 dark:text-white' : 'text-white'} font-black text-2xl md:text-3xl mb-2 ${!isMobile ? 'transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500' : ''}`}>
                        {name}
                    </h3>

                    {/* Description */}
                    <p className={`${isMobile ? 'text-gray-600 dark:text-gray-300' : 'text-gray-300'} text-sm md:text-base leading-relaxed mb-4 ${!isMobile ? 'opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 line-clamp-3' : ''}`}>
                        {description}
                    </p>

                    {/* Action Buttons */}
                    <div className={`flex gap-3 ${!isMobile ? 'opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200' : ''}`}>
                        <motion.a
                            href={source_code_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-accent transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            <span className="text-sm">Code</span>
                        </motion.a>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-4 py-2 bg-accent text-black rounded-full font-semibold hover:bg-gray-900 dark:hover:bg-white dark:hover:text-black transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm">Live</span>
                        </motion.button>
                    </div>
                </div>

                {/* Corner Accent */}
                {!isMobile && (
                    <div className="absolute top-0 right-0 w-20 h-20 bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-full" />
                )}
            </div>
        </motion.div>
    );
};

const Works = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = ["All", "Web", "Mobile", "3D", "Design"];

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(project =>
            project.tags.some(tag => tag.name.toLowerCase() === activeFilter.toLowerCase())
        );

    return (
        <div className="flex flex-col gap-12">
            {/* Header */}
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-accent uppercase tracking-widest`}>
                    My work
                </p>
                <h2 className={`${styles.sectionHeadText} text-gray-900 dark:text-white`}>
                    PROJECTS
                </h2>
            </motion.div>

            {/* Description */}
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='text-secondary dark:text-gray-300 text-[17px] md:text-[18px] max-w-3xl leading-[30px]'
            >
                Following projects showcase my skills and experience through
                real-world examples. Each project is briefly described with
                links to code repositories and live demos.
            </motion.p>

            {/* Filter Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
                {filters.map((filter) => (
                    <motion.button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === filter
                            ? 'bg-accent text-black shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                    >
                        {filter}
                    </motion.button>
                ))}
            </motion.div>

            {/* Bento Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFilter}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={`project-${activeFilter}-${index}`}
                            index={index}
                            {...project}
                            isLarge={index === 0 || (index === 2 && project.isMobile)}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* No Results */}
            {filteredProjects.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                >
                    <p className="text-secondary dark:text-gray-400 text-xl">
                        No projects found for this category.
                    </p>
                </motion.div>
            )}
        </div>
    );
};

export default SectionWrapper(Works, "work");
