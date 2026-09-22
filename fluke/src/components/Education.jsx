const competencies = [
  "Full-stack Development",
  "AI Integration",
  "Software Architecture",
  "Database Management",
  "Cybersecurity Fundamentals",
];

function Education() {
  return (
    <section id="education" className="section education-section reveal" aria-labelledby="education-title">
      <div className="section-inner education-layout">
        <div>
          <p className="section-kicker">Education</p>
          <h2 id="education-title" className="section-title">Mae Fah Luang University</h2>
          <p className="education-date">2023 - Present</p>
        </div>

        <div className="education-content">
          <p className="degree">Bachelor of Engineering in Software Engineering</p>
          <p>
            Currently studying modern web technologies, software architecture, Artificial
            Intelligence, and full-stack development. I also study cybersecurity fundamentals,
            including network security, incident response, and access control, and I am preparing
            for the ISC2 Certified in Cybersecurity (CC) exam.
          </p>

          <div className="tech-list education-tags" aria-label="Core competencies">
            {competencies.map((competency) => (
              <span key={competency}>{competency}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
