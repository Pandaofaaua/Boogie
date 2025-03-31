"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const projects = [
  {
    title: "Wiki-Search",
    description:
      "A fast and intuitive search engine powered by the Wikipedia API, built with Next.js.",
    image: "/wikisearch.png", // Replace with actual image path
    tech: [
      { icon: SiNextdotjs, color: "#000000" },
      { icon: SiTypescript, color: "#3178C6" },
      { icon: SiTailwindcss, color: "#38BDF8" },
    ],
    live: "https://wikisearchbyloseyi.vercel.app",
    github: "https://github.com/Pandaofaaua/Wiki-Search",
  },
  {
    title: "Movies Hub",
    description:
      "A sleek movie & TV show explorer using the TMDb API, built with Next.js and Tailwind CSS.",
    image: "/movieshub.png", // Replace with actual image path
    tech: [
      { icon: SiNextdotjs, color: "#000000" },
      { icon: SiTypescript, color: "#3178C6" },
      { icon: SiTailwindcss, color: "#38BDF8" },
    ],
    live: "https://movies-hub-by-loseyi.vercel.app",
    github: "https://github.com/Pandaofaaua/Movies-HUB",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-primary font-bold text-gray-900 dark:text-white">
          Projects
        </h2>
        <p className="mt-2 text-lg font-body text-gray-600 dark:text-gray-300">
          Here are some of my latest projects showcasing my skills and passion
          for building modern web applications.
        </p>

        {/* Project Grid */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Project Image with Gradient Overlay on Hover */}
              <div className="relative w-full h-56 rounded-md overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition duration-500"></div>
              </div>

              {/* Project Details */}
              <div className="mt-4">
                <h3 className="text-xl font-primary font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 font-body">
                  {project.description}
                </p>

                {/* Tech Stack Icons with Custom Colors */}
                <div className="mt-3 flex items-center gap-3">
                  {project.tech.map(({ icon: Icon, color }, i) => (
                    <Icon key={i} className="text-2xl" style={{ color }} />
                  ))}
                </div>

                {/* Links */}
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-900 dark:text-gray-300 hover:underline"
                  >
                    <FiGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
