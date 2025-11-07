"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react"
import { AnimatePresence } from "framer-motion"


export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Scroll position check
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        key="scrollBtn"
                        onClick={scrollToTop}
                        title="Go to top"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-10 h-10 fixed bottom-10 right-8 z-50 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 hover:scale-110 transition-all"
                    >
                        <motion.div
                            animate={{
                                y: [0, -6, 0], // up & down motion
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="text-xl"
                        >
                            ↑
                        </motion.div>
                        
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}
