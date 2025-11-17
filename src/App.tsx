import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CartPage from './pages/CartPage.jsx';
import Navbar from './components/Navbar.jsx';
import { CartProvider } from './context/CartContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;