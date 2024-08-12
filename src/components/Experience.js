import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, location, companyLink, time, work }) => {
  const ref = useRef(null);
  const workPoints = work.split("\n").filter((line) => line.trim() !== "");
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span
          className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm ml-4"
          href="https://www.osu.edu/"
        >
          {time} | {location}
        </span>
        {/*}<p className="font-medium w-full md:text-sm"> {work}</p>
        {*/}
        <ul className="list-disc list-inside space-y-2 ml-4">
          {workPoints.map((point, index) => (
            <li key={index} className="text-base font-medium">
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const mghWorkProp = `Developed Image processing pipelines in Python 
  Trained an encoder-decoder deep learning model for diffusion brain MRI segmentation
  Deployed deep learning semantic segmentation model production code in AWS EC2
  Prepare data for analysis across research sites for 200+ clinical, behavioral, and imaging measures
  Hands on experience in image processing and analysis tools like 3D slicer, Free surfer, FSL and SPM`;

  const buWorkProp = `Implemented and supported statistical analyses and processing pipelines/scripts in Python for behavioral, EEG and multimodal neuroimaging analysis, including resting ‐ state and task-based fMRI and volumetric data
  Performed correlation analysis at the brain source level using beamforming
  Built predictive machine learning models on large, multi-modal data sets
  Implemented graph theoretical analysis, time-frequency analysis, circular statistics and non-parametric cluster based statistics
  Provided software support for behavioral / cognitive tasks analysis, including testing and debugging of existing Python MNE based platforms
  `;

  const nchWorkProp = `Developed programs in MATLAB for processing sleep EEG in human brain
  Developed MALTAB data analysis pipeline for detecting spindles and slow oscillations
  Studied the neurophysiology of sleep through the lens of multi-taper spectral analysis
  Used K-clustering algorithm to categorize the spatial patterns of slow oscillations into global, local or frontal
  Analyzed the topography of sleep brain dynamics in the presence of neurodevelopment challenges
  Used SVM to classify slow oscillations based on their source current densities
  Implemented Mölle2011 spindle detection algorithm in MATLAB
  `;

  const bwhWorkProp = `Validated, executed algorithms and deployed ML predictive model for automated sleep staging and brain age prediction 
   Experience using Random forest and Gradient boosting framework (LightGBM, XGBoost)
   Experience with statistical methods such as hypothesis testing, linear regression
   Processing new sleep cohort studies that includes Initial reviews of signals and annotations, checking for PHI, alignment and checking of staging data and EDF signals, creation of the harmonized set of EDFs and annotation files, compiling, checking and distributing a final analysis-ready harmonized dataset.
   Developed and deployed a web-based interactive EDF viewer that captures real time user inputs, integrate with backend models and display analytical results.
   Built web applications using R and deployed R Shiny applications on AWS EC2 using ShinyProxy and Docker containers.
   Implemented best practices and methods for building efficient docker container images
   Setup optimized computing infrastructure including compute and storage environments
   Provided ongoing support to investigate application issues and apply incremental enhancements to existing applications based on user feedback.
   Manage lab tools website using HTML and CSS
   Experience in Machine Learning, including predictive modeling, clustering, feature selection methods, and regularization techniques.
   Created GitHub actions workflow triggers on the creation of new releases and build Python package into distributions before publishing them to PyPI using Twine.
   Automated the process of building and distributing Python packages across different platforms using GitHub Actions
   Conducted a detailed statistical analysis of SpO2 levels above 90% during sleep, utilizing data visualization and predictive modeling to assess respiratory health across 1000 individuals.
  `;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Bioinformatician I"
            company="Brigham and Women's Hospital"
            location="United States"
            companyLink="https://www.brighamandwomens.org/"
            time="Sep 2022 - Present"
            work={bwhWorkProp}
          />

          <Details
            position="Research Associate - Research Math"
            company="Nationwide Children's Hospital"
            location="United States"
            companyLink="https://www.nationwidechildrens.org/"
            time="Sep 2021 - Jul 2022"
            work={nchWorkProp}
          />

          <Details
            position="Research Data Analyst I"
            company="Boston University"
            location="United States"
            companyLink="https://www.bu.edu/"
            time="Apr 2020 - Aug 2021"
            work={buWorkProp}
          />

          <Details
            position="Clinical Research Coordinator II"
            company="Massachusetts General Hospital"
            location="United States"
            companyLink="https://www.massgeneral.org/"
            time="Jan 2019 - Mar 2022"
            work={mghWorkProp}
          />

          {/*}
            <Details
              position="Bio-Hackthon"
              company="Patient Safety Technology Challenge"
              location="United States"
              companyLink="https://www.patientsafetytech.com/"
              time="2023"
              work={aliWorkProp}
            />
  {*/}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
