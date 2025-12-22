/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        primary: "#0F9D58",
        secondary: "#A78BFA",
        accent: "#FBBF24",
        pruf: "#0B0B0B",
      },
    },
  },
  plugins: [],
};
