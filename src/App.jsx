import About from "./components/About";
import BlurBackground from "./components/BlurBackground";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <>
      <BlurBackground />
      <Navbar />
      <main className="antialised overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <Navbar />
        <Hero />
        <Project />
        <Technologies />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  );
};

export default App;
