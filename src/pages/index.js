import AnimatedText from "@/components/AnimatedText";
// import { HireMe } from "@/components/HireMe";
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
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="w-2/2 md:w-2/3 sm:w-full">
              <Image
                src={profilePic}
                alt="Senthil Palanivelu"
                className="h-auto w-full rounded-full"
                sizes="100vw"
                priority
              />
            </div>
            <div className="mt-4 flex w-full flex-col items-center self-center text-center">
              <AnimatedText
                text="👋 I'm Senthil"
                className="!text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              {/*}
              <AnimatedText
                text=""
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
  {*/}
              <p className="mt-7 my-4 text-lg font-medium md:text-base sm:text-sm">
                Background in computer science with a strong interest in AI
                Engineering and Machine Learning. Committed to leveraging AI and
                data-driven insights to develop solutions that create meaningful
                and measurable business value.
              </p>
              <div className="mt-2 flex items-center self-center">
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
              </div>
            </div>
          </div>
        </Layout>
      </article>
    </>
  );
}
