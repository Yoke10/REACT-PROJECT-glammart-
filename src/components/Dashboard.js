// Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from the JSON server
    axios.get('http://localhost:3004/productlist')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (productId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');

    if (confirmDelete) {
      // Delete the product from the server
      axios.delete(`http://localhost:3004/productlist/${productId}`)
        .then(() => {
          // Update the state after successful deletion
          setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
        })
        .catch(error => {
          console.error('Error deleting product:', error);
        });
    }
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <strong>Name:</strong> {product.name}<br />
              {/* <strong>Old Price:</strong> {product.oldprice}<br />
              <strong>New Price:</strong> {product.newprice}<br /> */}
              <button onClick={() => handleDelete(product.id)}>Delete</button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
