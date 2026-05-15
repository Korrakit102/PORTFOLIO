

function Projects() {
  return (
    <section id="projects"  style={styles.section}>
      <h2>Projects</h2>
        <h3>Past Projects</h3>
        <p>This was a project done during the academic year, from the first to the fourth year.</p>
      <div style={styles.grid}>

        <div style={styles.card}>
          <h3>SAYA Jewelry E-commerce App</h3>
          <p>Flutter + Firebase</p>
        </div>

        <div style={styles.card}>
          <h3>Warehouse Stock App</h3>
          <p>Flutter + Firestore</p>
        </div>

        <div style={styles.card}>
          <h3>Portfolio Website</h3>
          <p>React + Vite</p>
        </div>
     
      </div>

       <h3>Present My Projects</h3>
       <p>The system is under development.</p>
        <div style={styles.grid}>

        <div style={styles.card}>
          <h3>POScafebaansoi5 App</h3>
          <p>Flutter (App)
             Firebase  (Backend)
             Cloud Firestore (Database)
             REST API
            Printer SDK</p>
        </div>
         </div>
       <div style={styles.skillsContainer}>
  <h3 style={styles.subHeading}>Programming Skills</h3>
  
  <div style={styles.skillCard}>
    <p style={styles.skillText}>
      Flutter (Advanced)<br />
      Firebase (Advanced)<br />
      Cloud Firestore (Advanced)<br />
      REST API (Proficient)
    </p>
  </div>
</div>
        
         
       
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    textAlign: "center",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "40px",
  },
  card: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    width: "200px",
  },
};

export default Projects;