import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarcherAppStor from './Marcher/MacherStor/MarcherAppStor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MarcherAppStor/>
  </React.StrictMode>
);
reportWebVitals();
