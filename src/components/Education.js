import React, { useRef } from "react";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info, link }) => {
  const ref = useRef(null);
  const infoPoints = info.split("\n").filter((line) => line.trim() !== "");
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-full flex flex-col items-start justify-between"
    >
      <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
        {type}
      </h3>
      <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
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
    </li>
  );
};

const Education = () => {
  //const ref = useRef(null);

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <ul className="w-full flex flex-col items-start justify-between">
          <Details
            type="Master of Science in Computer Science"
            time="Jan 2015 - Jan 2019"
            place="University of Massachusetts Boston"
            info="Courses: Advanced Algorithms, Algorithms in Bioinformatics, Analysis of Algorithm, Big Data Analytics, Linear Algebra, Calculus, Software Development and Design, Database Management, Computing Data Structure, Mathematical Logic"
          />
          <li className="my-8 first:mt-0 last:mb-0 w-full flex flex-col items-start justify-between">
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
              Certifications
            </h3>
            <ul className="list-disc flex-col list-inside space-y-4 ml-8">
              <Details
                time="July 2024"
                place="Mathematics for Machine Learning and Data Science by DeepLearning.AI on Coursera"
                info="A comprehensive course covering fundamental mathematics toolkit of machine learning: calculus, linear algebra, statistics, and probability."
                link="https://www.coursera.org/account/accomplishments/specialization/UGB3ZMLH552L"
              />
              <Details
                time="February 2025"
                place="Google Prompting Essentials by Google on Coursera"
                info="AI agent design, Multimodal prompting, Prompt chaining, Prompt Design, Prompt evaluation and iteration, Responsible AI."
                link="https://coursera.org/share/af3d27b38f7b03039e89c2ff0703d84b"
              />
              {/*<Details
                time="September 2022"
                place="Machine Learning by Stanford University on Coursera"
                info="A foundational course covering supervised learning, unsupervised learning, best practices in machine learning, and practical advice for applying machine learning."
                link="https://www.coursera.org/account/accomplishments/specialization/XYZ123456"
              />
              <Details
                time="October 2021"
                place="Data Science Specialization by Johns Hopkins University on Coursera"
                info="A comprehensive course covering the concepts and tools needed throughout the data science pipeline, from asking the right kinds of questions to making inferences and publishing results."
                link="https://www.coursera.org/account/accomplishments/specialization/LMNOP12345"
              />*/}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
