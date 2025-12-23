"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { SiEthereum, SiSolana, SiTelegram, SiX } from "react-icons/si";

const projects = [
  {
    title: "Web3 Experience",
    description:
      "Active participant in the Web3 ecosystem since 2019, contributing across communities, testnets, and blockchain initiatives.",
    image: "/Boogie/BoogieLogo2.jpeg", // keep image logic intact
    tech: [{ icon: SiX, color: "#000" }],
    live: "https://x.com/prufboogie?s=21",
  },
  {
    title: "Team Member — KOS",
    description:
      "Worked as a team member contributing to Web3 initiatives and ecosystem growth.",
    image: "/Boogie/Kos.png",
    tech: [{ icon: SiX, color: "#000" }],
    live: "https://x.com/koslabs_?s=21",
  },
  {
    title: "Owner — EchoNet",
    description:
      "Founder and operator of EchoNet, a Web3-focused initiative built around community and blockchain adoption.",
    image: "/Boogie/Echonet.png",
    tech: [{ icon: SiTelegram, color: "#26A5E4" }],
    live: "https://t.me/+k_WpMrbyPQRmZTU8",
  },
  {
    title: "Community Manager — Lumex",
    description:
      "Managed and supported Web3 community engagement, onboarding, and ecosystem participation.",
    image: "/Boogie/Lumex.png",
    tech: [
      { icon: SiTelegram, color: "#26A5E4" },
      { icon: SiX, color: "#2563eb" },
    ],
    live: "https://x.com/web3lumex?s=21",
  },
  //https://x.com/web3lumex?s=21
  {
    title: "Devnet Participation",
    description:
      "Actively participated in devnets and node running across Aptos, Caldera, and Zora.",
    image: "/Boogie/Aptos.png",
    tech: [
      { icon: SiEthereum, color: "#3C3C3D" },
      { icon: SiSolana, color: "#14F195" },
    ],
    live: "https://aptosnetwork.com",
  },
  {
    title: "Tools & Wallets",
    description:
      "Daily-use Web3 tools including Zerion, Phantom, MetaMask, and Rabby wallet.",
    image: "/Boogie/Zerion.png",
    tech: [
      { icon: SiEthereum, color: "#3C3C3D" },
      { icon: SiSolana, color: "#14F195" },
    ],
    live: "https://zerion.io",
  },
];

const Projects = () => {
  return (
    <section id="proof" className="py-16 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-primary font-bold text-pruf ">Proof</h2>
        <p className="mt-2 text-lg font-body text-gray-600">
          Verifiable involvement across Web3 ecosystems, communities, and
          blockchain infrastructure.
        </p>

        {/* Proof Grid */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Visual Placeholder (keeps layout clean) */}
              <div className="relative w-full h-40 rounded-md overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300  flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>

              {/* Details */}
              <div className="mt-4">
                <h3 className="text-xl font-primary font-semibold text-gray-900 ">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 font-body">
                  {project.description}
                </p>

                {/* Icons */}
                <div className="mt-3 flex items-center gap-3">
                  {project.tech.map(({ icon: Icon, color }, i) => (
                    <Icon key={i} className="text-2xl" style={{ color }} />
                  ))}
                </div>

                {/* Link */}
                <div className="mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600  hover:underline"
                  >
                    <FiExternalLink /> View Reference
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
