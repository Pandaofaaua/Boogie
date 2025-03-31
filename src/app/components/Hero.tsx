"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-primary font-bold text-gray-900 dark:text-white"
        >
          Hi, I&apos;m <span className="text-primary">Oluwaseyi</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="mt-4 text-lg font-body text-gray-600 dark:text-gray-300"
        >
          A Front-End Developer building modern, responsive, and scalable web
          applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="mt-6 flex justify-center space-x-4"
        >
          {/* View Projects Button */}
          <Link
            href="#projects"
            className="px-6 py-3 bg-primary text-white font-primary font-medium rounded-md shadow-md hover:bg-green-600 transition"
          >
            View Projects
          </Link>

          {/* Contact Me Button */}
          <Link
            href="mailto:loseyii014@gmail.com"
            className="px-6 py-3 border border-gray-700 dark:border-gray-300 text-gray-900 dark:text-white font-primary font-medium rounded-md shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
