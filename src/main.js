import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const basename = import.meta.env.VITE_BASENAME;
createRoot(document.getElementById('root')).render(_jsx(BrowserRouter, { basename: basename, children: _jsx(App, {}) }));
