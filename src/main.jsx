import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // THÊM DÒNG NÀY
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* BAO BỌC APP LẠI */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)