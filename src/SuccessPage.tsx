import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="container" style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1 className="glow-text" style={{ fontSize: '2.5rem', color: '#00ff2a', marginBottom: '20px' }}>Transaction Successful!</h1>
      <p style={{ color: '#ccff00', fontSize: '1.1rem', maxWidth: '500px', margin: '20px auto' }}>
        Night City and the Matrix can't wait to see what you bought!
      </p>
      <button onClick={handleBackToHome} className="btn-cyber" style={{ marginTop: '20px', padding: '10px 20px', fontSize: '1rem' }}>
        Return Home
      </button>
    </div>
  );
};

export default SuccessPage;
