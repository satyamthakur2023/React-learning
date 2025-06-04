import React from 'react';

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.container}>
      <div style={styles.socials}>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.link}>
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={styles.link}>
          LinkedIn
        </a>
        <a href="mailto:your.email@example.com" style={styles.link}>
          Email
        </a>
      </div>
      <p style={styles.copy}>
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
    </div>
  </footer>
);

const styles = {
  footer: {
    backgroundColor: '#1c1c1c',
    color: '#ccc',
    textAlign: 'center',
    padding: '2rem 1rem',
    fontSize: '0.9rem',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  socials: {
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'color 0.3s ease',
  },
  copy: {
    marginTop: '0.5rem',
    color: '#888',
  },
};

export default Footer;
