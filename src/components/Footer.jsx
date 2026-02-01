import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative">
            {/* Back to Top Button */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-8 right-8 p-3 bg-accent hover:bg-yellow-500 text-black rounded-full shadow-lg transition-all z-50 group"
                aria-label="Back to top"
            >
                <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
            </motion.button>
        </footer>
    );
};

export default Footer;
