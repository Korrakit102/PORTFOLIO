import { useCallback, useEffect, useState } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import posCashier from "../assets/projects/pos-cashier.png";
import posDashboard from "../assets/projects/pos-dashboard.png";
import posMenu from "../assets/projects/pos-menu.png";
import posPromotions from "../assets/projects/pos-promotions.png";
import posReports from "../assets/projects/pos-reports.png";
import posStock from "../assets/projects/pos-stock.png";
import sayaCustomize from "../assets/projects/saya-customize.png";
import sayaHome from "../assets/projects/saya-home.png";
import sayaProfile from "../assets/projects/saya-profile.png";
import sayaRegister from "../assets/projects/saya-register.png";
import sayaSplash from "../assets/projects/saya-splash.png";

const projects = [
  {
    title: "POScafebaansoi5 App",
    type: "Freelance Project",
    role: "Freelance Software Engineer",
    description:
      "Cross-platform Point of Sale system with real-time data handling and receipt printing support for cafe operations.",
    stack: ["Flutter", "Firebase", "Cloud Firestore", "REST API", "Printer SDK"],
    facts: ["POS workflow", "Real-time database", "Bluetooth / Network printing"],
    images: [
      { src: posDashboard, alt: "POS manager dashboard with reports, order history, stock, menu, promotions, and settings cards" },
      { src: posCashier, alt: "POS cashier screen with product grid, category filters, cart summary, and checkout controls" },
      { src: posReports, alt: "POS reports screen with daily and monthly sales summary cards" },
      { src: posMenu, alt: "POS menu management screen with product list, category filters, and availability toggles" },
      { src: posStock, alt: "POS stock management screen with inventory table and stock status" },
      { src: posPromotions, alt: "POS promotion management screen with search, filters, and promotion cards" },
    ],
  },
  {
    title: "SAYA Jewelry E-commerce App",
    type: "Academic Project",
    role: "Full Stack Developer",
    description:
      "Multi-vendor jewelry e-commerce platform with a jewelry customization module and user order management.",
    stack: ["Flutter", "Firebase Authentication", "Realtime Database"],
    facts: ["Multi-vendor commerce", "Jewelry customization", "Inventory and orders"],
    images: [
      { src: sayaSplash, alt: "SAYA Jewelry mobile splash screen with brand logo" },
      { src: sayaHome, alt: "SAYA Jewelry mobile home screen with jewelry categories and product grid" },
      { src: sayaCustomize, alt: "SAYA Jewelry product customization screen with gemstone and material options" },
      { src: sayaRegister, alt: "SAYA Jewelry account registration screen with password requirements" },
      { src: sayaProfile, alt: "SAYA Jewelry profile screen with purchases, wallet shortcuts, and promotion banner" },
    ],
  },
  {
    title: "Warehouse Stock Management System",
    type: "Academic Project",
    role: "Full Stack Developer",
    description:
      "Web application for automotive spare part inventory management, focused on stock visibility and warehouse data structure.",
    stack: ["Web Application", "Cloud Firestore", "Database Architecture"],
    facts: ["Stock tracking", "Warehouse data", "Supply chain workflow"],
  },
];

const skills = ["Flutter - Advanced", "Firebase - Advanced", "Cloud Firestore - Advanced", "REST API - Proficient"];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeImage = selectedProject?.images?.[activeImageIndex];
  const hasGallery = Boolean(selectedProject?.images?.length);

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  }, []);

  const showPreviousImage = useCallback(() => {
    if (!selectedProject?.images?.length) return;
    setActiveImageIndex((current) =>
      current === 0 ? selectedProject.images.length - 1 : current - 1
    );
  }, [selectedProject]);

  const showNextImage = useCallback(() => {
    if (!selectedProject?.images?.length) return;
    setActiveImageIndex((current) =>
      current === selectedProject.images.length - 1 ? 0 : current + 1
    );
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeProject();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, activeImageIndex, closeProject, showNextImage, showPreviousImage]);

  return (
    <section id="projects" className="section projects-section reveal" aria-labelledby="projects-title">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-kicker">Projects</p>
          <h2 id="projects-title" className="section-title">Selected Work</h2>
          <p>
            A focused selection of systems built through freelance work, academic projects, and
            personal frontend development. Select a card to view project details.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article
              className={`project-feature ${index % 2 === 1 ? "is-reversed" : ""}`}
              key={project.title}
              role="button"
              tabIndex={0}
              aria-label={`View ${project.title} project details`}
              onClick={() => openProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openProject(project);
                }
              }}
            >
              <div className="project-fact-panel" aria-label={`${project.title} project facts`}>
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <ul>
                  {project.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </div>

              <div className="project-copy">
                <div className="project-title-line">
                  <h3>{project.title}</h3>
                  <FaArrowRight aria-hidden="true" />
                </div>
                <p className="project-role">{project.role}</p>
                <p>{project.description}</p>
                <div className="tech-list" aria-label={`${project.title} technology stack`}>
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="skills-ribbon" aria-label="Programming skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
          <button className="project-modal-backdrop" type="button" aria-label="Close project details" onClick={closeProject} />

          <div className="project-modal-panel">
            <div className="project-modal-header">
              <div>
                <p className="section-kicker">{selectedProject.type}</p>
                <h3 id="project-modal-title">{selectedProject.title}</h3>
                <p>{selectedProject.role}</p>
              </div>

              <button className="icon-button" type="button" aria-label="Close project details" onClick={closeProject}>
                <FaTimes aria-hidden="true" />
              </button>
            </div>

            <div className="project-modal-body">
              <div className="project-preview">
                {hasGallery ? (
                  <>
                    <img src={activeImage.src} alt={activeImage.alt} />

                    {selectedProject.images.length > 1 && (
                      <div className="gallery-controls" aria-label="Project screenshots controls">
                        <button type="button" aria-label="Previous screenshot" onClick={showPreviousImage}>
                          <FaChevronLeft aria-hidden="true" />
                        </button>
                        <span>
                          {activeImageIndex + 1} / {selectedProject.images.length}
                        </span>
                        <button type="button" aria-label="Next screenshot" onClick={showNextImage}>
                          <FaChevronRight aria-hidden="true" />
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="project-preview-empty">
                    <span>{selectedProject.title}</span>
                  </div>
                )}
              </div>

              <div className="project-modal-copy">
                <p>{selectedProject.description}</p>
                <div className="tech-list" aria-label={`${selectedProject.title} technology stack`}>
                  {selectedProject.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <ul className="project-modal-facts">
                  {selectedProject.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </div>
            </div>

            {hasGallery && (
              <div className="project-thumbnails" aria-label={`${selectedProject.title} screenshots`}>
                {selectedProject.images.map((image, index) => (
                  <button
                    type="button"
                    key={image.src}
                    className={activeImageIndex === index ? "is-active" : ""}
                    aria-label={`Show screenshot ${index + 1}`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img src={image.src} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
