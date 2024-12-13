import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

// ค้นหา root element
const rootElement = document.getElementById('root');

// สร้าง root ใหม่ด้วย React 18
const root = ReactDOM.createRoot(rootElement);

// เรนเดอร์ App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
