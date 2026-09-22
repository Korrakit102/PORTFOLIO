import { useRef } from "react";
import { FaArrowRight, FaEnvelope, FaGithub } from "react-icons/fa";
import profile from "../assets/jj.jpg";

function Hero() {
  const portraitRef = useRef(null);

  const handlePointerMove = (event) => {
    if (
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const element = portraitRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -7;

    element.style.setProperty("--tilt-x", `${x}deg`);
    element.style.setProperty("--tilt-y", `${y}deg`);
  };

  const resetTilt = () => {
    if (!portraitRef.current) return;
    portraitRef.current.style.setProperty("--tilt-x", "0deg");
    portraitRef.current.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <>
      <section id="home" className="hero-section">
        <div className="section-inner hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">Hi, I'm Fluke.</p>
            <h1>
              <span>Software</span>
              <span>Engineer</span>
            </h1>
            <p className="hero-subtitle">Full-stack Development & AI Integration</p>
            <p className="hero-description">
              Fourth-year Software Engineering student at Mae Fah Luang University, focused on
              building practical full-stack systems with Firebase, Flutter, AI integration, and
              cybersecurity-aware testing workflows.
            </p>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href="#projects">
                View Projects
                <FaArrowRight aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
                <FaEnvelope aria-hidden="true" />
              </a>
            </div>

            <div className="hero-links" aria-label="Professional links">
              <a
                href="https://github.com/Korrakit102"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile portrait and technical focus">
            <div
              className="portrait-stage"
              ref={portraitRef}
              onPointerMove={handlePointerMove}
              onPointerLeave={resetTilt}
            >
              <div className="portrait-frame">
                <img src={profile} alt="Fluke profile portrait" />
              </div>
              <span className="floating-tag tag-fullstack">Full-stack</span>
              <span className="floating-tag tag-ai">AI Integration</span>
              <span className="floating-tag tag-testing">Software Testing</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section reveal" aria-labelledby="about-title">
        <div className="section-inner about-layout">
          <div>
            <p className="section-kicker">About</p>
            <h2 id="about-title" className="section-title">Engineering Practical Systems</h2>
          </div>

          <div className="about-content">
            <p>
              I learn best through real projects, from POS and e-commerce applications to
              warehouse stock systems and browser-based testing. My work combines full-stack
              development, cybersecurity fundamentals, and AI integration with a focus on systems
              that are useful, maintainable, and ready for real users.
            </p>

            <div className="focus-list" aria-label="Technical focus areas">
              <div className="focus-item">
                <span>01</span>
                <strong>Full-stack Development</strong>
                <p>Flutter, Firebase, Firestore, REST API, and web application workflows.</p>
              </div>
              <div className="focus-item">
                <span>02</span>
                <strong>Cybersecurity</strong>
                <p>Network security, incident response, access control, and UAT awareness.</p>
              </div>
              <div className="focus-item">
                <span>03</span>
                <strong>AI Integration</strong>
                <p>Applying AI concepts to software systems and testing support workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
