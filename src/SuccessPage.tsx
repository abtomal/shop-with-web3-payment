import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessPage.css';

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToShop = () => {
    navigate('/shop');
  };

  return (
    <div className="container">
      <h1 className="glow-text">Transaction Successful!</h1>
      <p className="message">
        Night City and the Matrix can't wait to see what you bought!
      </p>
      <button onClick={handleBackToShop} className="btn-cyber">
        Back
      </button>
    </div>
  );
};

export default SuccessPage;
