import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info, link }) => {
  const ref = useRef(null);
  const infoPoints = info.split("\n").filter((line) => line.trim() !== "");
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm ml-4">
          {time} | {place}
        </span>
        <ul className="list-disc list-inside space-y-2 ml-4">
          {infoPoints.map((point, index) => (
            <li key={index} className="text-base font-medium">
              {point}
            </li>
          ))}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "22px",
                color: "orange",
                textDecoration: "underline",
              }}
            >
              View Certificate
            </a>
          )}
        </ul>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Master of Science in Computer Science"
            time="Jan 2015 - Jan 2019"
            place="University of Massachusetts Boston"
            info="Relevant courses: Advanced Algorithms, Algorithms in Bioinformatics, Analysis of Algorithm, Big Data Analytics, Linear Algebra, Calculus, Software Development and Design, Database Management, Computing Data Structure, Mathematical Logic"
          />
          <Details
            type="Certification"
            time="July 2024"
            place="Mathematics for Machine Learning and Data Science by DeepLearning.AI on Coursera"
            info="A comprehensive course covering fundamental mathematics toolkit of machine learning: calculus, linear algebra, statistics, and probability."
            link="https://www.coursera.org/account/accomplishments/specialization/UGB3ZMLH552L"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
