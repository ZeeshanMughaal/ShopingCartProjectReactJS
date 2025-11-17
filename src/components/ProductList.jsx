import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
const products = [
  { id: 1, name: "Laptop", price: 140000 },
  { id: 2, name: "Phone", price: 85000 },
  { id: 3, name: "Headphones", price: 12000 },
  { id: 4, name: "Keyboard", price: 4500 },
  { id: 5, name: "Mouse", price: 2500 },
  { id: 6, name: "Smart Watch", price: 18000 },
  { id: 7, name: "Bluetooth Speaker", price: 9000 },
  { id: 8, name: "Tablet", price: 60000 },
  { id: 9, name: "Power Bank", price: 3500 },
  { id: 10, name: "Gaming Chair", price: 30000 }
];


  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-3 mb-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;