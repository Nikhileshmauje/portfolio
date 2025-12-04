import About from "./components/About";
import BlurBackground from "./components/BlurBackground";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <BlurBackground />
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <Navbar />
        <Hero />
        <Project />
        <Technologies />
        <Experience />
        <About />
        <Education />
        <Contact />
      </main>
    </>
  );
};

export default App;
