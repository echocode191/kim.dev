// src/components/Testimonials.jsx (Updated with your project names)
import React from 'react';

const Testimonials = () => {
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

  const testimonialsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
  };

  const testimonialCardStyle = {
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

  const quoteStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#cbd5e1',
    marginBottom: '20px',
    flex: '1',
    fontStyle: 'italic',
  };

  const authorStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  };

  const authorImageStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const authorInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const authorNameStyle = {
    color: '#ffffff',
    fontWeight: 'bold',
  };

  const authorTitleStyle = {
    color: '#94a3b8',
    fontSize: '0.9rem',
  };

  const testimonials = [
    {
      quote: "Kimutai transformed our outdated website into a modern, conversion-focused platform. Our bookings increased by 40% within the first month!",
      author: "Sarah Johnson",
      title: "Manager, Settlers Inn",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      quote: "The web app Kimutai built for our business streamlined our operations and saved us countless hours. Highly professional and talented developer!",
      author: "Michael Chen",
      title: "CEO, Zoka Street",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    }
  ];

  return (
    <section id="testimonials" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>
          Client Testimonials
          <div style={headingAfterStyle}></div>
        </h2>
        <div style={testimonialsGridStyle}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              style={testimonialCardStyle}
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
              <p style={quoteStyle}>"{testimonial.quote}"</p>
              <div style={authorStyle}>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  style={authorImageStyle}
                />
                <div style={authorInfoStyle}>
                  <div style={authorNameStyle}>{testimonial.author}</div>
                  <div style={authorTitleStyle}>{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;