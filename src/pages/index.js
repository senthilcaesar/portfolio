import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/portfolioImage.png";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Senthil Palanivelu</title>
        <meta
          name="description"
          content="Senthil Palanivelu's Personal Website"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/3 lg:hidden md:inline-block md:w-full ml-15">
              <Image
                src={profilePic}
                alt="Senthil Palanivelu"
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>
            <div className="mt-5 flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="👋 I'm Senthil"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              {/*}
              <AnimatedText
                text=""
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
  {*/}
              <p className="mt-7 my-4 text-base font-medium md:text-sm sm:!text-xs">
                Background in computer science. Interested in developing
                predictive models which combine physiological, behavioral,
                clinical, imaging, genetic, and epidemiological measures with
                the goal of improving outcome predictions in various diseases.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="/documents/Senthil.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:senthilcaesar@gmail.com"
                  className="mt-5 ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
      </article>
    </>
  );
}
