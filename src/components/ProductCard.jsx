import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">RS {product.price}</p>
        <button
          className="btn btn-primary"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;