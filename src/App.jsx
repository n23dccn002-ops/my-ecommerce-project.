import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css'; 

function App() {
  return (
    <div>
      {/* Menu điều hướng bài 2 */}
      <nav style={{ padding: '15px', background: '#333', textAlign: 'center' }}>
        <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Trang chủ</Link>
        <Link to="/about-us" style={{ color: 'white', textDecoration: 'none' }}>Giới thiệu</Link>
      </nav>

      {/* Định nghĩa đường dẫn */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;