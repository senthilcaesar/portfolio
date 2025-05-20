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
              <p className="mt-7 my-4 text-base font-medium md:text-sm sm:text-xs font-helvetica leading-relaxed">
                I am a dedicated AI Engineer with a strong passion for
                researching, designing, implementing, and delivering
                cutting-edge prediction models for complex biomedical
                challenges. Leveraging state-of-the-art AI/ML technologies, I
                aim to advance personalized medicine and transform healthcare
                solutions.
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
