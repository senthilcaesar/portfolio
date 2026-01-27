'use client';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import TransitionEffect from '@/components/TransitionEffect';
import { Github } from 'lucide-react';
import agri from '../../../public/images/projects/agri.png';
import nutritionApp from '../../../public/images/projects/nutrition_app.png';
import virtualDoctor from '../../../public/images/projects/virtual_doctor.png';
import multiview from '../../../public/images/projects/multiview.png';
import signal from '../../../public/images/projects/signal.png';
import moon from '../../../public/images/projects/moon.png';
import medicalRecord from '../../../public/images/projects/medical_record.png';
import protein from '../../../public/images/projects/protein.png';
import personalWebProj from '../../../public/images/projects/personalWebProj.png';
import analytics from '../../../public/images/projects/analytics.png';

const FramerImage = motion.create(Image);

interface FeaturedProjectProps {
  type: string;
  title: string;
  summary: string;
  img: string | StaticImageData;
  link: string;
  github: string;
}

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: FeaturedProjectProps) => {
  return (
    <motion.article
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className='relative flex w-full items-center justify-between rounded-2xl border
border-solid border-dark bg-light p-12 shadow-xl dark:border-light/25 dark:shadow-light/10 dark:bg-dark lg:flex-col 
lg:p-8 xs:rounded-2xl xs:p-4 
    '
    >
      <Link
        href={link}
        target={'_blank'}
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage
          src={img}
          className='h-auto w-full'
          alt={title}
          width={600}
          height={400}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
        />
      </Link>
      <div className='flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl'>
          {title}
        </h2>
        <p className='my-4 rounded-md font-medium text-dark dark:text-light sm:text-sm'>
          {summary}
        </p>

        <div className='mt-5 flex items-center'>
          <Link
            href={github}
            target={'_blank'}
            className='w-10'
            aria-label='Project github link'
          >
            <Github className='w-10 h-10' />
          </Link>
          <Link
            href={link}
            target={'_blank'}
            className='ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            '
            aria-label='Crypto Screener Application'
          >
            Visit Project
          </Link>
        </div>
        <span className='mt-6 text-xl font-medium text-primary dark:text-primaryDark xs:text-base'>
          {type}
        </span>
      </div>
    </motion.article>
  );
};

export default function Projects() {
  return (
    <>
      <TransitionEffect />
      <main
        className={`mb-16 flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className='pt-10'>
          <AnimatedText
            text='My Projects'
            className='mb-12 !text-6xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                type='TypeScript, Next.js 15+, React 19, Tailwind CSS 4.0 , HTML, CSS, Netlify'
                title='Amudham Naturals'
                summary='Your trusted source for premium organic and natural food products.'
                img={agri}
                link='https://amudhamnaturals.com/'
                github='https://github.com/senthilcaesar/amudham-naturals-website'
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                type='Python, OpenAI, Streamlit, RAG, Pinecone vector database'
                title='Neuro Nutrition'
                summary='An AI-powered application that creates personalized nutrition plans for individuals with diabetes.'
                img={nutritionApp}
                link='https://diabetes-nutrition.streamlit.app/'
                github='https://github.com/senthilcaesar/diabetes-nutrition-app'
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                type='Python, Pandas, PyMuPDF, Matplotlib, Plotly, Streamlit'
                title='Amazon Invoice Data Analytics Dashboard'
                summary='This web application transforms Amazon order invoice data into actionable business insights. Users can upload CSV files containing invoice records and instantly visualize key performance metrics through an interactive dashboard.'
                img={analytics}
                link='https://invoice-data-pdf-extractor.streamlit.app/'
                github='https://github.com/senthilcaesar/Invoice-data-pdf-extractor'
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                type='LLM, Python, OpenAI, Streamlit'
                title='Virtual Doctor Assistant'
                summary='The AI Doctor is a virtual healthcare assistant application that provides a medical consultation experience.'
                img={virtualDoctor}
                link='https://ai-doctor-v1.streamlit.app/'
                github='https://github.com/senthilcaesar/ai-doctor'
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                type='Python, Computer Vision, Deep Learning'
                title='CNN-Diffusion-MRIBrain-Segmentation'
                summary='Convolutional Neural Networks (CNNs) for brain MRI segmentation, isolating brain tissue from surrounding structures.'
                img={multiview}
                link='https://github.com/pnlbwh/CNN-Diffusion-MRIBrain-Segmentation'
                github='https://github.com/pnlbwh/CNN-Diffusion-MRIBrain-Segmentation'
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                type='C++'
                title='Luna: software for the analysis of sleep signal data'
                summary='Luna is an open-source C/C++ software package for manipulating and analyzing polysomnographic recordings.'
                img={signal}
                link='https://zzz.bwh.harvard.edu/luna/'
                github='https://github.com/remnrem/luna-base'
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                type='Shiny'
                title='Moonlight'
                summary='Moonlight is an interactive web viewer for EDF signal and annotation data.'
                img={moon}
                link='https://remnrem.net/'
                github='https://github.com/remnrem/moonlight'
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                type='Python FastAPI, OpenAI API, PyMuPDF'
                title='MyLabResults'
                summary='A web application that translates complex medical documents into plain English using AI.'
                img={medicalRecord}
                link='https://github.com/senthilcaesar/medical-record-translator'
                github='https://github.com/senthilcaesar/medical-record-translator'
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                type='C++'
                title='Protein-Complex-Alpha-Shape'
                summary='Using Computational Geometry to study the geometry of protein binding surfaces.'
                img={protein}
                link='https://github.com/senthilcaesar/Protein-Complex-Alpha-Shape/blob/master/Final%20Report.pdf'
                github='https://github.com/senthilcaesar/Protein-Complex-Alpha-Shape'
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                type='JavaScript, TypeScript'
                title='Personal Website'
                summary='This is a Next.js project bootstrapped with create-next-app'
                img={personalWebProj}
                link='https://github.com/senthilcaesar/portfolio'
                github='https://github.com/senthilcaesar/portfolio'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
