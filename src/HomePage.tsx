import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/shop');
  };

  return (
    <div className="home-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src="./cyberbg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <h1 className="glow-text">NEOPTIC CLOTHING</h1>
        <p>
          Dive into the future with our exclusive handmade cyberpunk collections. <br />
          From neon glasses to gadgets, we have everything to keep you glowing.
        </p>

        <div className="button-group">
          <button onClick={goToProducts} className="btn-cyber">ENTER</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
