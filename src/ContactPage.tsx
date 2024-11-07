import React from 'react';

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Success');
  };

  return (
    <div 
      className="container" 
      style={{ marginTop: '100px' }} // Aggiunge 100px di margine superiore
    >
      <h1 className="glow-text" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Contact Us</h1>
      <p style={{ color: '#ccff00', fontSize: '1.2rem', marginBottom: '30px' }}>
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
          <textarea id="message" name="message" className="form-textarea" rows={5} required />
        </div>
        <button type="submit" className="btn-purchase" style={{ marginTop: '20px' }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
