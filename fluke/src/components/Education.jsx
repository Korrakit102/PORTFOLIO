// Education.jsx
function Education() {
  return (
    <section id="education" style={styles.section}>
      <h2 style={styles.heading}>Education</h2>
      
      <div style={styles.container}>
        <div style={styles.educationCard}>
          <div style={styles.cardHeader}>
            <h3 style={styles.university}>Mae Fah Luang University</h3>
            <span style={styles.duration}>2022 - Present</span>
          </div>
          
          <p style={styles.degree}>
            <strong>Bachelor of Engineering in Software Engineering</strong>
          </p>

          <div style={styles.content}>
            <p style={styles.description}>
              Currently pursuing a degree in Software Engineering. Gaining comprehensive knowledge in 
              modern web technologies, software architecture, Artificial Intelligence, and full-stack development. 
              Developing a strong foundation in building scalable systems and integrating AI solutions with 
              real-world software engineering practices.
            </p>

            <div style={styles.certificationBox}>
              <h4 style={styles.subHeading}>Self-Study & Professional Certifications:</h4>
              <p style={styles.description}>
                Active learner in <strong>Cybersecurity</strong>, focusing on foundational security principles 
                including Network Security, Incident Response, and Access Control. Currently preparing for the 
                <strong> ISC2 Certified in Cybersecurity (CC)</strong> exam to validate technical expertise in the field.
              </p>
            </div>

            <div style={styles.specialization}>
              <h4 style={styles.subHeading}>Core Competencies:</h4>
              <div style={styles.tagGroup}>
                <span style={styles.tag}>Full-stack Development</span>
                <span style={styles.tag}>AI Integration</span>
                <span style={styles.tag}>Software Architecture</span>
                <span style={styles.tag}>Database Management (Firestore/Firebase)</span>
                <span style={styles.tag}>Cybersecurity Fundamentals (ISC2 CC Path)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    background: "#f8f9fa",
    textAlign: "left",
  },
  heading: {
    textAlign: "center",
    marginBottom: "50px",
    fontSize: "2.2rem",
    color: "#2c3e50",
    fontWeight: "bold"
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  educationCard: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    borderTop: "6px solid #3866d1",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "10px",
  },
  university: {
    margin: 0,
    fontSize: "1.6rem",
    color: "#3866d1",
  },
  duration: {
    fontSize: "1rem",
    color: "#7f8c8d",
    fontWeight: "500",
  },
  degree: {
    fontSize: "1.2rem",
    color: "#2c3e50",
    marginBottom: "20px",
  },
  certificationBox: {
    background: "#f0f4ff",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "25px",
    borderLeft: "4px solid #3866d1",
  },
  content: {
    marginTop: "15px",
  },
  description: {
    lineHeight: "1.8",
    color: "#555",
    margin: "0 0 15px 0",
  },
  subHeading: {
    fontSize: "1.1rem",
    color: "#2c3e50",
    marginBottom: "15px",
    fontWeight: "600"
  },
  tagGroup: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  tag: {
    background: "#ffffff",
    color: "#3866d1",
    padding: "6px 16px",
    borderRadius: "25px",
    fontSize: "0.85rem",
    fontWeight: "600",
    border: "1px solid #d1dbff",
  }
};

export default Education;