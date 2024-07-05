import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Sorry, search not found
      </h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '1rem 2rem',
          textDecoration: 'none',
          borderRadius: '0.5rem',
          fontSize: '1.2rem',
        }}
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;