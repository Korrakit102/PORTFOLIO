// Hero.jsx
import profile from "../assets/jj.jpg";

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.container}>
        {/* ส่วนรูปภาพและหัวข้อหลัก */}
        <div style={styles.header}>
          <img src={profile} alt="hero" style={styles.image} />
          <div style={styles.titleGroup}>
            <h1 style={styles.title}>SOFTWARE ENGINEER</h1>
            <h2 style={styles.subtitle}>Full Stack Developer & AI integration</h2>
          </div>
        </div>

        {/* ส่วนเนื้อหา About Me จัดเรียงจากซ้ายไปขวา */}
        <div style={styles.textBox}>
          <h3 style={styles.sectionTitle}>About me</h3>
          <p style={styles.paragraph}>
            Hello, my name is Fluke. I'm currently a fourth-year Software Engineering student at Mae Fah Luang University. 
            My interests lie in full-stack development, cybersecurity, and artificial intelligence, 
            particularly building robust systems that integrate AI solutions with real-world cybersecurity applications.
          </p>

          <p style={styles.paragraph}>
            I strongly believe in learning through real-world experience. 
            Having worked on complex architectural projects, such as those using AI in system development and cybersecurity, 
            and gaining practical experience during my internship, I am eager to take on new challenges, learn new things, 
            and contribute to creating impactful technological innovations.
          </p>
        </div>

        {/* <button style={styles.button}>View My Work</button> */}
      </div>
    </section>
  );
}

const styles = {
  hero: {
    padding: "100px 20px",
    background: "#ffffff",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    maxWidth: "900px",
    width: "100%",
    textAlign: "left", // บังคับให้ข้อความทั้งหมดเริ่มจากซ้าย
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    marginBottom: "40px",
    flexWrap: "wrap", // รองรับหน้าจอมือถือ
  },
  image: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #3866d1",
  },
  titleGroup: {
    flex: 1,
  },
  title: {
    fontSize: "3rem",
    margin: 0,
    color: "#2c3e50",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#3866d1",
    margin: "10px 0 0 0",
  },
  textBox: {
    marginTop: "20px",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    color: "#2c3e50",
    borderBottom: "3px solid #3866d1",
    display: "inline-block",
    marginBottom: "20px",
  },
  paragraph: {
    lineHeight: "1.8",
    fontSize: "1.1rem",
    color: "#444",
    marginBottom: "20px",
  },
  button: {
    marginTop: "30px",
    padding: "12px 30px",
    background: "#3866d1",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Hero;