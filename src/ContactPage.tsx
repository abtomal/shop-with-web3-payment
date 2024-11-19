import React from 'react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Success');
  };

  return (
    <div className="container">
      <h1 className="glow-text">Contact Us</h1>
      <p style={{ color: '#ccff00', fontSize: '1rem', marginBottom: '20px' }}>
        Have questions or need assistance? Fill out the form below to reach out to us.
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" name="name" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" name="message" className="form-textarea" rows={4} required />
        </div>
        <button type="submit" className="btn-purchase">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
