import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar" style={styles.navbar}>
      {/* Logo Section /}
      {/ <div className="logo-container" style={styles.logoContainer}>
        <img src="/images/movie.png" alt="Logo" className="logo-img" style={styles.logoImg} />
        <h1 className="logo-text" style={styles.logoText}>The Flashback</h1>
      </div> */}
      <div className="logo-container" style={styles.logoContainer}>
  <img
    src="https://cdn-icons-png.flaticon.com/128/2103/2103633.png"
    alt="Logo"
    className="logo-img"
    style={styles.logoImg}
  />
  <h1 className="logo-text" style={styles.logoText}>The Flashback</h1>
</div>

      {/* Navigation Links */}
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} 
          onClick={() => setIsMobile(false)} 
          style={styles.navList}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/services" style={styles.link}>Services</Link></li>
        <li><Link to="/theme" style={styles.link}>Theme</Link></li>
        <li><Link to="/gallery" style={styles.link}>Gallery</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>

      </ul>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-icon" 
              onClick={() => setIsMobile(!isMobile)} 
              style={styles.mobileButton}>

      </button>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#000",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
  },
  logoContainer: {
  display: "flex",
  alignItems: "center",
  // gap: "0px",               // Cleaner spacing than marginRight
  maxWidth: "12%",  
          // <-- Allow it to grow
},

  logoImg: {
    width: "50px",
    height: "50px",
    marginRight: "10px",
    display: "inline-block",
    verticalAlign: "middle",
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    whiteSpace: "nowrap",       // <-- Prevents text from breaking to the next line
    margin: 0,
    lineHeight: "1",            // Optional: Aligns better
  },

  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    marginLeft: "800px",  // Pushes the nav links to the right
    paddingRight: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.2rem",
  },
  mobileButton: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "2rem",
    cursor: "pointer",
    marginLeft: "auto",
  }
};

export default Navbar;