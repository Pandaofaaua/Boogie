"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SiIpfs } from "react-icons/si";

import {
  FaEthereum,
  FaNode,
  FaBitcoin,
  FaDatabase, // Replacement for The Graph
  FaWallet, // Replacement for Metamask
} from "react-icons/fa";

const skills = [
  { name: "Metamask / Wallets", icon: FaWallet, color: "#F6851B" }, // Replaced SiMetamask with FaWallet
  { name: "Ethereum / EVM", icon: FaEthereum, color: "#627EEA" },
  { name: "Bitcoin / Blockchain", icon: FaBitcoin, color: "#F6851B" }, // Bitcoin Orange
  { name: "IPFS / Filecoin", icon: SiIpfs, color: "#65C2CD" },
  { name: "Node.js", icon: FaNode, color: "#339933" },
  { name: "Subgraph (The Graph)", icon: FaDatabase, color: "#6F5DEB" }, // Replaced SiThegraph with FaDatabase
];

const About = () => {
  return (
    <section id="whatido" className="py-16 px-6 md:px-12 lg:px-20">
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
          <h2 className="text-3xl font-primary font-bold text-pruf ">
            What I Do
          </h2>
          <p
            className="mt-4 text-lg font-body text-pruf
           leading-relaxed"
          >
            I&apos;m a passionate Web3 Engagement Specialist who transforms
            complex protocol data into accessible community insight. I utilize
            my analytical expertise (honed through a foundation in Chemical
            Engineering) to dissect and improve digital communication funnels. I
            thrive as a dedicated commentator and strategist, ensuring maximum
            value exchange and growth within the community. Former team member
            at Koslabs, committed to driving meaningful adoption and
            participation in Web3.
          </p>

          {/* Skills Section */}
          <h3 className="mt-6 text-xl font-primary font-semibold text-gray-900 ">
            Expertise
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
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900  text-sm font-body font-medium rounded-md cursor-pointer transition-all"
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
            src="/Boogie/BoogieLogo.jpeg"
            alt="Profile Picture"
            fill
            className="object-cover transition duration-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
