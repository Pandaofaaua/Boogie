"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSanity,
  SiBootstrap,
  SiJavascript,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { FaSalesforce, FaNode } from "react-icons/fa6";

const skills = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Sanity.io", icon: SiSanity, color: "#F03E2F" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Salesforce Apex&Lwc", icon: FaSalesforce, color: "#00A1E0" },
  { name: "Node.js", icon: FaNode, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "ExpressJS", icon: SiExpress, color: "#000000" },
];

const About = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        {/* Left Side - Bio */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-primary font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-4 text-lg font-body text-gray-600 dark:text-gray-300 leading-relaxed">
            I&apos;m a passionate Front-End & Salesforce Developer dedicated to
            building modern, scalable, and interactive web applications. I enjoy
            crafting clean, responsive, and user-friendly experiences that blend
            aesthetics with functionality, while also leveraging Salesforce to
            create efficient, customized business solutions. With a focus on
            performance, accessibility, and scalability, I aim to deliver
            products that make a real impact.
          </p>

          {/* Skills Section */}
          <h3 className="mt-6 text-xl font-primary font-semibold text-gray-900 dark:text-white">
            Skills & Technologies
          </h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 flex flex-wrap gap-3"
          >
            {skills.map(({ name, icon: Icon, color }) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-body font-medium rounded-md cursor-pointer transition-all"
              >
                <Icon className="text-lg" style={{ color }} />{" "}
                {/* Icon with custom color */}
                {name} {/* Skill Name */}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Blurred Background Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative w-60 h-60 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="/actualimg.jpg"
            alt="Profile Picture"
            fill
            className="object-cover blur-md hover:blur-0 transition duration-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
