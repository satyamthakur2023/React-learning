// src/components/Skills.jsx
import React from 'react';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'HTML & CSS', level: 95 },
  { name: 'Node.js', level: 75 },
  { name: 'Git & GitHub', level: 80 },
  { name: 'Bootstrap', level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>My Skills</h2>
      <div style={styles.skillsContainer}>
        {skills.map((skill) => (
          <div key={skill.name} style={styles.skill}>
            <div style={styles.skillName}>{skill.name}</div>
            <div style={styles.progressBarBackground}>
              <div
                style={{ ...styles.progressBarFill, width: `${skill.level}%` }}
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#333',
  },
  skillsContainer: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  skill: {
    marginBottom: '1.5rem',
    textAlign: 'left',
  },
  skillName: {
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#555',
  },
  progressBarBackground: {
    width: '100%',
    height: '20px',
    backgroundColor: '#ddd',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#61dafb',
    borderRadius: '10px 0 0 10px',
    transition: 'width 1s ease-in-out',
  },
};

export default Skills;
