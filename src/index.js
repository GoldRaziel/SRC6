import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'yet-another-react-lightbox/styles.css'; // ✅ Importa lo stile del lightbox

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
