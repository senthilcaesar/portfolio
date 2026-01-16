'use client';
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

interface DetailsProps {
  position: string;
  company: string;
  location: string;
  companyLink: string;
  time: string;
  work: string;
}

const Details = ({ position, company, location, companyLink, time, work }: DetailsProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const workPoints = work.split("\n").filter((line) => line.trim() !== "");
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full bg-light border border-solid border-dark rounded-2xl p-6 shadow-xl dark:bg-dark dark:border-light/25 dark:shadow-light/10"
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg mb-2">
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
          className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm block mb-4"
        >
          {time} | {location}
        </span>
        <ul className="list-disc list-inside space-y-2 text-justify">
          {workPoints.map((point, index) => (
            <li key={index} className="text-base font-medium md:text-sm">
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);

  const mghWorkProp = `Part of Center for Computational Imaging Anatomy at Massachusetts General Hospital and Psychiatry Neuroimaging Laboratory at Brigham and Women's Hospital
Developed and trained encoder-decoder deep learning models for diffusion brain MRI segmentation, achieving 95% accuracy on clinical datasets
Deployed production machine learning models on AWS EC2 infrastructure, serving real-time predictions for clinical research applications
Analyzed fiber track data from diffusion MR tractography to map brain connectivity patterns in mental health research studies
Coordinated technical aspects of multi-site clinical studies involving 200+ participants across neuroimaging, clinical, and behavioral data streams
Built Python-based image processing pipelines for multimodal neuroimaging analysis including resting-state and task-based fMRI
Utilized professional neuroimaging tools (3D Slicer, FreeSurfer, FSL, SPM) for volumetric brain analysis and preprocessing workflows
Organized and standardized large datasets from diverse research sites, ensuring data quality and regulatory compliance`;

  const buWorkProp = `Implemented statistical analysis pipelines in Python for multimodal neuroimaging data fusion (EEG, fMRI, behavioral), supporting translational neuroscience research
Performed brain source analysis using beamforming techniques and advanced signal processing methods for EEG/MEG data interpretation
Built predictive machine learning models on large, high-dimensional neuroscience datasets to identify biomarkers for cognitive and clinical outcomes
Developed graph theoretical analysis frameworks for brain network connectivity, revealing novel insights into neural communication patterns
Implemented time-frequency analysis, circular statistics, and non-parametric cluster-based statistics for complex neurophysiological data
Provided software development support for MNE-Python based platforms, including testing, debugging, and feature enhancement
Managed and organized multi-modal datasets from translational studies encompassing physiological, neuroimaging, clinical, and behavioral measurements`;

  const nchWorkProp = `Developed MATLAB programs for processing human sleep EEG data, creating automated analysis pipelines for large-scale sleep studies
Implemented Mölle2011 spindle detection algorithm and custom slow oscillation detection methods, enabling high-throughput sleep pattern analysis
Applied multi-taper spectral analysis to study neurophysiology of sleep, contributing to understanding of memory consolidation mechanisms
Utilized K-means clustering to categorize spatial patterns of slow oscillations (global, local, frontal), revealing novel sleep architecture insights
Analyzed sleep brain dynamics in neurodevelopmental populations, supporting clinical research into developmental sleep disorders
Implemented Support Vector Machine (SVM) classification for slow oscillations based on source current densities, achieving 87% classification accuracy
Conducted topographic analysis of sleep EEG data, identifying biomarkers for healthy brain development and neurodevelopmental challenges`;

  const bwhWorkProp = `Led data harmonization projects across multiple research cohorts, standardizing EMG, ECG, and EEG configurations for 1000+ participants from diverse clinical sites
Developed and deployed machine learning models for automated sleep staging and brain age prediction using ensemble methods (Random Forest, XGBoost, LightGBM)
Created web-based interactive EDF viewer application capturing real-time user inputs and integrating with backend ML models for clinical decision support
Built and deployed R Shiny applications on AWS EC2 using ShinyProxy and Docker containers, serving 50+ clinical researchers and sleep medicine practitioners
Implemented CI/CD pipelines using GitHub Actions for automated Python package building and PyPI distribution across multiple platforms
Conducted comprehensive statistical analysis of SpO2 levels during sleep across 1000 individuals, identifying respiratory health patterns and risk factors
Designed reproducible HTML workflows with accompanying scripts, enabling audit trails and replication for regulatory compliance and scientific transparency
Optimized computing infrastructure including cloud storage and compute environments, reducing analysis time from days to hours for large sleep datasets
Created automated job scheduling scripts for high-throughput analysis of polysomnography data, processing 100+ sleep studies per week`;

  const raWorkProp = `Developed computational pipelines in Python and UNIX shell scripting, automating research workflows for 200+ faculty across multiple departments
Optimized C code for parallel computing environments, achieving 40% performance improvements on high-performance computing clusters
Maintained distributed resource management systems (Son of Grid Engine, SLURM) supporting petabyte-scale storage and thousands of compute cores
Implemented custom Ganglia Python metric modules and configured Nagios monitoring systems, reducing system downtime by 85%
Configured DMTCP checkpoint/restart functionality, preventing loss of weeks-long computational jobs during system maintenance
Managed data center operations including CentOS installation, Linux clustering, and enterprise storage systems
Provided technical support for scientific applications including Schrödinger software configuration and remote job submission setup`;

  const assistantWorkProp = `Managed institute website using HTML and Expression Engine CMS, ensuring content accuracy and user accessibility for academic research dissemination
Designed marketing materials including posters, brochures, and flyers using Adobe Creative Suite (InDesign, Photoshop, Illustrator) and Microsoft Publisher
Coordinated and organized institutional events with cross-functional staff teams, supporting academic conferences and community outreach initiatives
Maintained web content management workflows and updated digital resources to support research publication and public engagement efforts`;

  const itWorkProp = `Managed backup and restore operations for 100+ global clients using HP Storage Services Management System (SSMS), ensuring 99.9% data availability and business continuity
Administered cross-platform Unix systems (Linux, Solaris, HP-UX) including OS hardening, performance tuning, and security configuration management
Developed SQL Server 2005 and PL/SQL database solutions for business intelligence reporting and automated billing processes for backup services division
Implemented EMC Data Protection Advisor across enterprise environments, reducing backup failure detection time by 75% through proactive monitoring
Diagnosed and resolved complex network connectivity and firewall issues between client servers and data protection infrastructure, maintaining 24/7 service availability
Created Unix shell scripts for automated failure data collection and analysis, improving incident response time by 60%
Configured Access Control Lists (ACLs) and file-level security settings across multiple platforms, ensuring compliance with enterprise security standards`;

  const amudhamWorkProp = `Architected a high-performance e-commerce platform for a premium organic food brand, delivering a seamless shopping experience through modern web technologies and secure payment integration
Built a high-performance e-commerce SPA using Next.js 15 (App Router), React 19, and TypeScript, achieving sub-second load times with Static Site Generation and strict typing
Designed a modern, animated UI/UX with Tailwind CSS 4.0 and Framer Motion, implementing infinite-scroll product carousels, smooth multi-step checkout, and persistent cart state using Zustand with custom GST (5%) logic`;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-32 mb-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[90%] mx-auto md:w-full">
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Full Stack Developer/Frontend Engineer"
            company="Amudham Naturals"
            location="India"
            companyLink="https://amudhamnaturals.com/"
            time="Jul 2025 - Present"
            work={amudhamWorkProp}
          />
          
          <Details
            position="Bioinformatician I"
            company="Brigham and Women's Hospital"
            location="United States"
            companyLink="https://www.brighamandwomens.org/"
            time="Sep 2022 - Dec 2024"
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
            time="Jan 2019 - Mar 2020"
            work={mghWorkProp}
          />

          <Details
            position="Research Assistant"
            company="University of Massachusetts Boston"
            location="United States"
            companyLink="https://www.umb.edu/rc/"
            time="Jul 2016 - Aug 2017"
            work={raWorkProp}
          />
          <Details
            position="IT Assistant"
            company="William Joiner Institute"
            location="United States"
            companyLink="https://www.umb.edu/joinerinstitute/"
            time="Sep 2015 - May 2016"
            work={assistantWorkProp}
          />
          <Details
            position="IT Specialist"
            company="Mphasis"
            location="India"
            companyLink="https://www.mphasis.com/home.html"
            time="Oct 2012 - Feb 2014"
            work={itWorkProp}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
