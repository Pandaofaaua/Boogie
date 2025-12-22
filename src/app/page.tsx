import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Trust from "./components/Trust";
import Disclaimer from "./components/Disclaimer";
import Footer from "./components/Footer";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Trust />
      <Contact />
      <Disclaimer />
      <Footer />
    </>
  );
}
