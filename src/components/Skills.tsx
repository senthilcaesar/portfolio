'use client';
import { motion } from "framer-motion";
import React, { useRef } from "react";

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

const Skill = ({ name, x, y }: SkillProps) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="cursor-pointer w-max origin-center absolute 
       font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
       "
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <>
      <h2 className="font-bold text-8xl mt-40 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        ref={ref}
        className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark flex items-center justify-center 
      mb-64 md:mb-32 rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      "
      >
        💡
        <Skill name="Python" x="-18vw" y="-2vw" />
        <Skill name="scikit-learn" x="-10vw" y="-2vw" />
        <Skill name="CI/CD" x="-35vw" y="-6vw" />
        <Skill name="MATLAB" x="-25vw" y="-6vw" />
        <Skill name="Linux" x="-9vw" y="-15vw" />
        <Skill name="Docker" x="-10vw" y="-10vw" />
        <Skill name="R" x="-24vw" y="-1vw" />
        <Skill name="SQL" x="-16vw" y="-6vw" />
        <Skill name="PyTorch" x="-16vw" y="2vw" />
        <Skill name="Pandas" x="-23vw" y="4vw" />
        <Skill name="Numpy" x="-14vw" y="7vw" />
        <Skill name="Data Engineering" x="-14vw" y="12vw" />
        <Skill name="AWS" x="-8vw" y="-20vw" />
        <Skill name="Jupyter Lab" x="-18vw" y="-20vw" />
        <Skill name="C++" x="-22vw" y="8vw" />
        <Skill name="R Shiny" x="-18vw" y="-10vw" />
        <Skill name="Data visualization" x="16vw" y="10vw" />
        <Skill name="GitHub actions" x="-28vw" y="18vw" />
        <Skill name="matplotlib" x="-16vw" y="18vw" />
        <Skill name="Excel" x="-18vw" y="-15vw" />
        <Skill name="Optimization" x="12vw" y="-17vw" />
        <Skill name="Classification" x="15vw" y="-10vw" />
        <Skill name="Feature selection/engineering" x="30vw" y="-11vw" />
        <Skill name="Neural networks" x="28vw" y="-6vw" />
        <Skill name="Clustering" x="15vw" y="-5vw" />
        <Skill name="Regression" x="15vw" y="0vw" />
        <Skill name="Statistical modeling" x="15vw" y="5vw" />
        <Skill name="Computer vision" x="18vw" y="-14vw" />
        <Skill name="Bayesian statistics" x="28vw" y="-17vw" />
        <Skill name="Signal Processing" x="29vw" y="4vw" />
        <Skill name="Predictive modelling" x="29vw" y="10vw" />
        <Skill name="Data analysis" x="10vw" y="-21vw" />
        <Skill name="Data science" x="20vw" y="-21vw" />
        <Skill name="Shell scripting" x="-29vw" y="-16vw" />
        <Skill name="GitHub/Version control" x="-30vw" y="-11vw" />
        <Skill name="HTML & CSS" x="-33vw" y="0vw" />
        <Skill name="Containerization" x="-33vw" y="5vw" />
        <Skill name="VS code" x="-30vw" y="9vw" />
        <Skill name="Software development" x="-30vw" y="13vw" />
        <Skill name="Machine Learning" x="15vw" y="16vw" />
        <Skill name="Time series analysis" x="28vw" y="16vw" />
        <Skill name="Algorithms development" x="28vw" y="-1vw" />
        <Skill name="GitHub Copilot" x="2vw" y="0vw" />
        <Skill name="AI agents" x="2vw" y="-5vw" />
        <Skill name="OpenAI" x="2vw" y="-15vw" />
        <Skill name="Prompt Engineering" x="2vw" y="-10vw" />
        <Skill name="RAG" x="2vw" y="5vw" />
        <Skill name="Finetuning" x="2vw" y="10vw" />
        <Skill name="LLM" x="2vw" y="15vw" />
      </div>
    </>
  );
};

export default Skills;
