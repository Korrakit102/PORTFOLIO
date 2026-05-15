// Navbar.jsx
function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>PORTFOLIO</h2>
      <div style={styles.menu}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#experience" style={styles.link}>Experience</a>
        <a href="#education" style={styles.link}>Education</a>
        
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 60px", background: "#3866d1", color: "white", position: "sticky", top: 0, zIndex: 1000 },
  logo: { fontSize: "22px", fontWeight: "bold", color: "white" },
  menu: { display: "flex", gap: "30px" },
  link: { textDecoration: "none", color: "white", fontSize: "16px", fontWeight: "500", padding: "8px 12px", borderRadius: "6px", transition: "0.3s" },
};

export default Navbar;