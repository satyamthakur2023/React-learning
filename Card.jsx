import React from 'react';

const Card = ({ title, description, imageUrl, videoUrl }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        margin: '1rem',
        padding: '1rem',
        width: '300px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <h3>{title}</h3>

      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          style={{ width: '100%', borderRadius: '6px' }}
        />
      )}

      {videoUrl && (
        <video controls style={{ width: '100%', borderRadius: '6px' }}>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <p>{description}</p>
    </div>
  );
};

export default Card;
