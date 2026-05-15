// Experience.jsx
function Experience() {
  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.heading}>Professional Experience</h2>
      
      {/* 1. POS Project (Freelance) */}
      <div style={styles.card}>
        <div style={styles.header}>
          <h3 style={styles.jobTitle}>Freelance Software Engineer</h3>
          <span style={styles.date}>2024 - Present</span>
        </div>
        <span style={styles.projectTitle}>POScafebaansoi5 Project</span>
        <ul style={styles.list}>
          <li>Developed a comprehensive <strong>Point of Sale (POS) system</strong> using <strong>Flutter</strong> for a seamless cross-platform experience.</li>
          <li>Engineered backend and real-time database management using <strong>Firebase & Cloud Firestore</strong>.</li>
          <li>Integrated <strong>Printer SDK (Bluetooth/Network)</strong> for automated receipt printing systems.</li>
        </ul>
      </div>

      {/* 2. SAYA Jewelry Project */}
      <div style={styles.card}>
        <div style={styles.header}>
          <h3 style={styles.jobTitle}>Full Stack Developer (Academic Project)</h3>
          <span style={styles.date}>2025 - 2026</span>
        </div>
        <span style={styles.projectTitle}>SAYA Jewelry E-commerce App</span>
        <ul style={styles.list}>
          <li>Designed and developed a <strong>Multi-vendor E-commerce platform</strong> for jewelry, featuring a specialized <strong>Jewelry Customization</strong> module.</li>
          <li>Owned the end-to-end development (Front-end & Back-end), ensuring smooth data flow between the UI and server-side logic.</li>
          <li>Implemented <strong>Firebase Authentication and Real-time Database</strong> integration to manage store inventories and user-customized orders.</li>
        </ul>
      </div>

      {/* 3. Warehouse Stock Project */}
      <div style={styles.card}>
        <div style={styles.header}>
          <h3 style={styles.jobTitle}>Full Stack Developer (Academic Project)</h3>
          <span style={styles.date}>2025 - 2026</span>
        </div>
        <span style={styles.projectTitle}>Warehouse Stock Management System</span>
        <ul style={styles.list}>
          <li>Built a <strong>Web Application</strong> for managing automotive spare part inventory for specialized retail stores.</li>
          <li>Developed both Front-end interfaces and Back-end systems, focusing on optimized <strong>Database Architecture</strong>.</li>
          <li>Leveraged <strong>Cloud Firestore</strong> to manage complex warehouse data, tracking stock levels, and streamlining supply chain operations.</li>
        </ul>
      </div>

    </section>
  );
}

const styles = {
  section: { 
    padding: "80px 20px", 
    maxWidth: "900px", 
    margin: "0 auto",
    textAlign: "left"
  },
  heading: { 
    textAlign: "center", 
    marginBottom: "50px",
    fontSize: "2.2rem",
    color: "#2c3e50",
    fontWeight: "bold"
  },
  card: { 
    background: "#fff", 
    padding: "30px", 
    borderRadius: "12px", 
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    borderLeft: "5px solid #3866d1",
    marginBottom: "30px"
  },
  header: { 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center",
    marginBottom: "5px" 
  },
  jobTitle: {
    margin: 0,
    fontSize: "1.4rem",
    color: "#2c3e50"
  },
  date: { 
    color: "#7f8c8d", 
    fontSize: "0.9rem",
    fontWeight: "500"
  },
  projectTitle: { 
    color: "#3866d1", 
    fontWeight: "600", 
    fontSize: "1.15rem",
    display: "block",
    marginBottom: "15px"
  },
  list: { 
    lineHeight: "1.8", 
    color: "#444", 
    paddingLeft: "20px" 
  }
};

export default Experience;