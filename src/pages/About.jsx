// src/pages/About.jsx
import React from 'react';

export default function About() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', minHeight: '80vh' }}>
      <h1 style={{ color: '#2563eb' }}>GIỚI THIỆU DỰ ÁN</h1>
      <div style={{ 
        border: '1px solid #ddd', 
        display: 'inline-block', 
        padding: '20px', 
        borderRadius: '10px',
        marginTop: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <p><strong>Họ tên:</strong> Trần Nguyên An</p>
        <p><strong>Mã SV:</strong> N23DCCN002</p>
        <p><strong>Lớp:</strong> D23CQCN01-N (Ví dụ)</p>
        <hr />
        <p>Đây là bài thực hành số 2: Tìm hiểu và cài đặt React Router Dom</p>
      </div>
    </div>
  );
}