'use client';

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import {
  Github,
  Linkedin,
  Instagram,
  Sun,
  Moon,
  BookOpenText,
  ExternalLink,
  Newspaper,
  Menu,
  X,
  FlaskConical,
  Code
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeStore } from "@/store/useThemeStore";
import TechStackModal from "./TechStackModal";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathname = usePathname();
  const isExternal = href.startsWith("http");

  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${className} rounded relative group lg:text-light lg:dark:text-dark`}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {title}
      <span
        className={`
          inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5 
          transition-[width] ease duration-300 dark:bg-light
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}
          lg:bg-light lg:dark:bg-dark
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

interface CustomMobileLinkProps {
  href: string;
  title: string;
  className?: string;
  toggle: () => void;
}

const CustomMobileLink = ({ href, title, className = "", toggle }: CustomMobileLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <button
      className={`${className} rounded relative group lg:text-light lg:dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
              inline-block h-[1px] bg-dark absolute left-0 -bottom -0.5 
              transition-[width] ease duration-300 dark:bg-light
              ${isActive ? "w-full" : "w-0 group-hover:w-full"}
              lg:bg-light lg:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const { mode, toggleMode } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isTechStackOpen, setIsTechStackOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full flex items-center justify-between px-32 py-8 font-medium z-30 dark:text-light
    lg:px-16 relative md:px-12 sm:px-8 border-b border-dark/25 dark:border-light/25
    "
    >
      <button
        type="button"
        className="flex-col items-center justify-center hidden lg:flex"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        {/* Simple hamburger using generic spans or Lucide icons. Original used spans for animation. 
            Keeping logic but could replace with <Menu /> / <X /> if desired, 
            but the original animation is specialized. Keeping spans for now. 
        */}
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          } my-0.5`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center gap-8 xl:gap-4">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/articles" title="Articles" />
          <CustomLink href="/blogs" title="Blogs" />
        </nav>
        <nav
          className="flex items-center justify-center gap-5 xl:gap-3 flex-wrap lg:mt-2 text-dark dark:text-light"
        >
          <button
            onClick={() => setIsTechStackOpen(true)}
            className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-dark/20 dark:border-light/20 hover:bg-dark/5 dark:hover:bg-light/5 transition-colors"
            title="Tech Stack"
          >
            <Code className="w-5 h-5 xl:w-4 xl:h-4" />
            <span className="font-semibold text-sm xl:text-xs whitespace-nowrap">Tech Stack</span>
          </button>

          <motion.a
            target={"_blank"}
            className="w-7 h-7 xl:w-6 xl:h-6"
            href="https://senthilcaesar.github.io/knowledgelab/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 2 }}
            aria-label="Checkout my Knowledge Lab"
          >
            <FlaskConical className="w-full h-full" />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-7 h-7 xl:w-6 xl:h-6"
            href="https://senthilcaesar.github.io/my-reading/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 2 }}
            aria-label="Checkout my Readings"
          >
            <BookOpenText className="w-full h-full" />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-7 h-7 xl:w-6 xl:h-6"
            href="https://senthilcaesar.github.io/resources/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 2 }}
            aria-label="Checkout my Resources"
          >
            <ExternalLink className="w-full h-full" />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-7 h-7 xl:w-6 xl:h-6"
            href="https://senthilcaesar.github.io/blogs/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 2 }}
            aria-label="Checkout my Blogs"
          >
            <Newspaper className="w-full h-full" />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-7 h-7 xl:w-6 xl:h-6"
            href="https://github.com/SenthilCaesar"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 2 }}
            aria-label="Checkout my github profile"
          >
            <Github className="w-full h-full" />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-7 h-7 xl:w-6 xl:h-6"
            href="https://www.linkedin.com/in/senthil-palanivelu-0ba38844/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 2 }}
            aria-label="Checkout my linkedin profile"
          >
            <Linkedin className="w-full h-full" />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/senthil_p89/"
            className="w-7 h-7 xl:w-6 xl:h-6"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 2 }}
          >
             <Instagram className="w-full h-full" />
          </motion.a>

          <button
            onClick={toggleMode}
            className={`w-7 h-7 xl:w-6 xl:h-6 ease flex items-center justify-center rounded-full p-1  
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
            `}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <Sun className={"fill-dark w-full h-full"} />
            ) : (
              <Moon className={"fill-dark w-full h-full"} />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          className="min-w-[70vw] sm:min-w-[90vw] flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2
      -translate-y-1/2
      py-32 bg-dark/90 dark:bg-light/75 rounded-lg z-50 backdrop-blur-md text-light dark:text-dark
      "
          initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex items-center justify-center flex-col">
            <CustomMobileLink
              toggle={handleClick}
              className="mr-4 lg:m-0 lg:my-2"
              href="/"
              title="Home"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="mx-4 lg:m-0 lg:my-2"
              href="/about"
              title="About"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="mx-4 lg:m-0 lg:my-2"
              href="/projects"
              title="Projects"
            />

            <CustomMobileLink
              toggle={handleClick}
              className="ml-4 lg:m-0 lg:my-2"
              href="/articles"
              title="Articles"
            />

            <CustomMobileLink
              toggle={handleClick}
              className="ml-4 lg:m-0 lg:my-2"
              href="/blogs"
              title="Blogs"
            />
          </nav>

          <nav
            className="flex items-center justify-center mt-2
      "
          >
            <motion.button
              className="w-6 m-1 mx-3 sm:mx-1 flex items-center justify-center"
              onClick={() => {
                setIsOpen(false);
                setIsTechStackOpen(true);
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="View Project Tech Stack"
            >
              <Code className="w-6 h-6" />
            </motion.button>

            <motion.a
              target={"_blank"}
              className="w-6 m-1 mx-3 sm:mx-1"
              href="https://senthilcaesar.github.io/knowledgelab/"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my Knowledge Lab"
            >
              <FlaskConical className="w-6 h-6" />
            </motion.a>

            <motion.a
              target={"_blank"}
              className="w-6 m-1 mx-3 sm:mx-1"
              href="https://senthilcaesar.github.io/my-reading/"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my Readings"
            >
              <BookOpenText className="w-6 h-6" />
            </motion.a>

            <motion.a
              target={"_blank"}
              className="w-6 m-1 mx-3 sm:mx-1"
              href="https://senthilcaesar.github.io/resources/"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my Resources"
            >
              <ExternalLink className="w-6 h-6" />
            </motion.a>

            <motion.a
              target={"_blank"}
              className="w-6 m-1 mx-3 sm:mx-1"
              href="https://senthilcaesar.github.io/blogs/"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my Blogs"
            >
              <Newspaper className="w-6 h-6" />
            </motion.a>

            <motion.a
              target={"_blank"}
              className="w-6 m-1 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1 text-dark dark:text-light"
              href="https://github.com/SenthilCaesar"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my github profile"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              target={"_blank"}
              className="w-6 m-1 mx-3 sm:mx-1"
              href="https://www.linkedin.com/in/senthil-palanivelu-0ba38844/"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my linkedin profile"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>

            <motion.a
              target={"_blank"}
              className="w-6 m-1 mx-3 sm:mx-1"
              href="https://www.instagram.com/senthil_p89/"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my instagram profile"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>

            <button
              onClick={toggleMode}
              className={`w-6 h-6 ease m-1 ml-3 sm:mx-1 flex items-center justify-center rounded-full p-1  
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
            `}
              aria-label="theme-switcher"
            >
              {mode === "light" ? (
                <Sun className={"fill-dark"} />
              ) : (
                <Moon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>

      <TechStackModal 
        isOpen={isTechStackOpen} 
        onClose={() => setIsTechStackOpen(false)} 
      />
    </header>
  );
};

export default Navbar;
