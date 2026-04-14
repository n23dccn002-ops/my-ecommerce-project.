import './App.css'

function App() {
  return (
    <div className="homepage">
      {/* Thanh điều hướng */}
      <nav className="navbar">
        <div className="logo">TECH SHOP</div>
        <ul className="nav-links">
          <li>Trang chủ</li>
          <li>Sản phẩm</li>
          <li>Liên hệ</li>
        </ul>
        <div className="cart-icon">🛒 Giỏ hàng (0)</div>
      </nav>

      {/* Banner quảng cáo */}
      <header className="hero">
        <h1>SĂN SALE ĐIỆN THOẠI MỚI</h1>
        <p>Giảm giá tới 30% cho tất cả các dòng iPhone</p>
        <button className="buy-btn">Mua ngay</button>
      </header>

      {/* Danh sách sản phẩm mẫu */}
      <main className="product-section">
        <h2>Sản phẩm nổi bật</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="iphone" />
            <h3>iPhone 15 Pro</h3>
            <p className="price">25.000.000đ</p>
            <button>Thêm vào giỏ</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="samsung" />
            <h3>Samsung S24</h3>
            <p className="price">22.000.000đ</p>
            <button>Thêm vào giỏ</button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 Website Ecommerce - Bài thực hành React</p>
      </footer>
    </div>
  )
}

export default App