// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const sectionStyle = {
    padding: '100px 20px',
    background: 'linear-gradient(135deg, #1e293b, #0f172a)',
    color: '#e2e8f0',
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#ffffff',
    width: '100%',
  };

  const headingUnderline = {
    width: '80px',
    height: '4px',
    margin: '10px auto 40px',
    background: 'linear-gradient(90deg, #00ff9f, #00b4d8)',
    borderRadius: '2px',
  };

  const subheadingStyle = {
    fontSize: '1.2rem',
    color: '#cbd5e1',
    marginBottom: '50px',
    maxWidth: '600px',
    margin: '0 auto 50px',
  };

  const formStyle = {
    background: 'rgba(30, 41, 59, 0.7)',
    borderRadius: '12px',
    padding: '40px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(0, 255, 159, 0.1)',
    textAlign: 'left',
  };

  const formGroupStyle = { marginBottom: '25px' };

  const labelStyle = {
    display: 'block',
    marginBottom: '10px',
    color: '#00ff9f',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    borderRadius: '6px',
    border: '1px solid rgba(0, 255, 159, 0.3)',
    background: 'rgba(15, 23, 42, 0.7)',
    color: '#e2e8f0',
    fontSize: '16px',
    transition: 'all 0.3s ease',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '150px',
    resize: 'vertical',
  };

  const buttonStyle = {
    background: 'linear-gradient(90deg, #00ff9f, #00b4d8)',
    color: '#0f172a',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 255, 159, 0.3)',
    width: '100%',
  };

  const contactInfoStyle = {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#cbd5e1',
  };

  const contactIconStyle = {
    color: '#00ff9f',
    fontSize: '1.2rem',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('Sending…');

    try {
      const res = await fetch('https://formspree.io/f/movlrgpv', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatusMessage('✅ Thanks! I will get back to you within 24 hours.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage('❌ Oops! Something went wrong — please try again.');
      }
    } catch (error) {
      setStatusMessage('❌ Oops! Something went wrong — please try again.');
    }
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Let's Work Together</h2>
        <div style={headingUnderline}></div>
        <p style={subheadingStyle}>
          Have a project in mind? I'd love to hear about it. Fill out the form below and I'll get back to you within 24 hours.
        </p>

        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="name" style={labelStyle}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={textareaStyle}
              required
            ></textarea>
          </div>
          <button
            type="submit"
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
            Send Message
          </button>
        </form>

        {statusMessage && (
          <p style={{ color: '#00ff9f', marginTop: '20px', fontWeight: 'bold' }}>
            {statusMessage}
          </p>
        )}

        <div style={contactInfoStyle}>
          <div style={contactItemStyle}>
            <span style={contactIconStyle}>📱</span>
            <span>0721635810</span>
          </div>
          <div style={contactItemStyle}>
            <span style={contactIconStyle}>✉️</span>
            <span>echoworld191@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
