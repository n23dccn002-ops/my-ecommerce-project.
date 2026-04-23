// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import React, { useState } from 'react'

function Home() {
    const [cartCount, setCartCount] = useState(0);
    const buyProduct = (name) => {
        setCartCount(cartCount + 1);
        alert(`Đã thêm ${name} vào giỏ hàng!`);
    };
    
  return (
    <div className="homepage">
      {/* 4. SỬA Navbar: Thêm hiệu ứng dính (sticky) và hiển thị số giỏ hàng */}
      <nav className="navbar">
        <div className="logo">TECH WORLD</div>
        <ul className="nav-links">
          <li><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Trang chủ</Link></li>
          <li><Link to="/about-us" style={{ color: 'inherit', textDecoration: 'none' }}>Giới thiệu</Link></li>
        </ul>
        <div className="cart-badge">
          🛒 Giỏ hàng: <span>{cartCount}</span>
        </div>
      </nav>

      {/* 5. SỬA Hero: Dùng màu Gradient đa sắc */}
      <header className="hero">
        <div className="hero-content">
          <h1>IPHONE 15 PRO SERIES</h1>
          <p>Đẳng cấp Titan - Hiệu năng bứt phá</p>
          <button className="main-btn">Mua ngay từ 24.990.000đ</button>
        </div>
      </header>

      <main className="container">
        <h2 className="title">Sản phẩm bán chạy</h2>
        <div className="product-grid">
          
          {/* SỬA Sản phẩm 1: Dùng ảnh thật */}
          <div className="product-card">
            <div className="badge">Hot</div>
            <img src="https://vcdn-sohoa.vnecdn.net/2023/09/13/iphone-15-pro-max-finish-selec-2843-1694562544.jpg" alt="iphone" />
            <h3>iPhone 15 Pro Max</h3>
            <p className="price">29.990.000đ</p>
            <button className="add-btn" onClick={() => buyProduct("iPhone 15")}>Thêm vào giỏ</button>
          </div>

          {/* SỬA Sản phẩm 2: Dùng ảnh thật */}
          <div className="product-card">
            <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-2.png" alt="samsung" />
            <h3>Samsung S24 Ultra</h3>
            <p className="price">26.500.000đ</p>
            <button className="add-btn" onClick={() => buyProduct("Samsung S24")}>Thêm vào giỏ</button>
          </div>

          {/* THÊM Sản phẩm 3 cho đa dạng */}
          <div className="product-card">
            <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook-air-m2-13-inch-2022-8gb-256gb-99_1_1_2.png" alt="macbook" />
            <h3>MacBook Air M2</h3>
            <p className="price">24.200.000đ</p>
            <button className="add-btn" onClick={() => buyProduct("Macbook")}>Thêm vào giỏ</button>
          </div>

        </div>
      </main>

      <footer className="footer">
        <p>© 2026 Tech World - Thiết kế bởi { /* Tên của bạn */ "Tran Nguyen An" }</p>
      </footer>
    </div>
  )
}

export default Home