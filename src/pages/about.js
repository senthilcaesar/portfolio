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
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

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
          {/*}
        <AnimatedText
            text="About Me"
            className="mb-16 !text-4xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
        {*/}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col w-full max-w-lg md:order-2">
              <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium">
                Hi👋 I&apos;m <strong>Senthil Palanivelu</strong>, a graduate
                with a background in Computer Science from{" "}
                <strong>University of Massachusetts Boston</strong>. I am
                interested in developing predictive models that combines
                physiological, behavioral, clinical, imaging, genetics,
                epidemiological, lab and behavioral measures with the goal of
                improving outcome predictions in various diseases.
              </p>
              <p className="my-4 font-medium">
                <ul>
                  <li>
                    I have been fortunate to start my career at{" "}
                    <strong>Massachusetts General Hospital</strong> as a
                    Research coordinator developing Image procesing pipeline.
                  </li>
                  <br></br>
                  <li>
                    My second job at <strong>Boston University</strong> as a
                    Data Analyst where I built computing tools for multimodal
                    analysis of the brain&apos;s connectivity structure.
                  </li>
                  <br></br>
                  <li>
                    My third job at{" "}
                    <strong>Nationwide Children’s Hospital</strong> as a
                    Research Associate where I developed MATLAB programs for
                    analyzing sleep rhythms.
                  </li>
                  <br></br>
                  <li>
                    At present I am at{" "}
                    <strong> Brigham and Women’s Hospital</strong> as a
                    Bioinformatician where I&apos;m involved in the development
                    of open-source C/C++ software package for analyzing
                    polysomnographic recordings, focusing on sleep EEG.
                  </li>
                </ul>
              </p>
              <p className="font-medium">
                Working across different institutions has been an invaluable
                experience. This diverse exposure has not only broadened my
                understanding but has also sharpened my ability to appreciate
                the complexities of data analysis, processing and engineering.
                In this phase of my career, I&apos;m consciously exploring
                various interests to discover what truly ignites my passion.
                It&apos;s a journey of self-discovery, where I&apos;m open to
                embracing new experiences that offer insights into my
                capabilities. Lately, I&apos;ve found myself particularly drawn
                to Statistics and Probability Theory.
                <br></br>
                <br></br>
                Thank you for taking the time to read about my journey.
              </p>
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
