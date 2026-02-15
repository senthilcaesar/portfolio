'use client';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import Link from 'next/link';
import TransitionEffect from '@/components/TransitionEffect';

interface ArticleProps {
  title: string;
  date: string;
  link: string;
}

const Article = ({ title, date, link }: ArticleProps) => {
  return (
    <motion.li
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      viewport={{ once: true }}
      className='relative w-full p-4 py-6 my-2 rounded-2xl flex sm:flex-col items-center justify-between 
      bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light/25
      shadow-xl dark:shadow-light/10
      '
    >
      <Link href={link} target={'_blank'} className='relative'>
        <h2 className='capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base'>
          {title}
        </h2>
      </Link>
      <span
        className='text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm'
      >
        {date}
      </span>
    </motion.li>
  );
};

export default function Blogs() {
  return (
    <>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className='pt-16'>
          <p className='mt-0 my-5 text-base font-medium md:text-sm sm:text-xs font-helvetica leading-relaxed'>
            Welcome!😄 I share a personal narrative on how reading books has
            become a transformative element in my life. It&apos;s not merely
            about gathering information; it&apos;s an experience that elevates
            my thought processes, dissipates my ignorance, and introduces me to
            a multitude of perspectives, novel ideas and truths. This journey
            through literature has become a form of meditation for me,
            connecting me deeply with characters and ideas.
          </p>
          <ul className='grid grid-cols-3 gap-4 lg:gap-6 md:grid-cols-2 sm:grid-cols-1 sm:gap-y-8'></ul>

          <ul className='flex flex-col items-center relative'>

            <Article
              title='Using PACE in a Project Proposal'
              date='January, 2026'
              link='https://woolly-revolve-fec.notion.site/Automatidata-2efbdfa1611d8049a140ef515c15bf1e?source=copy_link'
            />
            <Article
              title='Imitation & Trial and Error: How AI Models Learn to Think'
              date='August, 2025'
              link='https://woolly-revolve-fec.notion.site/Imitation-Trial-and-Error-How-AI-Models-Learn-to-Think-253bdfa1611d808bbe3de0b885167468?source=copy_link'
            />
            <Article
              title='Context engineering explained'
              date='August, 2025'
              link='https://woolly-revolve-fec.notion.site/Context-engineering-explained-243bdfa1611d80e89b4ceed3d46b9532?source=copy_link'
            />
            <Article
              title='Percentiles and Quartiles'
              date='February, 2026'
              link='https://woolly-revolve-fec.notion.site/Measures-of-position-Percentiles-and-quartiles-2fdbdfa1611d8022a103c077c17e1133?source=copy_link'
            />
            <Article
              title='My Professional Journey'
              date='June, 2025'
              link='https://woolly-revolve-fec.notion.site/My-Professional-Journey-218bdfa1611d80f78d36e4c1813866b6'
            />
            <Article
              title='The Power of Affirmation'
              date='March, 2025'
              link='https://woolly-revolve-fec.notion.site/The-Power-of-Affirmation-1aebdfa1611d80ea9676ec65d7af41fb?pvs=4'
            />
            <Article
              title='Ideas for AI agents'
              date='February, 2025'
              link='https://woolly-revolve-fec.notion.site/Ideas-for-AI-agents-1a0bdfa1611d807595cff969d055412c?pvs=4'
            />
            <Article
              title='Get the most out of AI with the prompt framework'
              date='Feb, 2025'
              link='https://woolly-revolve-fec.notion.site/Get-the-most-out-of-AI-with-the-prompt-framework-199bdfa1611d802388a4ecf7842e8732?pvs=4'
            />
            <Article
              title='Essential cores for Personal Growth'
              date='April, 2025'
              link='https://woolly-revolve-fec.notion.site/The-Architecture-of-Character-Essential-cores-for-Personal-Growth-1d7bdfa1611d80e7beebe52e63b8ed42?pvs=4'
            />
            <Article
              title='Key Business Systems Explained: POS, ESB, MOKA, ERM, and CRP'
              date='February, 2026'
              link='https://woolly-revolve-fec.notion.site/Key-Business-Systems-Explained-POS-ESB-MOKA-ERM-and-CRP-2fbbdfa1611d802e949df0709eff2ce2?source=copy_link'
            />
            <Article
              title='The Power and Peril of Turning Experience into Stories'
              date='March, 2025'
              link='https://woolly-revolve-fec.notion.site/The-Power-and-Peril-of-Turning-Experience-into-Stories-1a9bdfa1611d804fb672eb253e81e054?pvs=4'
            />
            <Article
              title='My readings'
              date='March, 2024'
              link='https://woolly-revolve-fec.notion.site/2fdf26a029464252b2ef134f1e81a9dc?v=0ccf1606485e42899e3f534acf249694&pvs=4'
            />
            <Article
              title='Attention Problems'
              date='March, 2024'
              link='https://woolly-revolve-fec.notion.site/Attention-Problems-750e95ef18a2444f8c67ae157fa73920?pvs=4'
            />
            <Article
              title='My Philosophy'
              date='March, 2024'
              link='https://woolly-revolve-fec.notion.site/My-simple-life-philosophy-dc5a4134163f4f58bae92392a80b6a85?pvs=4'
            />
            <Article
              title='Win friends & Influence people'
              date='October, 2024'
              link='https://woolly-revolve-fec.notion.site/How-to-Win-Friends-Influence-People-129bdfa1611d800796a6f66508697387?pvs=4'
            />
            <Article
              title='What is a dollar ?'
              date='March, 2024'
              link='https://woolly-revolve-fec.notion.site/What-is-a-dollar-0a99fb50230a4a7cb7cc877198e322e7?pvs=4'
            />
            <Article
              title='Dynamic and Static libraries'
              date='March, 2024'
              link='https://woolly-revolve-fec.notion.site/Static-and-Dynamic-libraries-17972aff571b41438fdb99b87f9d6838?pvs=4'
            />
            <Article
              title='Building Docker images for multiple platforms'
              date='March, 2024'
              link='https://woolly-revolve-fec.notion.site/Building-Docker-images-for-multiple-platforms-7a84ad5b58194c3b859c1a41a11708d0?pvs=4'
            />
            <Article
              title='Conditional probability with Bayes theorem'
              date='February, 2026'
              link='https://woolly-revolve-fec.notion.site/Conditional-probability-with-Bayes-s-theorem-300bdfa1611d80dc9cddd8087b055dce?source=copy_link'
            />
            <Article
              title='Git Tutorial'
              date='March, 2024'
              link='https://woolly-revolve-fec.notion.site/Git-Tutorial-dca4aaaf46f2456ba95208b3c41ff31a?pvs=4'
            />
            <Article
              title='Questions to ask before a purchase'
              date='March, 2024'
              link='https://woolly-revolve-fec.notion.site/Questions-to-ask-before-making-any-purchase-9fe8fc6d23d54b8b82f2942ca8300745?pvs=4'
            />
            <Article
              title='What is the purpose of life ?'
              date='March, 2024'
              link='https://woolly-revolve-fec.notion.site/What-is-the-purpose-of-life-77e18ad6dac44790a25bc086ebdc7728?pvs=4'
            />
            <Article
              title='What principles organize my day ?'
              date='March, 2024'
              link='https://woolly-revolve-fec.notion.site/What-principles-organize-my-day-54caca69b2c247c9ba4f1454c2efe36d?pvs=4'
            />
            <Article
              title='Embracing the Journey'
              date='March, 2024'
              link='https://woolly-revolve-fec.notion.site/Embracing-the-Journey-e01bb1117ce041c8a5eed5a943e36776?pvs=4'
            />
            <Article
              title="The Last Man: Nietzsche's Warning About Comfortable Mediocrity"
              date='April, 2025'
              link='https://woolly-revolve-fec.notion.site/The-Last-Man-Nietzsche-s-Warning-About-Comfortable-Mediocrity-1debdfa1611d8022a175ede860b05bdb?pvs=4'
            />
            <Article
              title='Presentation tips'
              date='March, 2024'
              link='https://woolly-revolve-fec.notion.site/Presentation-Tips-873287297fad496b86fd606a6fc3bb1b?pvs=4'
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}
