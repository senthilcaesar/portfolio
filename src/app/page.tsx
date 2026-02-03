import AnimatedText from '@/components/AnimatedText';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import ContactButton from '@/components/ContactButton';
import profilePic from '../../public/images/profile/portfolioImage.png';
import banner from '../../public/images/profile/banner.png';
import { LinkArrow } from '@/components/Icons';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import TransitionEffect from '@/components/TransitionEffect';
import type { Metadata } from 'next';

import MovingText from '@/components/MovingText';

export const metadata: Metadata = {
  title: 'Senthil Palanivelu',
  description: 'Senthil Palanivelu Personal Website',
};

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <article
        className={`relative flex min-h-screen flex-col text-dark dark:text-light sm:items-start bg-gradient-radial from-light to-white dark:from-dark dark:to-black`}
      >
        <div className='absolute top-0 left-0 w-full h-full z-0 opacity-10 pointer-events-none'>
          <Image
            src={banner}
            alt='background'
            fill
            className='object-cover'
            priority
          />
        </div>
        <Layout className='pt-16 md:pt-16 sm:pt-8 relative z-10'>
          {/* Moving Text Marquee */}
          <div className='w-full mb-8 -mt-8 xl:-mt-4 lg:-mt-2 sm:-mt-0'>
            <MovingText />
          </div>

          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 flex flex-col items-start self-center lg:w-full lg:text-center'>
              <AnimatedText
                text="👋 I'm Senthil Palanivelu"
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
                wrapperClassName='!items-start !justify-start !text-left lg:!items-center lg:!justify-center lg:!text-center'
              />
              <p className='my-4 text-xl font-medium md:text-lg sm:text-base text-left lg:text-center'>
                I’m a Computer Science professional with a strong background in
                Data Analytics, AI Engineering, and Machine Learning. I’m
                passionate about exploring data to uncover meaningful patterns
                and trends, using evidence-based analysis and data-driven
                insights to guide informed decision-making. My work focuses on
                applying AI and advanced analytics to solve real-world problems,
                optimize processes, and deliver clear, measurable business
                value. I enjoy bridging the gap between complex data and
                practical outcomes by turning insights into actionable
                solutions.
              </p>
              <ul className='my-4 text-lg font-medium md:text-base sm:text-sm text-left lg:text-center space-y-2 list-disc list-inside lg:list-none'>
                <li>5 years of experience as a Data Analyst.</li>
                <li>Proficient in Python, Machine Learning and SQL.</li>
                <li>Analytic mindset and a passion for AI.</li>
                <li>
                  Creative, curious, and innovative - I love exploring new ways
                  to use data.
                </li>
                <li>
                  AI early adopter - I stay ahead of trends and love
                  experimenting with new tools.
                </li>
              </ul>
              <div className='mt-2 flex items-center self-start lg:self-center'>
                <Link
                  href='/documents/Senthil.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Resume <LinkArrow className='ml-1 !w-6 md:!w-4' />
                </Link>
                <ContactButton />
              </div>
            </div>
            <div className='w-1/2 md:w-full'>
              <div className='w-full bg-light border border-solid border-dark rounded-2xl p-8 shadow-xl dark:bg-dark dark:border-light/25 dark:shadow-light/10'>
                <Image
                  src={profilePic}
                  alt='Senthil Palanivelu'
                  className='w-full h-auto lg:hidden md:inline-block md:w-full rounded-2xl'
                  priority
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                />
              </div>
            </div>
          </div>

          <div className='flex w-full mt-32 gap-4 lg:flex-col lg:mt-16'>
            <div className='w-1/2 lg:w-full'>
              <Education />
            </div>

            {/* Vertical Separator */}
            <div className='w-[2px] bg-dark opacity-50 dark:bg-light lg:hidden h-auto mx-4 self-stretch rounded-full' />

            <div className='w-1/2 lg:w-full'>
              <Skills />
            </div>
          </div>
        </Layout>
      </article>
    </>
  );
}
