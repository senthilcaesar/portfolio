'use client';
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

interface DetailsProps {
  type?: string;
  time: string;
  place: string;
  info: string;
  link?: string;
}

const Details = ({ type, time, place, info, link }: DetailsProps) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full bg-light border border-solid border-dark rounded-2xl p-6 shadow-xl dark:bg-dark dark:border-light/25 dark:shadow-light/10"
      >
        {type && (
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-primary dark:text-primaryDark mb-2">
            {type}
          </h3>
        )}
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm block mb-4">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm text-justify">
            {info}
        </p>
        
        {link && (
          <div className="mt-4 w-full flex justify-end">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-primaryDark font-bold text-lg hover:underline md:text-base border border-primary dark:border-primaryDark px-4 py-1 rounded-lg hover:bg-primary hover:text-light dark:hover:bg-primaryDark dark:hover:text-dark transition-all duration-300"
            >
                View Certificate
            </a>
          </div>
        )}
      </motion.div>
    </li>
  );
};

const Education = () => {
    const ref = useRef(null);

  return (
    <div className="mt-8 mb-16">
      <h2 className="font-bold text-6xl mb-32 w-full text-center md:text-5xl xs:text-3xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="relative w-[90%] mx-auto md:w-full">
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Master of Science in Computer Science"
            time="Jan 2015 - Jan 2019"
            place="University of Massachusetts Boston"
            info="Courses: Advanced Algorithms, Algorithms in Bioinformatics, Analysis of Algorithm, Big Data Analytics, Linear Algebra, Calculus, Software Development and Design, Database Management, Computing Data Structure, Mathematical Logic"
          />
           <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
             <div className="flex flex-col items-center w-full">
               <div className="w-full border-t border-dark/25 dark:border-light/25 my-8"></div>
               <h3 className="capitalize font-bold text-3xl sm:text-2xl xs:text-xl mb-4 text-center">
                 Certifications
               </h3>
             </div>
          </li>
          
          <Details
            type="Mathematics for Machine Learning and Data Science"
            time="July 2024"
            place="DeepLearning.AI on Coursera"
            info="A comprehensive course covering fundamental mathematics toolkit of machine learning: calculus, linear algebra, statistics, and probability."
            link="https://www.coursera.org/account/accomplishments/specialization/UGB3ZMLH552L"
          />
          <Details
            type="Google Prompting Essentials"
            time="February 2025"
            place="Google on Coursera"
            info="AI agent design, Multimodal prompting, Prompt chaining, Prompt Design, Prompt evaluation and iteration, Responsible AI."
            link="https://coursera.org/share/af3d27b38f7b03039e89c2ff0703d84b"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
