import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Alice Johnson',
    text: 'Great working with you! Delivered on time and exceeded expectations.',
  },
  {
    id: 2,
    name: 'Bob Smith',
    text: 'Professional and detail-oriented developer. Highly recommended!',
  },
  // Add more testimonials if needed
];

const Testimonials = () => (
  <section
    id="testimonials"
    style={{
      backgroundColor: '#282c34',
      color: 'white',
      padding: '4rem 2rem',
      minHeight: '50vh',
      textAlign: 'center',
    }}
  >
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Testimonials</h2>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      {testimonialsData.map(({ id, name, text }) => (
        <div
          key={id}
          style={{
            backgroundColor: '#3a3f47',
            padding: '1.5rem',
            borderRadius: '8px',
            width: '300px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
        >
          <p style={{ fontStyle: 'italic' }}>"{text}"</p>
          <p style={{ marginTop: '1rem', fontWeight: '700' }}>- {name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
