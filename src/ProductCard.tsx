import React, { useState, useEffect } from 'react';
import { useSendTransaction, useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import { Web3Provider } from '@ethersproject/providers';
import './ProductCard.css';

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
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="product-price">{product.price} ETH</p>
      <button
        onClick={handlePurchase}
        className="btn-purchase"
        disabled={isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Buy'}
      </button>
    </div>
  );
};

export default ProductCard;
