import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Cyber Jacket',
    description: 'A Cyber Jacket to keep you warm in the matrix',
    price: 0.0001,
    imageUrl: 'https://ipfs.io/ipfs/QmcqwURJ3qVtNkk9PMsD4Jh3CY8ndpqkPSx3XiEA6mz3jc',
  },
  {
    id: 2,
    name: 'Cyber Glasses',
    description: 'If you want to look cool in the Badlands',
    price: 0.0001,
    imageUrl: 'https://ipfs.io/ipfs/QmUiguEuAgH2iQeTWKiDzgYsAFAxNBi23gUHBGKv14uJEE',
  },
  {
    id: 3,
    name: 'Cyber Shirt',
    description: 'A must have if you go clubbing at the Afterlife',
    price: 0.0001,
    imageUrl: 'https://ipfs.io/ipfs/QmTpo2f6rxbJ6cUiRCjD1mX5EQXaHeYQZk8GbucNhicshc',
  },
  {
    id: 4,
    name: 'Cyber Socks',
    description: 'The comfiest socks for netrunners',
    price: 0.0001,
    imageUrl: 'https://ipfs.io/ipfs/QmNTBn7fi3basA1x49a2F29HbrdnNghAYwDGz3bvzku1wi',
  },
  {
    id: 5,
    name: 'Cyber Phone Cover',
    description: 'Arasaka\'s members would kill for this',
    price: 0.0001,
    imageUrl: 'https://ipfs.io/ipfs/QmWsSro1c5iDTDkJxN5FMeHWcigSEswqCkaUVFrtWoL3w7',
  },
  {
    id: 6,
    name: 'Cyber Omnitrix',
    description: 'What if Ben 10 grew up in Night City?',
    price: 0.0001,
    imageUrl: 'https://ipfs.io/ipfs/QmXg37az8kDcCZ7VrYgWNL2CmWmR4RB47N9Y9A5kziKaiR',
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
