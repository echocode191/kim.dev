// src/components/Footer.jsx (Updated with your name)
import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: '#0f172a',
    color: '#94a3b8',
    padding: '50px 20px',
    textAlign: 'center',
    borderTop: '1px solid rgba(0, 255, 159, 0.1)',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#00ff9f',
    marginBottom: '20px',
    textShadow: '0 0 10px rgba(0, 255, 159, 0.5)',
  };

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '30px',
  };

  const socialLinkStyle = {
    color: '#94a3b8',
    fontSize: '1.5rem',
    transition: 'all 0.3s ease',
  };

  const copyrightStyle = {
    fontSize: '0.9rem',
    marginBottom: '10px',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>Echocode</div>
        <div style={socialLinksStyle}>
          {['github', 'linkedin', 'twitter', 'instagram'].map((platform) => (
            <a 
              key={platform}
              href={`#${platform}`}
              style={socialLinkStyle}
              onMouseOver={(e) => {
                e.target.style.color = '#00ff9f';
                e.target.style.transform = 'translateY(-5px)';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#94a3b8';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {platform === 'github' && '🐙'}
              {platform === 'linkedin' && '👔'}
              {platform === 'twitter' && '🐦'}
              {platform === 'instagram' && '📷'}
            </a>
          ))}
        </div>
        <p style={copyrightStyle}>
          © {new Date().getFullYear()} Kimutai Gibson. All rights reserved.
        </p>
        <p style={copyrightStyle}>
          Designed and built with ❤️ by Kimutai Gibson
        </p>
      </div>
    </footer>
  );
};

export default Footer;