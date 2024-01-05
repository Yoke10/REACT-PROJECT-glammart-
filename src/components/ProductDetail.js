// ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetailPage.css'; // Import the CSS file

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Access the product ID from the URL params
  const { id } = useParams();

  useEffect(() => {
    // Fetch all products from the JSON server
    axios.get(`http://localhost:3004/productlist`)
      .then(response => {
        // Find the product that matches the ID
        const foundProduct = response.data.find(item => item.id.toString() === id);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.warn('Product not found');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="product-detail-container">
      <h1 style={{textAlign:'center'}}>Product Detail </h1>
      {loading ? (
        <p>Loading product details...</p>
      ) : product ? (
        <div className="product-detail-card">
          <img src={product.image} alt={product.name} />
          <div className="product-detail-content">
            <h2 className="product-detail-title">{product.name}</h2>
            <p className="product-detail-price">
              {/* <strong>Old Price:</strong> {product.oldprice}<br />
              <strong>New Price:</strong> {product.newprice} */}
            </p>
            <div className="product-detail-ratings">
              {Array.from({ length: product.rating }, (_, index) => (
                <span key={index}>&#9733;</span>
              ))}
            </div>
            {/* Add more details as needed */}
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetailPage;
