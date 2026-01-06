"use client";
import Layout from "@/components/Layout";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import React from "react";
import profilepic from "../../../public/images/profile/aboutProfile.jpeg";

function AnimatedNumberFramerMotion({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
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
        if (ref.current && latest.toFixed(0) <= value.toString()) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
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
                  Healthcare AI Specialist passionate about transforming patient
                  care through data science and machine learning.
                </p>
                <p>
                  With 6+ years of experience across enterprise systems,
                  research infrastructure, and clinical applications, I bridge
                  the gap between cutting-edge technology and real-world
                  healthcare impact.
                </p>
                <p>
                  At leading institutions like MGH, BWH, and Boston University,
                  I&apos;ve led projects that directly improve patient outcomes
                  - from reducing sleep study analysis time by 90% to developing
                  brain age prediction models that provide new clinical
                  biomarkers.
                </p>
                <p>
                  What drives me: Taking complex biomedical data and creating
                  solutions that clinicians can actually use.
                </p>
                <p>
                  Technical expertise: Python, R, AWS, Docker, machine learning,
                  deep learning, medical imaging, EEG/fMRI analysis, and
                  full-stack development.
                </p>
                <p>
                  Looking to collaborate with teams pushing the boundaries of
                  healthcare AI, precision medicine, and clinical decision
                  support systems.
                </p>
              </div>
            </div>
            <div
              className="relative w-full max-w-lg rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark md:order-1"
            >
              <div
                className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light"
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profilepic}
                alt="Senthil Palanivelu"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
