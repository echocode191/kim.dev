// src/components/Services.jsx
import React from 'react';

const Services = () => {
  const sectionStyle = {
    padding: '100px 20px',
    background: '#0f172a',
    color: '#e2e8f0',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '60px',
    color: '#ffffff',
    position: 'relative',
    display: 'inline-block',
    width: '100%',
  };

  const headingAfterStyle = {
    content: '""',
    position: 'absolute',
    bottom: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #00ff9f, #00b4d8)',
    borderRadius: '2px',
  };

  const servicesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
  };

  const serviceCardStyle = {
    background: 'rgba(30, 41, 59, 0.7)',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(0, 255, 159, 0.1)',
    transition: 'all 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const serviceIconStyle = {
    fontSize: '2.5rem',
    color: '#00ff9f',
    marginBottom: '20px',
  };

  const serviceTitleStyle = {
    fontSize: '1.5rem',
    color: '#ffffff',
    marginBottom: '15px',
    fontWeight: 'bold',
  };

  const serviceDescStyle = {
    color: '#cbd5e1',
    lineHeight: '1.6',
    flex: '1',
  };

  const services = [
    {
      icon: '💻',
      title: 'Website Design & Development',
      description: 'Modern, mobile-first, lightning-fast websites that captivate visitors and convert them into customers.',
    },
    {
      icon: '🚀',
      title: 'Web App Development',
      description: 'Custom tools and applications for businesses to work smarter, streamline processes, and boost productivity.',
    },
    {
      icon: '🔄',
      title: 'Business Page Revamp',
      description: 'Transform outdated web pages into conversion machines with modern design and optimized user experience.',
    }
  ];

  return (
    <section id="services" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>
          What I Can Do For You
          <div style={headingAfterStyle}></div>
        </h2>
        <div style={servicesGridStyle}>
          {services.map((service, index) => (
            <div 
              key={index} 
              style={serviceCardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.border = '1px solid rgba(0, 255, 159, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.border = '1px solid rgba(0, 255, 159, 0.1)';
              }}
            >
              <div style={serviceIconStyle}>{service.icon}</div>
              <h3 style={serviceTitleStyle}>{service.title}</h3>
              <p style={serviceDescStyle}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;