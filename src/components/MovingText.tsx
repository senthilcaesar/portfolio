"use client";
import { motion } from "framer-motion";
import React from "react";

const MovingText = () => {
  const text = "Currently Reading: \"Becoming a Data Head: How to Think, Speak, and Understand Data Science, Statistics, and Machine Learning by Alex J. Gutman\"";

  return (
    <div className="w-full overflow-hidden py-2 sm:mt-0 mb-4">
      <div className="relative flex whitespace-nowrap overflow-hidden bg-white/30 dark:bg-dark/30 backdrop-blur-md rounded-full border border-dark/10 dark:border-light/10 shadow-sm">
        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-light to-transparent dark:from-dark z-10 rounded-l-full" />
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-light to-transparent dark:from-dark z-10 rounded-r-full" />

        <motion.div
           className="flex items-center w-max"
           initial={{ x: "100%" }}
           animate={{ x: "-100%" }}
           transition={{
             repeat: Infinity,
             repeatType: "loop",
             duration: 20,
             ease: "linear",
           }}
        >
          <span className="text-xl md:text-lg sm:text-base font-medium text-dark/90 dark:text-light/90 px-4 inline-block tracking-wide">
            {text}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default MovingText;
