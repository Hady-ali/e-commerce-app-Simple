import React, { useState } from "react";

const SellerDashboard = () => {
  const [productName, setProductName] = useState("");
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    setProducts([...products, productName]);
    setProductName("");
  };

  return (
    <div className="Seller-Dashboard">
      <h2>Seller Dashboard</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <button type="button" onClick={handleAddProduct}>
        Add for Product
      </button>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default SellerDashboard;
