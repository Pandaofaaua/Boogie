"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 md:px-12 lg:px-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-primary font-bold text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg font-body text-gray-600 dark:text-gray-300 leading-relaxed">
          I&apos;m open to job opportunities and collaborations. Whether you
          have a question or just want to say hi, feel free to drop me a
          message!
        </p>

        {/* CTA Button */}
        <motion.a
          href="mailto:loseyii014.com"
          className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-lg 
                     transition-all duration-300 hover:bg-blue-700 dark:hover:bg-blue-400 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello 👋
        </motion.a>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://github.com/Pandaofaaua"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub className="text-2xl text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
          <a
            href="https://linkedin.com/in/oluwaseyi-akomolafe-151a08237"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin className="text-2xl text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
          <a
            href="https://twitter.com/Loseyiknows"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter className="text-2xl text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
