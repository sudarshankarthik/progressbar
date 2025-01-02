import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

const loadingSpinner = document.createElement('div');
loadingSpinner.style.position = 'fixed';
loadingSpinner.style.top = '50%';
loadingSpinner.style.left = '50%';
loadingSpinner.style.transform = 'translate(-50%, -50%)';
loadingSpinner.style.fontSize = '1.5rem';
loadingSpinner.style.color = 'var(--primary-theme)';
loadingSpinner.textContent = 'Loading...';
rootElement.appendChild(loadingSpinner);

setTimeout(() => {
  rootElement.removeChild(loadingSpinner);
}, 1000);