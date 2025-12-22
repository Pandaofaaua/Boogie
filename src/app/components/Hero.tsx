"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import { IoStatsChartOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="h-screen px-6">
      <div className="flex items-center justify-center text-center h-[80vh]">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-primary font-bold text-pruf "
          >
            Hi, I&apos;m <span className="text-primary">Pruf Boogie</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="mt-4 text-lg font-body text-pruf "
          >
            Web3 Community Strategist and Chemical Engineer | Building
            high-engagement digital platforms and providing valuable commentary
            (Reply Guy). Proven team experience from{" "}
            <span className="text-primary font-bold">Koslabs</span>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="mt-6 flex justify-center space-x-4"
          >
            {/* View Projects Button */}
            <Link
              href="#proof"
              className="px-6 py-3 bg-primary text-black font-primary font-medium rounded-md shadow-md hover:bg-green-600 transition"
            >
              View Proof
            </Link>

            {/* Contact Me Button */}
            <Link
              href="mailto:prufboogie@gmail.com"
              className="px-6 py-3 border border-gray-700 text-pruf
               font-primary font-medium rounded-md shadow-md hover:bg-gray-100  transition"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="h-[20vh] text-black w-full font-space">
        <div className="grid grid-cols-2 place-content-center text-center gap-4 max-w-4xl mx-auto text-pruf text-lg">
          <div className="flex flex-col ">
            <div className=" flex justify-center items-center mb-2">
              <FaUsers className="text-primary text-2xl mr-2" />
              <h2 className="text-2xl text-primary font-bold">500+</h2>
            </div>
            <p>Onboarded Members</p>
          </div>
          <div className="flex flex-col">
            <div className=" flex justify-center items-center mb-2">
              <IoStatsChartOutline className="text-primary text-2xl mr-2" />
              <h2 className="text-2xl text-primary font-bold">90%</h2>
            </div>
            <p>Retention Rates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
