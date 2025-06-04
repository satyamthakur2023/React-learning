import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Card from './components/Card';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';

import projectImage from './assets/images/project1.jpg';
import projectVideo from './assets/videos/demo.mp4';
import someOtherImage from './assets/images/project3.jpg'; // Make sure this image exists!

function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '5rem' }}>
        <Hero />
        <About />
        <Skills />

        {/* Projects Section */}
        <section
          id="projects"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '4rem 2rem',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '2rem',
              fontSize: '2.5rem',
              color: '#282c34',
              fontWeight: '700',
            }}
          >
            My Projects
          </h2>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <Card
              title="Project 1"
              description="This is a project image card."
              imageUrl={projectImage}
            />
            <Card
              title="Project 2"
              description="This is a project video card."
              videoUrl={projectVideo}
            />
            <Card
              title="Project 3"
              description="Description for project 3"
              imageUrl={someOtherImage}
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Blog Section */}
        <Blog />

        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
