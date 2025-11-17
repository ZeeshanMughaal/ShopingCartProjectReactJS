import React from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">Shopping Cart</h1>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default CartPage;