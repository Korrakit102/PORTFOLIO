import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = Math.min(window.innerHeight * 0.35, 280);
      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= marker && rect.bottom > marker) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    const updateActiveSectionFromHash = () => {
      const sectionId = window.location.hash.replace("#", "");
      if (navItems.some((item) => item.id === sectionId)) {
        setActiveSection(sectionId);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSectionFromHash);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSectionFromHash);
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="nav-inner">
        <a className="nav-brand" href="#home" onClick={() => setIsMenuOpen(false)}>
          Korrakit
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <div
          id="primary-navigation"
          className={`nav-menu ${isMenuOpen ? "is-open" : ""}`}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? "is-active" : ""}`}
              aria-current={activeSection === item.id ? "page" : undefined}
              onClick={() => {
                setActiveSection(item.id);
                setIsMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
