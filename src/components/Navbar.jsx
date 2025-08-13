// src/components/Navbar.jsx (Updated with your name)
import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 50px',
    background: 'rgba(15, 23, 42, 0.95)',
    backdropFilter: 'blur(10px)',
    position: 'fixed',
    width: '100%',
    top: '0',
    zIndex: '1000',
    boxShadow: '0 4px 30px rgba(0, 255, 159, 0.1)',
    borderBottom: '1px solid rgba(0, 255, 159, 0.2)',
    animation: 'slideDown 0.5s ease-out',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#00ff9f',
    textShadow: '0 0 10px rgba(0, 255, 159, 0.7)',
    letterSpacing: '1px',
  };

  const navLinksStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
  };

  const linkStyle = {
    color: '#e2e8f0',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    position: 'relative',
  };

  const buttonStyle = {
    background: 'linear-gradient(90deg, #00ff9f, #00b4d8)',
    color: '#0f172a',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 255, 159, 0.3)',
    textDecoration: 'none',
    display: 'inline-block',
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>Echocode</div>
      <ul style={navLinksStyle}>
        {['Home', 'Projects', 'Services', 'About', 'Contact'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`} 
              style={linkStyle}
              onMouseOver={(e) => {
                e.target.style.color = '#00ff9f';
                e.target.style.textShadow = '0 0 5px rgba(0, 255, 159, 0.7)';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#e2e8f0';
                e.target.style.textShadow = 'none';
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <a 
        href="#contact"
        style={buttonStyle}
        onMouseOver={(e) => {
          e.target.style.transform = 'translateY(-3px)';
          e.target.style.boxShadow = '0 7px 20px rgba(0, 255, 159, 0.5)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 15px rgba(0, 255, 159, 0.3)';
        }}
      >
        Hire Me
      </a>
    </nav>
  );
};

export default Navbar;