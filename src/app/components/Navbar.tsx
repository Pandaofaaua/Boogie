"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", id: "/" },
    { name: "What I Do", id: "whatido" },
    { name: "Proof", id: "proof" },
    { name: "Why Trust Me", id: "trust" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-primary font-bold text-pruf ">
          <div className="flex items-center">
            <Image
              src="/Boogie/BoogieLogo2.jpeg"
              alt="Logo"
              className="h-8 w-8 rounded-lg mr-2"
              width={32}
              height={32}
            />
            <span className="text-primary">Boogie</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={`#${item.id.toLowerCase()}`}
              className="text-primary dark:text-gray-300 hover:text-pruf transition"
            >
              {item.name}
            </Link>
          ))}
          <div className="hidden">
            <ThemeToggle /> {/* Theme Toggle Button */}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-pruf "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Mobile Navigation (Slide-in from Right) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-64 h-full bg-white
               shadow-lg z-50 flex flex-col items-center pt-20 space-y-6"
            >
              {/* Close Button Inside Menu */}
              <button
                className="absolute top-5 right-5 text-primary "
                onClick={() => setMenuOpen(false)}
              >
                <FiX size={28} />
              </button>
              <div className="absolute top-5 left-5 hidden">
                <ThemeToggle /> {/* Theme Toggle Button */}
              </div>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={`#${item.id.toLowerCase()}`}
                  className="text-primary  pt-6 text-lg hover:text-pruf
                  transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
