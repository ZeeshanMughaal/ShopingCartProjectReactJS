import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQty, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="alert alert-info">
        No items in your cart
      </div>
    );
  }

  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>RS {item.price}</td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    value={item.qty}
                    min="1"
                    onChange={(e) => updateQty(item.id, e.target.value)}
                    style={{ width: '80px' }}
                  />
                </td>
                <td>RS {(item.price * item.qty).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 offset-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Total: RS {total.toFixed(2)}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;