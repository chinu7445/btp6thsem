import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
<script src="https://unpkg.com/react-pdf/dist/pdf.worker.js"></script>;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
