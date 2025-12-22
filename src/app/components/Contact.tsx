"use client";
import { motion } from "framer-motion";
import { SiTelegram, SiX } from "react-icons/si";

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
        <p
          className="mt-4 text-lg font-body text-gray-600 dark:text-gray-300
         leading-relaxed"
        >
          Building the future of the decentralized web, one community at a time.
          I&apos;m available for strategic partnerships and growth consulting.
          If you&apos;re ready to turn users into advocates, drop me a message
          and let&apos;s make it happen.
        </p>

        {/* CTA Button */}
        <motion.a
          href="https://x.com/prufboogie?s=21"
          className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-primary dark:bg-blue-500 rounded-lg 
                     transition-all duration-300 hover:bg-green-900 dark:hover:bg-blue-400 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello 👋
        </motion.a>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://x.com/prufboogie?s=21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiX
              className="text-2xl text-gray-900 dark:text-gray-300
             hover:text-primary dark:hover:text-blue-400 transition"
            />
          </a>
          <a
            href="https://t.me/prufboogiepills"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTelegram
              className="text-2xl text-gray-900 dark:text-gray-300
             hover:text-primary dark:hover:text-blue-400 transition"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
