// portfolio/src/pages/CV.js (Updated)
import React from 'react';

const CV = () => {
  const pageStyle = {
    background: 'white',
    minHeight: '100vh',
    padding: '4rem 1rem',
  };

  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 1rem',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: '0.5rem',
  };

  const subtitleStyle = {
    textAlign: 'center',
    color: '#4b5563',
    marginBottom: '4rem',
  };

  const cvContainerStyle = {
    background: 'white',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    borderRadius: '0.75rem',
    overflow: 'hidden',
  };

  const cvContentStyle = {
    padding: '2rem',
  };

  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2.5rem',
    paddingBottom: '2.5rem',
    borderBottom: '1px solid #e5e7eb',
  };

  const avatarStyle = {
    width: '8rem',
    height: '8rem',
    borderRadius: '9999px',
    background: 'linear-gradient(to right, #3b82f6, #6366f1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const nameStyle = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '0.5rem',
  };

  const titleStyle = {
    fontSize: '1.25rem',
    color: '#2563eb',
    marginBottom: '0.5rem',
  };

  const contactStyle = {
    color: '#4b5563',
    textAlign: 'center',
  };

  const sectionStyle = {
    marginBottom: '2.5rem',
  };

  const sectionTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #e5e7eb',
  };

  const experienceItemStyle = {
    marginBottom: '1.5rem',
  };

  const experienceHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.25rem',
  };

  const jobTitleStyle = {
    fontWeight: 'bold',
    color: '#111827',
  };

  const dateStyle = {
    color: '#4b5563',
  };

  const companyStyle = {
    color: '#2563eb',
    marginBottom: '0.5rem',
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '1.25rem',
    color: '#374151',
  };

  const listItemStyle = {
    marginBottom: '0.25rem',
  };

  const skillsGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  };

  const downloadButtonStyle = {
    display: 'block',
    width: '100%',
    maxWidth: '200px',
    margin: '0 auto',
    background: '#1d4ed8',
    color: 'white',
    fontWeight: 'bold',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all 0.3s',
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Curriculum Vitae</h1>
        <p style={subtitleStyle}>Professional profile and experience</p>
        
        <div style={cvContainerStyle}>
          <div style={cvContentStyle}>
            <div style={headerStyle}>
              <div style={avatarStyle}>EW</div>
              <h2 style={nameStyle}>Echo World</h2>
              <p style={titleStyle}>Full Stack Developer</p>
              <p style={contactStyle}>
                Call/WhatsApp: 0721635810 | 
                echoworld191@gmail.com | 
                <a href="https://web.facebook.com/profile.php?id=61560624511191" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>
                  Facebook Profile
                </a>
              </p>
            </div>
            
            <div style={sectionStyle}>
              <h3 style={sectionTitleStyle}>Professional Summary</h3>
              <p style={{ color: '#374151' }}>
                Experienced Full Stack Developer with expertise in creating responsive web applications and robust backend systems. 
                Specialized in React, Node.js, and modern JavaScript frameworks. Passionate about creating intuitive user experiences and 
                efficient code architecture.
              </p>
            </div>
            
            <div style={sectionStyle}>
              <h3 style={sectionTitleStyle}>Experience</h3>
              <div>
                <div style={experienceItemStyle}>
                  <div style={experienceHeaderStyle}>
                    <h4 style={jobTitleStyle}>Senior Full Stack Developer</h4>
                    <span style={dateStyle}>2020 - Present</span>
                  </div>
                  <p style={companyStyle}>Tech Innovations Inc.</p>
                  <ul style={listStyle}>
                    <li style={listItemStyle}>Led development of enterprise-level applications serving 100K+ users</li>
                    <li style={listItemStyle}>Implemented RESTful APIs and microservices architecture</li>
                    <li style={listItemStyle}>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>
                <div style={experienceItemStyle}>
                  <div style={experienceHeaderStyle}>
                    <h4 style={jobTitleStyle}>Web Developer</h4>
                    <span style={dateStyle}>2018 - 2020</span>
                  </div>
                  <p style={companyStyle}>Digital Solutions Ltd.</p>
                  <ul style={listStyle}>
                    <li style={listItemStyle}>Developed responsive websites using React and modern CSS</li>
                    <li style={listItemStyle}>Collaborated with UX designers to implement pixel-perfect designs</li>
                    <li style={listItemStyle}>Optimized application performance resulting in 40% faster load times</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div style={sectionStyle}>
              <h3 style={sectionTitleStyle}>Skills</h3>
              <div style={skillsGridStyle}>
                <div>
                  <h4 style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>Technical Skills</h4>
                  <ul style={listStyle}>
                    <li style={listItemStyle}>JavaScript, TypeScript, HTML5, CSS3</li>
                    <li style={listItemStyle}>React, Redux, Next.js, Node.js</li>
                    <li style={listItemStyle}>Express, MongoDB, PostgreSQL, Firebase</li>
                    <li style={listItemStyle}>RESTful APIs, GraphQL, AWS, Docker</li>
                    <li style={listItemStyle}>Git, Agile/Scrum, CI/CD</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>Soft Skills</h4>
                  <ul style={listStyle}>
                    <li style={listItemStyle}>Problem Solving & Critical Thinking</li>
                    <li style={listItemStyle}>Team Leadership & Collaboration</li>
                    <li style={listItemStyle}>Project Management</li>
                    <li style={listItemStyle}>Client Communication</li>
                    <li style={listItemStyle}>Time Management</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div style={sectionStyle}>
              <h3 style={sectionTitleStyle}>Education</h3>
              <div>
                <div style={experienceHeaderStyle}>
                  <h4 style={jobTitleStyle}>Bachelor of Science in Computer Science</h4>
                  <span style={dateStyle}>2014 - 2018</span>
                </div>
                <p style={companyStyle}>University of Nairobi</p>
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <a 
                href="/path-to-your-cv.pdf" 
                download 
                style={downloadButtonStyle}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;