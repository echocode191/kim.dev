// portfolio/src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const heroStyle = {
    background: 'linear-gradient(to bottom right, #dbeafe, #e0e7ff)',
    minHeight: '100vh',
    padding: '5rem 1rem',
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: '800',
    color: '#111827',
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const subheadingStyle = {
    fontSize: '1.25rem',
    color: '#374151',
    maxWidth: '48rem',
    margin: '0 auto 2.5rem',
    textAlign: 'center',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '5rem',
  };

  const primaryButtonStyle = {
    background: '#1d4ed8',
    color: 'white',
    fontWeight: 'bold',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    transition: 'all 0.3s',
  };

  const secondaryButtonStyle = {
    background: 'transparent',
    border: '2px solid #1d4ed8',
    color: '#1d4ed8',
    fontWeight: 'bold',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    transition: 'all 0.3s',
  };

  const sectionTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: '3rem',
  };

  const projectsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  };

  const projectCardStyle = {
    background: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s',
  };

  const projectCardHoverStyle = {
    transform: 'translateY(-0.25rem)',
  };

  const projectContentStyle = {
    padding: '1.5rem',
  };

  const projectCategoryStyle = {
    color: '#1d4ed8',
    fontWeight: '600',
    marginBottom: '0.5rem',
  };

  const projectTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '0.75rem',
  };

  const projectLinkStyle = {
    color: '#2563eb',
    fontWeight: '500',
    textDecoration: 'none',
  };

  const featuredProjects = [
    { name: "Zoka Hospitality Manager", url: "managerzone.netlify.app", category: "Hospitality" },
    { name: "Settlers Inn", url: "settlersinn.co.ke", category: "Restaurant" },
    { name: "Echonite", url: "echonite.netlify.app", category: "E-commerce" },
  ];

  return (
    <div style={heroStyle}>
      <div style={containerStyle}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={headingStyle}>
            Hi, I'm <span style={{ color: '#1d4ed8' }}>Your Name</span>
          </h1>
          <p style={subheadingStyle}>
            Full Stack Developer & UI/UX Designer creating digital experiences that merge aesthetics with functionality.
          </p>
          <div style={buttonContainerStyle}>
            <Link to="/projects" style={primaryButtonStyle}>
              View Projects
            </Link>
            <Link to="/cv" style={secondaryButtonStyle}>
              My CV
            </Link>
          </div>
        </div>
        
        <div style={{ marginTop: '5rem' }}>
          <h2 style={sectionTitleStyle}>Featured Projects</h2>
          <div style={projectsGridStyle}>
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                style={projectCardStyle}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, projectCardHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, projectCardStyle)}
              >
                <div style={projectContentStyle}>
                  <div style={projectCategoryStyle}>{project.category}</div>
                  <h3 style={projectTitleStyle}>{project.name}</h3>
                  <a 
                    href={`https://${project.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={projectLinkStyle}
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;