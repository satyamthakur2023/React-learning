import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css'; // We'll add hover styles here

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectRefs = useRef([]);

  // Clear refs on mount
  useEffect(() => {
    projectRefs.current = [];
  }, []);

  useEffect(() => {
    projectRefs.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  const projects = [
    { title: 'Project One', description: 'A brief description of project one.', url: '#' },
    { title: 'Project Two', description: 'A brief description of project two.', url: '#' },
    { title: 'Project Three', description: 'A brief description of project three.', url: '#' },
    { title: 'Project Four', description: 'A brief description of project four.', url: '#' },
    { title: 'Project Five', description: 'A brief description of project five.', url: '#' },
    { title: 'Project Six', description: 'A brief description of project six.', url: '#' },
  ];

  return (
    <section id="projects" style={styles.projects}>
      <h2 style={styles.heading}>My Projects</h2>
      <div style={styles.projectList}>
        {projects.map((project, i) => (
          <div
            key={i}
            ref={el => {
              if (el && !projectRefs.current.includes(el)) {
                projectRefs.current.push(el);
              }
            }}
            style={styles.projectItem}
            className="project-item"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button
              style={styles.button}
              onClick={() => window.open(project.url, '_blank')}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  projects: {
    minHeight: '100vh',
    padding: '4rem 2rem',
    backgroundColor: '#f5f5f5',
    color: '#333',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    fontWeight: '600',
  },
  projectList: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  projectItem: {
    width: '300px',
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    opacity: 0,
    transform: 'translateY(50px)',
  },
  button: {
    marginTop: '1rem',
    padding: '0.6rem 1.2rem',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '6px',
    color: '#282c34',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Projects;
