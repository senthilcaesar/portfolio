import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import proj4 from "../../public/images/projects/personalWebProj.png";
import multiview from "../../public/images/projects/multiview.png";
import nutrition_app from "../../public/images/projects/nutrition_app.png";
import virtual_doctor from "../../public/images/projects/virtual_doctor.png";
import moon from "../../public/images/projects/moon.png";
import signal from "../../public/images/projects/signal.png";
import protein from "../../public/images/projects/protein.png";
import medical_record from "../../public/images/projects/medical_record.png";
import amudham from "../../public/images/projects/agri.png";

import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
          {title}
        </h2>
        <p className=" my-4 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-5 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
        </div>
        <span className="mt-6 text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Senthil Palanivelu | Projects</title>
        <meta name="description" content="Senthil Palanivelu's portfolio." />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-10">
          <AnimatedText
            text="My Projects"
            className="mb-12 !text-6xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="HTML, CSS, Vanilla JavaScript, Tailwind CSS, Netlify"
                title="Amudham Naturals"
                summary="Your trusted source for premium organic and natural food products."
                img={amudham}
                link="https://amudhamnaturals.com/"
                github="https://github.com/senthilcaesar/amudham-naturals-website"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Python, OpenAI, Streamlit, RAG, Pinecone vector database"
                title="Neuro Nutrition"
                summary="An AI-powered application that creates personalized nutrition plans for individuals 
                with diabetes. The system integrates multiple health-related factors (medical analyses, weight, 
                height, age, dietary habits, health conditions) along with socioeconomic factors (income, location, 
                education, literacy levels) to ensure plans are accessible and effective for diverse populations, 
                including those in rural or underserved communities. The Q&A system uses Retrieval-Augmented Generation (RAG) with 
                Pinecone vector database to answer your questions about diabetes and nutrition. 
                All information comes from verified medical sources in our database."
                img={nutrition_app}
                link="https://diabetes-nutrition.streamlit.app/"
                github="https://github.com/senthilcaesar/diabetes-nutrition-app"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="LLM, Python, OpenAI, Streamlit"
                title="Virutal Doctor Assistant"
                summary="The AI Doctor is a virtual healthcare assistant application that provides a 
                medical consultation experience. Built with Python, Streamlit and powered by 
                OpenAI's GPT models, it provides personalized data-driven medical guidance through an 
                interactive interface."
                img={virtual_doctor}
                link="https://ai-doctor-v1.streamlit.app/"
                github="https://github.com/senthilcaesar/ai-doctor"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Python, Computer Vision, Deep Learning"
                title="CNN-Diffusion-MRIBrain-Segmentation"
                summary="In the rapidly advancing field of neuroscience, we heavily rely on brain MRI scans to diagnose diseases, assess injuries, 
                and deepen our research. A key technique in our work is brain masking, where we isolate the brain tissue from surrounding structures 
                such as the skull and skin. This isolation is crucial, as it allows us to focus our analysis exclusively on the brain, enabling more 
                precise studies. Despite its critical role, brain masking has traditionally been a manual process. This method is slow and carries a
                 high risk of human error, creating a significant bottleneck in our workflows. Furthermore, the existing automated tools available were 
                 unreliable, often failing because they relied on overly simplistic methods of geometric detection or outdated algorithms. 
                Faced with these challenges, we turned to a more innovative solution: Convolutional Neural Networks (CNNs), a technology that has been 
                successful in various industries for quick and accurate image segmentation."
                img={multiview}
                link="https://github.com/pnlbwh/CNN-Diffusion-MRIBrain-Segmentation"
                github="https://github.com/pnlbwh/CNN-Diffusion-MRIBrain-Segmentation"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="C++"
                title="Luna: software for the analysis of sleep signal data"
                summary="Luna is an open-source C/C++ software package for manipulating and analyzing polysomnographic recordings, with a focus on the sleep EEG."
                img={signal}
                link="https://zzz.bwh.harvard.edu/luna/"
                github="https://github.com/remnrem/luna-base"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Shiny"
                title="Moonlight"
                summary="Moonlight is an interactive web viewer for EDF signal and annotation data, specifically designed for polysomnographic data."
                img={moon}
                link="https://remnrem.net/"
                github="https://github.com/remnrem/moonlight"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Python FastAPI, OpenAI AP, PyMuPDF"
                title="MyLabResults"
                summary="A web application that translates complex medical documents into plain English using AI, helping patients better understand their lab result."
                img={medical_record}
                link="https://github.com/senthilcaesar/medical-record-translator"
                github="https://github.com/senthilcaesar/medical-record-translator"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="C++"
                title="Protein-Complex-Alpha-Shape"
                summary="Protein structure determines protein function is a fundamental problem in molecular biology. We can use Computational Geometry to study the geometry, shape, physicochemical texture of 
                binding surfaces to understand how they work and how functional roles of proteins can be predicted."
                img={protein}
                link="https://github.com/senthilcaesar/Protein-Complex-Alpha-Shape/blob/master/Final%20Report.pdf"
                github="https://github.com/senthilcaesar/Protein-Complex-Alpha-Shape"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="JavaScript, TypeScript"
                title="Personal Website"
                summary="This is a Next.js project bootstrapped with create-next-app"
                img={proj4}
                link="https://github.com/senthilcaesar/portfolio"
                github="https://github.com/senthilcaesar/portfolio"
              />
            </div>
            {/*}


          {*/}
          </div>
        </Layout>
      </main>
    </>
  );
}
