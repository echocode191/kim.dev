// src/components/Hero.jsx (Updated with your name)
import React from 'react';

const Hero = () => {
  const heroStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '0 20px',
    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
    color: '#e2e8f0',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  const headlineStyle = {
    fontSize: 'clamp(2.5rem, 8vw, 4rem)',
    fontWeight: 'bold',
    marginBottom: '20px',
    lineHeight: '1.2',
    maxWidth: '900px',
    background: 'linear-gradient(90deg, #ffffff, #00ff9f)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'glow 2s infinite alternate',
  };

  const introStyle = {
    fontSize: '1.2rem',
    maxWidth: '600px',
    marginBottom: '40px',
    lineHeight: '1.6',
    color: '#cbd5e1',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const primaryButtonStyle = {
    background: 'linear-gradient(90deg, #00ff9f, #00b4d8)',
    color: '#0f172a',
    border: 'none',
    padding: '14px 30px',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 255, 159, 0.3)',
    textDecoration: 'none',
    display: 'inline-block',
  };

  const secondaryButtonStyle = {
    background: 'transparent',
    color: '#00ff9f',
    border: '2px solid #00ff9f',
    padding: '12px 28px',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 255, 159, 0.2)',
    textDecoration: 'none',
    display: 'inline-block',
  };

  return (
    <section id="home" style={heroStyle}>
      <div className="hero-bg-animation"></div>
      <h1 style={headlineStyle}>
        I Build Fast, Modern Websites & Apps That Make Businesses Look Premium — and Work Smarter.
      </h1>
      <p style={introStyle}>
        I create high-performance web solutions that drive results. With a focus on modern design and smart functionality, I help businesses stand out and succeed online.
      </p>
      <div style={buttonContainerStyle}>
        <a 
          href="#projects"
          style={primaryButtonStyle}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 7px 20px rgba(0, 255, 159, 0.5)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(0, 255, 159, 0.3)';
          }}
        >
          View My Work
        </a>
        <a 
          href="#contact"
          style={secondaryButtonStyle}
          onMouseOver={(e) => {
            e.target.style.background = '#00ff9f';
            e.target.style.color = '#0f172a';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 7px 20px rgba(0, 255, 159, 0.5)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#00ff9f';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(0, 255, 159, 0.2)';
          }}
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Hero;