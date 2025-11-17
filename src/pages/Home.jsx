import React from "react";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">Welcome to Our Store</h1>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Home;
