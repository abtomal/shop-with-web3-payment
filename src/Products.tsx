import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Cyber Jacket',
    description: 'A Cyber Jacket to keep you warm in the matrix',
    price: 0.0001,
    imageUrl: '/images/cyberjacket.jpg',
  },
  {
    id: 2,
    name: 'Cyber Glasses',
    description: 'If you want to look cool in the Badlands',
    price: 0.0001,
    imageUrl: '/images/cyberglasses.png',
  },
  {
    id: 3,
    name: 'Cyber Shirt',
    description: 'A must have if you go clubbing at the Afterlife',
    price: 0.0001,
    imageUrl: '/images/cybershirt.jpeg',
  },
  {
    id: 4,
    name: 'Cyber Socks',
    description: 'The comfiest socks for netrunners',
    price: 0.0001,
    imageUrl: '/images/cybersocks.jpeg',
  },
  {
    id: 5,
    name: 'Cyber Phone Cover',
    description: 'Arasaka\'s members would kill for this',
    price: 0.0001,
    imageUrl: '/images/cyberpunkphonecover.jpeg',
  },
  {
    id: 6,
    name: 'Cyber Omnitrix',
    description: 'What if Ben 10 grew up in Night City?',
    price: 0.0001,
    imageUrl: '/images/cyberomnitrix.jpeg',
  },
];

const Products: React.FC = () => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
