// Contact.jsx
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'; // ติดตั้งด้วย npm install react-icons

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact Me</h2>
      <p style={styles.subText}>I am currently looking for new opportunities. My inbox is always open.</p>
      
      <div style={styles.iconContainer}>
        {/* Email */}
        <a href="mailto:hlakdee7403@gmail.com" style={styles.iconLink} title="Send Email">
          <FaEnvelope style={styles.icon} />
          <span style={styles.label}>Email</span>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/Korrakit102" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={styles.iconLink} 
          title="GitHub Profile"
        >
          <FaGithub style={styles.icon} />
          <span style={styles.label}>GitHub</span>
        </a>

        {/* Instagram */}
        <a 
          href="https://www.instagram.com/135_kit/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={styles.iconLink} 
          title="Instagram Profile"
        >
          <FaInstagram style={styles.icon} />
          <span style={styles.label}>Instagram</span>
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    textAlign: "center",
    background: "#ffffff",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#2c3e50",
    fontWeight: "bold"
  },
  subText: {
    color: "#7f8c8d",
    fontSize: "1.1rem",
    marginBottom: "50px",
    maxWidth: "600px",
    margin: "0 auto 50px auto"
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap"
  },
  iconLink: {
    textDecoration: "none",
    color: "#3866d1", // สีหลักของ Theme คุณ
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s ease, color 0.3s ease",
  },
  icon: {
    fontSize: "3.2rem",
    marginBottom: "10px",
  },
  label: {
    fontSize: "0.95rem",
    fontWeight: "600",
    color: "#2c3e50"
  }
};

export default Contact;