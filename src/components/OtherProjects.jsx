// src/components/OtherProjects.jsx
import React from 'react';

const OtherProjects = () => {
  const sectionStyle = {
    padding: '100px 20px',
    background: 'linear-gradient(135deg, #1e293b, #0f172a)',
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

  const projectsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
  };

  const projectCardStyle = {
    background: 'rgba(30, 41, 59, 0.7)',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(0, 255, 159, 0.1)',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
  };

  const projectImageStyle = {
    height: '200px',
    overflow: 'hidden',
  };

  const projectContentStyle = {
    padding: '25px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    flex: '1',
  };

  const projectTitleStyle = {
    fontSize: '1.5rem',
    color: '#00ff9f',
    fontWeight: 'bold',
  };

  const projectDescStyle = {
    color: '#cbd5e1',
    lineHeight: '1.6',
    flex: '1',
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
    alignSelf: 'flex-start',
    textDecoration: 'none',
    display: 'inline-block',
  };

  const projects = [
    {
      title: 'EchoBiz Shop',
      description: 'E-commerce platform with advanced inventory management and seamless checkout.',
      image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      liveLink: 'https://echobiz-shop.netlify.app'
    },
    {
      title: 'EchoLearn',
      description: 'Interactive learning management system with video streaming and progress tracking.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      liveLink: 'https://echolearn-web.netlify.app'
    },
    {
      title: 'Zoka Street',
      description: 'Urban exploration app with location-based guides and community features.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      liveLink: 'https://myzokastreet.netlify.app'
    }
  ];

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>
          Other Projects
          <div style={headingAfterStyle}></div>
        </h2>
        <div style={projectsGridStyle}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              style={projectCardStyle}
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
              <div style={projectImageStyle}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </div>
              <div style={projectContentStyle}>
                <h3 style={projectTitleStyle}>{project.title}</h3>
                <p style={projectDescStyle}>{project.description}</p>
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;