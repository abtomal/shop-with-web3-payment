import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Cyber Jacket',
    description: 'A Cyber Jacket to keep you warm in the matrix',
    price: 0.0001,
    imageUrl: 'https://bafybeigjwd5zlg4cc4algzjqxtykodnschummb3yxci4hhouipm57lx2km.ipfs.dweb.link?filename=cyberjacket.jpg',
  },
  {
    id: 2,
    name: 'Cyber Glasses',
    description: 'If you want to look cool in the Badlands',
    price: 0.0001,
    imageUrl: 'https://bafybeic6znqlrj3imbum4ea4uhhpaaubeyqww2wrb7u7stmtjglj76v46m.ipfs.dweb.link?filename=cyberglasses.png',
  },
  {
    id: 3,
    name: 'Cyber Shirt',
    description: 'A must have if you go clubbing at the Afterlife',
    price: 0.0001,
    imageUrl: 'https://bafybeicrqanmjwkcjro45zrujsqkz6pmfbdl4ks75z4d6l7t5tahoexfam.ipfs.dweb.link?filename=cybershirt.jpeg',
  },
  {
    id: 4,
    name: 'Cyber Socks',
    description: 'The comfiest socks for netrunners',
    price: 0.0001,
    imageUrl: 'https://bafybeiabvsowkfyhyt4fiyigysf3ssxrkakfnmfsnifjfs6xcisjenkxcu.ipfs.dweb.link?filename=cybersocks.jpeg',
  },
  {
    id: 5,
    name: 'Cyber Phone Cover',
    description: 'Arasaka\'s members would kill for this',
    price: 0.0001,
    imageUrl: 'https://bafybeid6yem7mafep5bbpjfroqw7zht5ti3ct7zbro3p7qbad5fmg7coyi.ipfs.dweb.link?filename=cyberpunkphonecover.jpeg',
  },
  {
    id: 6,
    name: 'Cyber Omnitrix',
    description: 'What if Ben 10 grew up in Night City?',
    price: 0.0001,
    imageUrl: 'https://bafybeiekwcgqtvtdnabdue6vczzs3wn7oiqjs6zlsupphcnsprnz3qtvyy.ipfs.dweb.link?filename=cyberomnitrix.jpeg',
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
