import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>
          Last Updated:
          <Link
            href="https://www.onthisday.com/day"
            target="_blank"
            className="underline underline-offset-2"
          >
            May, {new Date().getFullYear()}
          </Link>
        </span>

        {/* 
        <Link
          href="https://devdreaming.com/about"
          target="_blank"
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
        */}
      </Layout>
    </footer>
  );
};

export default Footer;
