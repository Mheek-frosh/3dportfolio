import { motion, useMotionValue, useTransform } from "framer-motion";
import { styles } from "../styles";
import { useEffect, useState } from "react";
import { ChevronDown, Sparkles, Code, Palette, Rocket } from "lucide-react";
import developerImg from "../assets/developer.jpg";

const Hero = () => {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

    const sentences = [
        "Hi, welcome to my portfolio. Feel free to browse and contact me.",
        "I create stunning web and mobile applications.",
        "Let's build something amazing together.",
    ];

    // Typewriter effect with auto-loop
    useEffect(() => {
        const currentSentence = sentences[currentSentenceIndex];
        let i = 0;
        let isDeleting = false;

        const typeTimer = setInterval(() => {
            if (!isDeleting && i <= currentSentence.length) {
                // Typing
                setDisplayText(currentSentence.slice(0, i));
                i++;
            } else if (!isDeleting && i > currentSentence.length) {
                // Pause at end before deleting
                setTimeout(() => {
                    isDeleting = true;
                }, 2000);
            } else if (isDeleting && i > 0) {
                // Deleting
                i--;
                setDisplayText(currentSentence.slice(0, i));
            } else if (isDeleting && i === 0) {
                // Move to next sentence
                isDeleting = false;
                setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
                clearInterval(typeTimer);
            }
        }, isDeleting ? 50 : 80);

        return () => clearInterval(typeTimer);
    }, [currentSentenceIndex]);

    // Cursor blink
    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorTimer);
    }, []);

    // Mouse tracking
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Floating particles
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
    }));

    const scrollToContent = () => {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    };

    return (
        <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:from-black dark:via-gray-950 dark:to-black">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 50%, rgba(250, 204, 21, 0.3) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 50%, rgba(250, 204, 21, 0.3) 0%, transparent 50%)",
                            "radial-gradient(circle at 50% 80%, rgba(250, 204, 21, 0.3) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 50%, rgba(250, 204, 21, 0.3) 0%, transparent 50%)",
                        ],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Floating Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-accent/20"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Mouse Spotlight Effect */}
            <motion.div
                className="absolute w-96 h-96 rounded-full pointer-events-none"
                style={{
                    left: mousePosition.x - 192,
                    top: mousePosition.y - 192,
                    background: "radial-gradient(circle, rgba(250, 204, 21, 0.15) 0%, transparent 70%)",
                }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
            />

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 gap-10 lg:gap-20">
                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        className="absolute top-20 left-[10%]"
                        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    >
                        <Code className="w-12 h-12 text-accent/30" />
                    </motion.div>
                    <motion.div
                        className="absolute top-40 right-[15%]"
                        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                    >
                        <Palette className="w-16 h-16 text-accent/30" />
                    </motion.div>
                    <motion.div
                        className="absolute bottom-40 left-[20%]"
                        animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
                        transition={{ duration: 7, repeat: Infinity }}
                    >
                        <Rocket className="w-14 h-14 text-accent/30" />
                    </motion.div>
                    <motion.div
                        className="absolute top-1/3 right-[10%]"
                        animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
                        transition={{ duration: 8, repeat: Infinity }}
                    >
                        <Sparkles className="w-10 h-10 text-accent/30" />
                    </motion.div>
                </div>

                {/* Left: Hero Text Container */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-center lg:text-left flex-1"
                >
                    {/* Name Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/30 rounded-full mb-8 backdrop-blur-sm"
                    >
                        <Sparkles className="w-5 h-5 text-accent" />
                        <span className="text-accent font-bold uppercase tracking-wider text-sm">
                            Michael - Creative Developer
                        </span>
                    </motion.div>

                    {/* Main Heading with Typewriter */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight min-h-[120px] lg:min-h-0">
                        {displayText}
                        <span className={`text-accent ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
                            |
                        </span>
                    </h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0"
                    >
                        Crafting beautiful digital experiences with modern web technologies
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="flex flex-wrap gap-4 justify-center lg:justify-start"
                    >
                        <motion.a
                            href="#work"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(250, 204, 21, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-accent text-black font-bold rounded-full hover:bg-yellow-500 transition-all shadow-lg"
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-transparent border-2 border-accent text-accent font-bold rounded-full hover:bg-accent hover:text-black transition-all"
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right: Developer Image Container */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative flex-1 flex justify-center items-center"
                >
                    <div className="relative group">
                        {/* Glowing Background Effect */}
                        <div className="absolute inset-0 bg-accent rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

                        {/* Image Frame */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full border-4 border-accent p-2 overflow-hidden bg-gray-900 group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                        >
                            <img
                                src={developerImg}
                                alt="Michael - Developer"
                                className="w-full h-full object-cover object-[50%_20%] rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>

                        {/* Tech Stack Floaties around Image */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-4 border-2 border-dashed border-accent/20 rounded-full"
                        ></motion.div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.button
                    onClick={scrollToContent}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
                >
                    <span className="text-gray-400 text-sm uppercase tracking-wider group-hover:text-accent transition-colors">
                        Scroll to explore
                    </span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-accent rounded-full"
                        />
                    </motion.div>
                </motion.button>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="w-full h-full" style={{
                    backgroundImage: `linear-gradient(rgba(250, 204, 21, 0.5) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(250, 204, 21, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>
        </section>
    );
};

export default Hero;
