import React, { useState, useEffect } from 'react';
import { useSendTransaction, useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import { Web3Provider } from '@ethersproject/providers';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { sendTransaction, data } = useSendTransaction(); 
  const { isConnected } = useAccount();
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handlePurchase = async () => {
    if (!isConnected) {
      alert('Please connect your wallet to make a purchase');
      return;
    }

    try {
      setIsProcessing(true);
      await sendTransaction({
        to: '0xB77D31D715D9aA1536fDcc32A1BBc6Ff25A06309', 
        value: BigInt(product.price * 1e18), 
      });
    } catch (error) {
      console.error('Transaction Error:', error);
      alert('Transaction failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    const waitForTransaction = async () => {
      if (data) {
        const provider = new Web3Provider(window.ethereum);
        const receipt = await provider.waitForTransaction(data); 
        if (receipt && receipt.status === 1) {
          navigate('/success');
        } else {
          alert('Transaction failed.');
        }
      }
    };

    waitForTransaction();
  }, [data, navigate]);

  return (
    <div className="product-card" style={styles.card}>
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        style={styles.image}
      />
      <h3 className="product-name" style={styles.name}>
        {product.name}
      </h3>
      <p className="product-description" style={styles.description}>
        {product.description}
      </p>
      <p className="product-price" style={styles.price}>
        {product.price} ETH
      </p>
      <button 
        onClick={handlePurchase} 
        className="btn-purchase" 
        style={{
          ...styles.button,
          backgroundColor: isProcessing ? '#555' : '#ccff00',
          cursor: isProcessing ? 'not-allowed' : 'pointer',
        }}
        disabled={isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Buy'}
      </button>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: '250px',
    padding: '10px',
    margin: '10px auto',
    textAlign: 'center' as const,
    borderRadius: '8px',
    backgroundColor: '#1c1c1e',
    boxShadow: '0 0 10px #00ff2a, 0 0 20px #00ff2a, 0 0 30px #00ff2a',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover' as 'cover',
    borderRadius: '8px',
  },
  name: {
    fontSize: '1rem',
    margin: '8px 0',
    color: '#ffffff',
  },
  description: {
    fontSize: '0.9rem',
    color: '#cccccc',
    margin: '5px 0',
  },
  price: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#00ff2a',
    margin: '8px 0',
  },
  button: {
    padding: '8px 16px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#000000',
    backgroundColor: '#ccff00',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 10px rgba(255, 221, 0, 0.8)',
  },
};

export default ProductCard;
