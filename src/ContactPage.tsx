import React from 'react';

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Success');
  };

  const inputStyle = {
    alignSelf: 'center',
    width: '90%',
    padding: '10px',
    backgroundColor: '#181818',
    color: '#ffdd00',
    border: '2px solid #ffdd00',
    borderRadius: '5px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
  };

  const mobileInputStyle = {
    ...inputStyle,
    padding: '6px',       
    fontSize: '0.75rem',  
  };

  return (
    <div 
      className="container" 
      style={{ marginTop: '100px' }}
    >
      <h1 className="glow-text" style={{ fontSize: '2rem', marginBottom: '20px' }}>Contact Us</h1>
      <p style={{ color: '#ccff00', fontSize: '1rem', marginBottom: '20px' }}>
        Have questions or need assistance? Fill out the form below to reach out to us.
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="form-input" 
            required 
            style={window.innerWidth < 768 ? mobileInputStyle : inputStyle}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="form-input" 
            required 
            style={window.innerWidth < 768 ? mobileInputStyle : inputStyle}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea 
            id="message" 
            name="message" 
            className="form-textarea" 
            rows={4} 
            required 
            style={window.innerWidth < 768 ? mobileInputStyle : inputStyle}
          />
        </div>
        <button type="submit" className="btn-purchase" style={{ marginTop: '15px', padding: '8px 16px', fontSize: '0.9rem' }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
