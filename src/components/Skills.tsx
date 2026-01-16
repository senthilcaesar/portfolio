'use client';
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-primary dark:text-primaryDark mb-4">
            {title}
        </h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span 
                    key={index}
                    className="bg-dark text-light dark:bg-light dark:text-dark py-1 px-3 rounded-lg text-sm font-semibold hover:scale-105 transition-all duration-200 cursor-default"
                >
                    {skill}
                </span>
            ))}
        </div>
      </motion.div>
    </li>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const languages = [
    "Python", "R Programming", "R Shiny", "SQL", "JavaScript", "TypeScript", "HTML", "CSS", "Shell Scripting", "MATLAB"
  ];

  const webDev = [
    "Next.js", "React", "Tailwind CSS", "Framer Motion", "Zustand", "Node.js", "REST APIs", 
    "Streamlit", "FastAPI"
  ];
  
  const mlAndAI = [
      "Machine Learning", "Deep Learning", "LLMs & RAG", "AI Agents", "Computer Vision", 
      "NLP", "PyTorch", "Scikit-learn", "XGBoost", "OpenAI API", "Prompt Engineering",
      "Random Forest", "SVM", "Gradient Descent", "PCA", "Neural Networks"
  ];

  const dataScience = [
      "Data Analysis", "Statistical Modeling", "Hypothesis Testing", "Time Series Analysis", 
      "Signal Processing", "Bayesian Statistics", "Pandas", "NumPy", "Matplotlib/Seaborn", 
      "Data Visualization", "Linear/Logistic Regression", "Probability Theory"
  ];

  const tools = [
      "AWS", "Docker", "Linux", "Git/GitHub", "CI/CD", "GitHub Actions", 
      "VS Code", "Jupyter", "Netlify", "PyMuPDF", "Pinecone"
  ];

  return (
    <div className="mt-8 mb-16">
      <h2 className="font-bold text-6xl mb-32 w-full text-center md:text-5xl xs:text-3xl md:mb-16">
        Skills
      </h2>

      <div ref={ref} className="relative w-[95%] mx-auto lg:w-[90%] md:w-full">
        
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <SkillCategory title="Languages" skills={languages} />
            <SkillCategory title="Full Stack Development" skills={webDev} />
            <SkillCategory title="Machine Learning & AI" skills={mlAndAI} />
            <SkillCategory title="Data Science & Analytics" skills={dataScience} />
            <SkillCategory title="Tools & Platforms" skills={tools} />
        </ul>
      </div>
    </div>
  );
};

export default Skills;
