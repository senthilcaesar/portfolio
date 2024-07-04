import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import pca from "../../public/images/articles/pca.png";
import corr from "../../public/images/articles/corr.png";
import rf from "../../public/images/articles/rf.png";
import nl from "../../public/images/articles/nl.png";
import lg from "../../public/images/articles/lg.png";
import ttest from "../../public/images/articles/ttest2.png";
import eigen from "../../public/images/articles/eigen.png";
import ml from "../../public/images/articles/ml.png";
import gdlinear from "../../public/images/articles/gdlinear.png";
import costfunc from "../../public/images/articles/costfunc.png";
import perceptron from "../../public/images/articles/perceptron.png";
import classify from "../../public/images/articles/classify.png";
import svm from "../../public/images/articles/svm.png";
import Intervals from "../../public/images/articles/Intervals.png";
import ss from "../../public/images/articles/thermal_distress_plot1.png";
import anscombe from "../../public/images/articles/anscombe.png";
import dice from "../../public/images/articles/dice.png";
import clt from "../../public/images/articles/clt.png";
import prob from "../../public/images/articles/prob.png";
import happy from "../../public/images/articles/happy.png";

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
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
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
          <ul className="grid grid-cols-3 gap-4 lg:gap-6 md:grid-cols-2 sm:grid-cols-1 sm:gap-y-8">
            <FeaturedArticle
              img={ss}
              title="Challenger USA Space Shuttle O-Ring"
              time="5 min read"
              summary="Predict the number of O-rings that experience thermal distress on a flight at 31 degrees F given data on the previous 23 shuttle flights"
              link="https://woolly-revolve-fec.notion.site/Challenger-USA-Space-Shuttle-O-Ring-a96168b3c1934551b159fa709e585367?pvs=4"
            />
            <FeaturedArticle
              img={Intervals}
              title="Data Representation"
              summary="Mean, Median, Mode, Variance, Standard deviation, Skewness, IQR, Kurtosis, QQ plot"
              time="10 min read"
              link="https://woolly-revolve-fec.notion.site/Data-Representation-6e3d44160efa4a32a0ce1562e6fe0357?pvs=4"
            />
            <FeaturedArticle
              img={anscombe}
              title="Anscombe's quartet"
              summary="Descriptive statistics, Data visualization"
              time="5 min read"
              link="https://woolly-revolve-fec.notion.site/Anscombe-s-quartet-6a5b6d085f5349008c6b9e8fd286ac0a?pvs=4"
            />
            <FeaturedArticle
              img={happy}
              title="World Happiness"
              time="10 min read"
              summary="Use the World Happiness Report dataset for predicting the happiness. Exploratory data analysis, Random Forest, Linear Regression, Python"
              link="https://woolly-revolve-fec.notion.site/Exploratory-Data-Analysis-Linear-Regression-99df93e03cde4cb9b3a876d2aa30380b?pvs=4"
            />
            <FeaturedArticle
              img={pca}
              title="Principal Component Analysis"
              time="10 min read"
              summary="Comprehensive overview of PCA."
              link="https://woolly-revolve-fec.notion.site/Principal-Component-Analysis-8835793315b04b48b59509ac6e0ee6c2?pvs=4"
            />

            <FeaturedArticle
              img={corr}
              title="Pearson Correlation"
              time="5 min read"
              summary="Relationship between salt intake and systolic blood pressure."
              link="https://woolly-revolve-fec.notion.site/Pearson-correlation-b856f2519fa445aa8c037d6b2e78f8f5?pvs=4"
            />
            <FeaturedArticle
              img={eigen}
              title="Application of Eigenvalues and Eigenvectors"
              time="10 min read"
              summary="Image Compression"
              link="https://woolly-revolve-fec.notion.site/Application-of-Eigenvalues-and-Eigenvectors-87613972af0b4138bcd8779f9a429cd0?pvs=4"
            />
            <FeaturedArticle
              img={costfunc}
              title="Optimizing Functions"
              time="10 min read"
              link="https://woolly-revolve-fec.notion.site/Optimizing-Functions-4138080cbe1f42b4a3c2d2438561ac8e?pvs=4"
            />
            <FeaturedArticle
              img={ttest}
              title="Two-Sample T-Test"
              time="5 min read"
              summary="Determine if the means of two independent groups are significantly different from one another."
              link="https://woolly-revolve-fec.notion.site/Two-Sample-T-Test-8d37782b853a40b6a77da3d9605e7b81?pvs=4"
            />
            <FeaturedArticle
              img={gdlinear}
              title="Optimization Using Gradient Descent"
              time="10 min read"
              summary="Linear Regression"
              link="https://woolly-revolve-fec.notion.site/Optimization-Using-Gradient-Descent-0c0fb2c0505b432195d163dbd7ff80f6?pvs=4"
            />
            <FeaturedArticle
              img={perceptron}
              title="Regression with Perceptron"
              time="10 min read"
              summary="Neural network corresponding to a simple linear regression model"
              link="https://woolly-revolve-fec.notion.site/Regression-with-Perceptron-3d15ece5a08f4c3d88dcf1d686804294?pvs=4"
            />
            <FeaturedArticle
              img={ml}
              title="Machine Learning Math Concepts"
              time="15 min read"
              summary="Three areas of mathematics lie at the heart of machine learning: linear algebra, multivariate calculus and probability theory"
              link="https://woolly-revolve-fec.notion.site/ML-Math-concepts-3277f5cfdcf54463869a32aa639b05c0?pvs=4"
            />
            <FeaturedArticle
              img={classify}
              title="Classification with Perceptron"
              time="10 min read"
              summary="Single perceptron neural network model to solve a linear classification problem. Finding a straight line in a plane that would serve as a decision boundary to separate two classes."
              link="https://woolly-revolve-fec.notion.site/Classification-with-Perceptron-562735a8f1e5441c92ce6f9b5e6b898e?pvs=4"
            />
            <FeaturedArticle
              img={dice}
              title="Simulate Dice Throws with NumPy"
              time="10 min read"
              summary="Python, NumPy"
              link="https://woolly-revolve-fec.notion.site/Simulate-Dice-Throws-with-NumPy-e29fed1d1105458fa31aeae3e3456344?pvs=4"
            />
            <FeaturedArticle
              img={svm}
              title="Support Vector Machine"
              time="5 min read"
              link="https://woolly-revolve-fec.notion.site/Support-Vector-Machine-cdd763cc9fab4aadad1d7523966cdba5?pvs=4"
            />
            <FeaturedArticle
              img={clt}
              title="Central Limit Theorem"
              time="10 min read"
              summary="Python, NumPy, Seaborn, Gaussian"
              link="https://woolly-revolve-fec.notion.site/Central-Limit-Theorem-3dfcb77a12674111b98775b5ff122794?pvs=4"
            />
            <FeaturedArticle
              img={prob}
              title="Probability and Statistics"
              time="10 min read"
              summary="Regularization, Random noise, MLE, Gaussian Distribution"
              link="https://woolly-revolve-fec.notion.site/Probability-and-Statistics-3a2fe4d606a24dea9bab76093b2bee68?pvs=4"
            />
            <FeaturedArticle
              img={lg}
              title="Logistic Regression"
              time="10 min read"
              link="https://woolly-revolve-fec.notion.site/The-Logic-of-Logistic-Regression-d2213374b5a942b5ad8a0a54b5f23317?pvs=4"
            />
            <FeaturedArticle
              img={rf}
              title="Random Forest"
              time="5 min read"
              link="https://woolly-revolve-fec.notion.site/Random-Forest-608b2dc8e2cb4986bb38dcfa0a71284e?pvs=4"
            />
            <FeaturedArticle
              img={nl}
              title="Non-Linear SVM"
              time="5 min read"
              link="https://woolly-revolve-fec.notion.site/Non-Linear-SVM-1d9658b121404e73a73be996f2e542f4?pvs=4"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            All Articles
          </h2>

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
          </ul>
        </Layout>
      </main>
    </>
  );
}
