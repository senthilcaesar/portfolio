import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senthil Palanivelu",
  description: "Senthil Palanivelu Personal Website",
};

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="mt-4 flex w-full flex-col items-center self-center text-center">
              <AnimatedText
                text="👋 I'm Senthil Palanivelu"
                className="!text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
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
