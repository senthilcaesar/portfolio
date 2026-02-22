"use client";
import Layout from "@/components/Layout";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Experience from "@/components/Experience";

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
                Hi👋 I&apos;m <strong>Senthil Palanivelu</strong>, a builder
                at heart with a background in Computer Science from{" "}
                <strong>University of Massachusetts Boston</strong>.
              </p>
              <div className="mt-7 my-4 text-base font-medium md:text-sm sm:text-xs font-helvetica leading-relaxed space-y-4">
                <p>
                  I approach every problem analytically — I love digging into
                  large, complex datasets to find the patterns and trends
                  hiding inside them. Data, to me, is never just numbers; it&apos;s
                  a story waiting to be told.
                </p>
                <p>
                  What drives me is uncovering those stories and translating
                  them into clear visualisations and insights that help people
                  make better decisions — and then take better action. I
                  genuinely believe that the right information, presented the
                  right way, can change outcomes.
                </p>
                <p>
                  Over the years that mindset has taken me from clinical
                  research labs in Boston to building end-to-end digital
                  products — always with the same goal: turn raw, complicated
                  data into something useful, clear, and dependable.
                </p>
                <p>
                  Outside of work, I&apos;m curious about how AI is reshaping
                  the way we learn, build, and make decisions — and I try to
                  stay close to those edges.
                </p>
              </div>
            </div>
            <div className="w-full max-w-lg md:order-1">
              <div className="w-full bg-light border border-solid border-dark rounded-2xl p-8 shadow-xl dark:bg-dark dark:border-light/25 dark:shadow-light/10">
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
          </div>


          <Experience />
        </Layout>
      </main>
    </>
  );
}
