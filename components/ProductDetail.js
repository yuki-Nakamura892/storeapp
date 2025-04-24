import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'; // CSSファイルをインポート

const ProductDetail = () => {

    const [product, setProduct] = useState(null);
    const { id } = useParams(); // URLからidを取得
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            }
            catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]); // idが変わったら再実行

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!product) {
        return <div>Product not found.</div>;
      }


  return (
    <div>
    <h1 className='detail'>Product Detail</h1>
    <h4>Product Name: {product.title}</h4>
    <img src={product.image} alt={product.title} style={{ maxWidth: '200px' }} /> 
    <h4>Price: ${product.price}</h4>
    <h4>Category: {product.category}</h4>
    <h4>Explanation: {product.description}</h4>
    {/* <button onClick={handleClick}>Add cart</button> */}

  </div>
  )
}

export default ProductDetail