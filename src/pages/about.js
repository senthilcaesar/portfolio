import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/aboutProfile.jpeg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Extracurricular from "@/components/Extracurricular";
import TransitionEffect from "@/components/TransitionEffect";
import React from "react";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  useEffect(() => {
    const paragraphs = [
      "Healthcare AI Specialist passionate about transforming patient care through data science and machine learning.",
      "With 6+ years of experience across enterprise systems, research infrastructure, and clinical applications, I bridge the gap between cutting-edge technology and real-world healthcare impact.",
      "At leading institutions like MGH, BWH, and Boston University, I've led projects that directly improve patient outcomes - from reducing sleep study analysis time by 90% to developing brain age prediction models that provide new clinical biomarkers. My work spans automated sleep staging algorithms serving clinical labs, deep learning models for medical image segmentation, and comprehensive data harmonization across multi-site research studies.",
      "What drives me: Taking complex biomedical data and creating solutions that clinicians can actually use. I've learned that the best healthcare AI isn't just technically sophisticated - it's reliable, interpretable, and seamlessly integrated into clinical workflows.",
      "Technical expertise: Python, R, AWS, Docker, machine learning, deep learning, medical imaging, EEG/fMRI analysis, and full-stack development. But more importantly, I understand how to deploy these technologies in regulated healthcare environments where reliability and patient safety are paramount.",
      "Looking to collaborate with teams pushing the boundaries of healthcare AI, precision medicine, and clinical decision support systems.",
    ];

    function typeWriter(text, i, callback) {
      if (i === 0) {
        console.clear();
      }
      if (i <= text.length) {
        console.clear();
        console.log(text.substring(0, i));
        setTimeout(() => typeWriter(text, i + 1, callback), 30);
      } else if (callback) {
        setTimeout(callback, 700); // Wait before next paragraph
      }
    }

    function startTyping(index) {
      if (index < paragraphs.length) {
        typeWriter(paragraphs[index], 0, () => startTyping(index + 1));
      }
    }

    startTyping(0);
  }, []);

  return (
    <>
      <Head>
        <title>Senthil Palanivelu | About </title>
        <meta name="description" content="Senthil's portfolio" />
      </Head>
      <TransitionEffect />
      <main
        className={`flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col w-full max-w-lg md:order-2">
              <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium">
                Hi👋 I&apos;m <strong>Senthil Palanivelu</strong>, a graduate
                with a background in Computer Science from{" "}
                <strong>University of Massachusetts Boston</strong>.
              </p>
              <div className="mt-7 my-4 text-base font-medium md:text-sm sm:text-xs font-helvetica leading-relaxed space-y-4">
                <p>
                  Healthcare AI Specialist passionate about transforming patient care through data science and machine learning.
                </p>
                <p>
                  With 6+ years of experience across enterprise systems, research infrastructure, and clinical applications, I bridge the gap between cutting-edge technology and real-world healthcare impact.
                </p>
                <p>
                  At leading institutions like MGH, BWH, and Boston University, I've led projects that directly improve patient outcomes - from reducing sleep study analysis time by 90% to developing brain age prediction models that provide new clinical biomarkers. My work spans automated sleep staging algorithms serving clinical labs, deep learning models for medical image segmentation, and comprehensive data harmonization across multi-site research studies.
                </p>
                <p>
                  What drives me: Taking complex biomedical data and creating solutions that clinicians can actually use. I've learned that the best healthcare AI isn't just technically sophisticated - it's reliable, interpretable, and seamlessly integrated into clinical workflows.
                </p>
                <p>
                  Technical expertise: Python, R, AWS, Docker, machine learning, deep learning, medical imaging, EEG/fMRI analysis, and full-stack development. But more importantly, I understand how to deploy these technologies in regulated healthcare environments where reliability and patient safety are paramount.
                </p>
                <p>
                  Looking to collaborate with teams pushing the boundaries of healthcare AI, precision medicine, and clinical decision support systems.
                </p>
              </div>
            </div>
            <div
              className="relative w-full max-w-lg rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark md:order-1"
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profile}
                alt="Senthil Palanivelu"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
