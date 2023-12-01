import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './assets/scss/style.scss'
// style.scss 연동

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


