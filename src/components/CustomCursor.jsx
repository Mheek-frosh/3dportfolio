import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <>
            {/* Big Main Apple-style Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-16 h-16 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference opacity-90 backdrop-blur-sm"
                animate={{
                    x: mousePosition.x - 32,
                    y: mousePosition.y - 32,
                }}
                transition={{
                    type: "tween",
                    ease: "backOut",
                    duration: 0.15
                }}
            />

            {/* Small Center Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-black dark:bg-white rounded-full pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
                transition={{
                    type: "tween",
                    duration: 0
                }}
            />
        </>
    );
};

export default CustomCursor;
