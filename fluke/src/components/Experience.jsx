const experiences = [
  {
    title: "Freelance Software Engineer",
    organization: "POScafebaansoi5 Project",
    date: "2025 - Present",
    bullets: [
      "Developed a comprehensive Point of Sale (POS) system using Flutter for a seamless cross-platform experience.",
      "Engineered backend and real-time database management using Firebase and Cloud Firestore.",
      "Integrated Printer SDK support for Bluetooth and network receipt printing systems.",
    ],
    tools: ["Flutter", "Firebase", "Cloud Firestore", "REST API", "Printer SDK"],
  },
  {
    title: "Software Tester Intern | IT Department",
    organization: "Mae Fah Luang Foundation",
    date: "June - July 2026",
    bullets: [
      "Developed automated test scripts using Playwright and used Agent Browser Tool to support browser-based testing.",
      "Performed manual testing to verify system functionality and identify defects.",
      "Tested system functionality in the User Acceptance Testing (UAT) environment to assess readiness for production release.",
    ],
    tools: [
      "Playwright",
      "Agent Browser Tool",
      "Test Scripting",
      "Automation Testing",
      "Manual Testing",
      "UAT",
    ],
  },
  {
    title: "Full Stack Developer",
    organization: "SAYA Jewelry E-commerce App",
    date: "2025 - 2026",
    bullets: [
      "Designed and developed a multi-vendor e-commerce platform for jewelry with a specialized customization module.",
      "Owned front-end and back-end development to support smooth data flow between the UI and server-side logic.",
      "Implemented Firebase Authentication and Realtime Database integration for inventories and customized orders.",
    ],
    tools: ["Flutter", "Firebase Authentication", "Realtime Database"],
  },
  {
    title: "Full Stack Developer",
    organization: "Warehouse Stock Management System",
    date: "2025 - 2026",
    bullets: [
      "Built a web application for managing automotive spare part inventory for specialized retail stores.",
      "Developed front-end interfaces and back-end systems with attention to database architecture.",
      "Leveraged Cloud Firestore to manage warehouse data, stock levels, and supply chain workflows.",
    ],
    tools: ["Web Application", "Cloud Firestore", "Database Architecture"],
  },
];

function Experience() {
  return (
    <section id="experience" className="section experience-section reveal" aria-labelledby="experience-title">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2 id="experience-title" className="section-title">Professional Timeline</h2>
        </div>

        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item" key={`${experience.title}-${experience.organization}`}>
              <div className="timeline-date">{experience.date}</div>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <p className="timeline-org">{experience.organization}</p>
                <h3>{experience.title}</h3>
                <ul>
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="timeline-tools" aria-label={`${experience.title} tools and skills`}>
                  {experience.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
