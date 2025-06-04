import React from 'react';
import aboutImage from '../assets/images/about-me.jpg'; // Make sure the path is correct

const About = () => (
  <section id="about" style={styles.section}>
    <div style={styles.container}>
      {/* Text Section */}
      <div style={styles.text}>
        <h2 style={styles.heading}>About Me</h2>
        <p style={styles.paragraph}>
          I'm a web developer passionate about building responsive and dynamic web applications.
          I specialize in React, JavaScript, and modern web design techniques.
        </p>
        <p style={styles.paragraph}>
          With a strong focus on clean UI and intuitive UX, I strive to deliver engaging digital experiences.
        </p>
      </div>

      {/* Image Section */}
      <div style={styles.imageContainer}>
        <img
          src={aboutImage}
          alt="About Me"
          style={styles.image}
        />
      </div>
    </div>
  </section>
);

const styles = {
  section: {
    minHeight: '100vh',
    backgroundColor: '#282c34',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '1100px',
    width: '100%',
    alignItems: 'center',
    gap: '2rem',
  },
  text: {
    flex: '1',
    minWidth: '300px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '1rem',
  },
  imageContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    minWidth: '300px',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
};

export default About;
