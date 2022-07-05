import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import App from './components/App';
import React from 'react';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
