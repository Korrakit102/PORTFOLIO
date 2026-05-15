import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience/>
      <Education/>
      <Contact />
    </>
  );
}

export default App;