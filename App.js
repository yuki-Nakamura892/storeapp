import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList'; // 商品一覧コンポーネント
import ProductDetail from './components/ProductDetail'; // 商品詳細コンポーネント

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} /> {/* :id はパラメータ */}
      </Routes>
    </Router>
  );
}

export default App;
