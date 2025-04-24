import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // CSSファイルをインポート

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2 className='title'>product  list</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3 className='product-title'>
              <Link to={`/products/${product.id}`}>{product.title}</Link> {/* タイトルをLinkで囲む */}
            </h3>
            <p>${product.price}</p>
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;