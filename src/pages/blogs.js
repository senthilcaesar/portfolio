import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        // onMouseMove={handleMouse}
        // onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span
        className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li
      className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light"
    >
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Senthil Palanivelu | Articles</title>
        <meta name="description" content="Senthil Palanivelu's portfolio." />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Welcome!😄
            I share a personal narrative on how reading books has become a transformative element in my life. 
            It's not merely about gathering information; it's an experience that elevates my thought 
            processes, dissipates my ignorance, and introduces me to a multitude of perspectives, novel ideas and truths. 
            This journey through literature has become a form of meditation for me, connecting me deeply with 
            characters and ideas. It feels like a real privilege to have the time to immerse myself in reading.

            Through this post, I invite you to explore how reading has enriched my life, offering wisdom, joy, 
            and a profound appreciation for the small yet significant aspects of our daily lives. 
            Let's unravel together how the act of reading can change us in the most unexpected and beautiful ways."
            className="no-capitalize !text-base !font-normal !text-left !leading-tight mb-16 lg:!text-lg sm:!text-md xs:!text-sm sm:mb-8"
          />
          <ul className="grid grid-cols-3 gap-4 lg:gap-6 md:grid-cols-2 sm:grid-cols-1 sm:gap-y-8"></ul>

          <ul className="flex flex-col items-center relative">
            <Article
              title="My readings"
              date="March, 2024"
              link="https://woolly-revolve-fec.notion.site/2fdf26a029464252b2ef134f1e81a9dc?v=0ccf1606485e42899e3f534acf249694&pvs=4"
            />
            <Article
              title="Attention Problems"
              date="March, 2024"
              link="https://woolly-revolve-fec.notion.site/Attention-Problems-750e95ef18a2444f8c67ae157fa73920?pvs=4"
            />
            <Article
              title="My Philosophy"
              date="March, 2024"
              link="https://woolly-revolve-fec.notion.site/My-simple-life-philosophy-dc5a4134163f4f58bae92392a80b6a85?pvs=4"
            />
            <Article
              title="Win friends & Influence people"
              date="October, 2024"
              link="https://woolly-revolve-fec.notion.site/How-to-Win-Friends-Influence-People-129bdfa1611d800796a6f66508697387?pvs=4"
            />
            <Article
              title="What is a dollar ?"
              date="March, 2024"
              link="https://woolly-revolve-fec.notion.site/What-is-a-dollar-0a99fb50230a4a7cb7cc877198e322e7?pvs=4"
            />
            <Article
              title="Dynamic and Static libraries"
              date="March, 2024"
              link="https://woolly-revolve-fec.notion.site/Static-and-Dynamic-libraries-17972aff571b41438fdb99b87f9d6838?pvs=4"
            />
            <Article
              title="Building Docker images for multiple platforms"
              date="March, 2024"
              link="https://woolly-revolve-fec.notion.site/Building-Docker-images-for-multiple-platforms-7a84ad5b58194c3b859c1a41a11708d0?pvs=4"
            />
            <Article
              title="Git Tutorial"
              date="March, 2024"
              link="https://woolly-revolve-fec.notion.site/Git-Tutorial-dca4aaaf46f2456ba95208b3c41ff31a?pvs=4"
            />
            <Article
              title="Questions to ask before a purchase"
              date="March, 2024"
              link="https://woolly-revolve-fec.notion.site/Questions-to-ask-before-making-any-purchase-9fe8fc6d23d54b8b82f2942ca8300745?pvs=4"
            />
            <Article
              title="What is the purpose of life ?"
              date="March, 2024"
              link="https://woolly-revolve-fec.notion.site/What-is-the-purpose-of-life-77e18ad6dac44790a25bc086ebdc7728?pvs=4"
            />
            <Article
              title="What principles organize my day ?"
              date="March, 2024"
              link="https://woolly-revolve-fec.notion.site/What-principles-organize-my-day-54caca69b2c247c9ba4f1454c2efe36d?pvs=4"
            />
            <Article
              title="Embracing the Journey"
              date="March, 2024"
              link="https://woolly-revolve-fec.notion.site/Embracing-the-Journey-e01bb1117ce041c8a5eed5a943e36776?pvs=4"
            />
            <Article
              title="Presentation tips"
              date="March, 2024"
              link="https://woolly-revolve-fec.notion.site/Presentation-Tips-873287297fad496b86fd606a6fc3bb1b?pvs=4"
            />
            <Article
              title="Get the most out of AI with the prompt framework"
              date="Feb, 2025"
              link="https://woolly-revolve-fec.notion.site/Get-the-most-out-of-AI-with-the-prompt-framework-199bdfa1611d802388a4ecf7842e8732?pvs=4"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}
