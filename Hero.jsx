import React from "react";

const Hero = () => (
  <section id="hero" style={styles.hero}>
    <div style={styles.overlay}></div>
    <div style={styles.content}>
      <h1 style={styles.title}>Welcome to My Portfolio</h1>
      <p style={styles.subtitle}>
        I'm a passionate developer crafting beautiful web experiences.
      </p>
      <button
        style={styles.button}
        onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
      >
        View My Projects
      </button>
    </div>
  </section>
);

const styles = {
  hero: {
    position: "relative",
    minHeight: "100vh",
    paddingTop: "6rem", // To avoid overlap with fixed navbar
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-dark overlay
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "700px",
    padding: "0 1rem",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
  },
  button: {
    padding: "0.75rem 2rem",
    fontSize: "1rem",
    borderRadius: "25px",
    border: "none",
    backgroundColor: "#61dafb",
    color: "#282c34",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Hero;
