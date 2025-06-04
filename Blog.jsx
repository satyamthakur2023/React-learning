import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and how to build your first app.',
  },
  {
    id: 2,
    title: 'JavaScript ES6 Features',
    summary: 'Explore the most useful ES6 features for modern JavaScript development.',
  },
  // Add more posts if you want
];

const Blog = () => (
  <section
    id="blog"
    style={{
      padding: '4rem 2rem',
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center',
    }}
  >
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#282c34' }}>
      Blog
    </h2>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      {blogPosts.map(({ id, title, summary }) => (
        <article
          key={id}
          style={{
            border: '1px solid #ddd',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'left',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }}
        >
          <h3 style={{ marginBottom: '0.5rem', color: '#007acc' }}>{title}</h3>
          <p>{summary}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Blog;
