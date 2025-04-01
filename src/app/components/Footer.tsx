"use client";

const Footer = () => {
  return (
    <footer className="py-6 text-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          © {new Date().getFullYear()} Akomolafe Oluwaseyi. All rights reserved.
        </p>

        {/* Navigation Links */}
        <nav className="mt-3 md:mt-0">
          <ul className="flex gap-4 text-sm text-gray-700 dark:text-gray-400">
            <li>
              <a
                href="#home"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
