// src/components/About.jsx
import React from 'react';

const About = () => {
  const sectionStyle = {
    padding: '100px 20px',
    background: 'linear-gradient(135deg, #1e293b, #0f172a)',
    color: '#e2e8f0',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '50px',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
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

  const contentStyle = {
    display: 'flex',
    gap: '50px',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const imageContainerStyle = {
    flex: '1',
    minWidth: '300px',
    maxWidth: '400px',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
    border: '3px solid rgba(0, 255, 159, 0.2)',
  };

  const textStyle = {
    flex: '1',
    minWidth: '300px',
    maxWidth: '600px',
  };

  const aboutTitleStyle = {
    fontSize: '1.8rem',
    color: '#00ff9f',
    marginBottom: '20px',
    fontWeight: 'bold',
  };

  const aboutDescStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#cbd5e1',
    marginBottom: '30px',
  };

  const statsContainerStyle = {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
  };

  const statItemStyle = {
    background: 'rgba(30, 41, 59, 0.7)',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    minWidth: '120px',
    border: '1px solid rgba(0, 255, 159, 0.1)',
  };

  const statNumberStyle = {
    fontSize: '2rem',
    color: '#00ff9f',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const statLabelStyle = {
    color: '#94a3b8',
    fontSize: '0.9rem',
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>
          Why Me?
          <div style={headingAfterStyle}></div>
        </h2>
        <div style={contentStyle}>
          <div style={imageContainerStyle}>
            <img 
              src="https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/527727794_122182961786354150_4665976491947516702_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHm63oFOTOyU33Jdkr41SC35ukBYMY3fSXm6QFgxjd9JalXF46Mf1R0Oz_OTXs-VfdlAnyiIDqPYRKVfLT5RnC9&_nc_ohc=OcI3gjffhHIQ7kNvwGDSxrl&_nc_oc=Admj-RZ1fISqBz--I7P8AFO1NboEYu4-cEwC_WYi7w6Rfi-ddbwL_J1fkekQOBdslsI&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fmba5-1.fna&_nc_gid=gxI4PQ2b7jE3vuUZdpQS9A&oh=00_AfV4PFh4DsAOY9hx8ga0-PnP--Huhv76w0prPqftrgBfyQ&oe=68A28CBF" 
              alt="Kimutai Gibson" 
              style={imageStyle}
            />
          </div>
          <div style={textStyle}>
            <h3 style={aboutTitleStyle}>About Me</h3>
            <p style={aboutDescStyle}>
              I'm a passionate web developer with a track record of delivering over 5 live projects. I focus on creating solutions that not only look great but also deliver tangible results for your business. I don't just write code; I build tools that help you grow.
            </p>
            <div style={statsContainerStyle}>
              <div style={statItemStyle}>
                <div style={statNumberStyle}>5+</div>
                <div style={statLabelStyle}>Live Projects</div>
              </div>
              <div style={statItemStyle}>
                <div style={statNumberStyle}>100%</div>
                <div style={statLabelStyle}>Client Satisfaction</div>
              </div>
              <div style={statItemStyle}>
                <div style={statNumberStyle}>24h</div>
                <div style={statLabelStyle}>Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;