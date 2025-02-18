import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'; // ✅ Use HashRouter instead of BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <HashRouter>
        <App />
    </HashRouter>
);
