import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessPage.css';

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h1 className="glow-text">Transaction Successful!</h1>
      <p className="message">
        Night City and the Matrix can't wait to see what you bought!
      </p>
      <button onClick={handleBackToHome} className="btn-cyber">
        Return Home
      </button>
    </div>
  );
};

export default SuccessPage;
