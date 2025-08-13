// src/components/FeaturedProjects.jsx
import React from 'react';

const FeaturedProjects = () => {
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

  const projectsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '80px',
  };

  const projectStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    padding: '30px',
    background: 'rgba(30, 41, 59, 0.7)',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(0, 255, 159, 0.1)',
    transition: 'all 0.3s ease',
  };

  const projectHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const projectTitleStyle = {
    fontSize: '1.8rem',
    color: '#00ff9f',
    fontWeight: 'bold',
  };

  const projectTagsStyle = {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  };

  const tagStyle = {
    background: 'rgba(0, 255, 159, 0.1)',
    color: '#00ff9f',
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '500',
  };

  const projectContentStyle = {
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap',
  };

  const projectImageStyle = {
    flex: '1',
    minWidth: '300px',
    height: '300px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(0, 255, 159, 0.2)',
  };

  const projectDetailsStyle = {
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const problemSolutionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const detailTitleStyle = {
    fontSize: '1.2rem',
    color: '#ffffff',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const detailTextStyle = {
    lineHeight: '1.6',
    color: '#cbd5e1',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
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

  const projects = [
    {
      title: 'Settlers Inn',
      subtitle: 'Hospitality Website Redesign',
      tags: ['Web Design', 'Development', 'Hospitality'],
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      problem: 'Old, outdated design not converting visitors.',
      solution: 'Fresh modern layout, mobile-friendly, better visuals.',
      result: 'Improved brand image, easier bookings, strong client feedback.',
      liveLink: 'https://www.settlersinn.co.ke',
      caseStudyLink: '#'
    },
    {
      title: 'ManagerZone',
      subtitle: 'Business Management Platform',
      tags: ['Web App', 'Dashboard', 'SaaS'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      problem: 'Inefficient business processes with scattered tools.',
      solution: 'Integrated dashboard for all business operations.',
      result: '30% increase in productivity, streamlined workflows.',
      liveLink: 'https://managerzone.netlify.app',
      caseStudyLink: '#'
    }
  ];

  return (
    <section id="projects" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>
          Featured Projects
          <div style={headingAfterStyle}></div>
        </h2>
        <div style={projectsContainerStyle}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              style={projectStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4)';
                e.currentTarget.style.border = '1px solid rgba(0, 255, 159, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.border = '1px solid rgba(0, 255, 159, 0.1)';
              }}
            >
              <div style={projectHeaderStyle}>
                <div>
                  <h3 style={projectTitleStyle}>{project.title}</h3>
                  <p style={{color: '#94a3b8'}}>{project.subtitle}</p>
                </div>
                <div style={projectTagsStyle}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} style={tagStyle}>{tag}</span>
                  ))}
                </div>
              </div>
              <div style={projectContentStyle}>
                <div style={projectImageStyle}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                  />
                </div>
                <div style={projectDetailsStyle}>
                  <div style={problemSolutionStyle}>
                    <div>
                      <h4 style={detailTitleStyle}>
                        <span style={{color: '#ef4444'}}>●</span> Problem
                      </h4>
                      <p style={detailTextStyle}>{project.problem}</p>
                    </div>
                    <div>
                      <h4 style={detailTitleStyle}>
                        <span style={{color: '#00ff9f'}}>●</span> Solution
                      </h4>
                      <p style={detailTextStyle}>{project.solution}</p>
                    </div>
                    <div>
                      <h4 style={detailTitleStyle}>
                        <span style={{color: '#3b82f6'}}>●</span> Result
                      </h4>
                      <p style={detailTextStyle}>{project.result}</p>
                    </div>
                  </div>
                  <div style={buttonContainerStyle}>
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
                    <a 
                      href={project.caseStudyLink}
                      style={{...buttonStyle, background: 'transparent', color: '#00ff9f', border: '2px solid #00ff9f'}}
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
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      Read Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;