import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const root = document.documentElement;
    const revealItems = document.querySelectorAll(".reveal");

    root.classList.add("motion-ready");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
