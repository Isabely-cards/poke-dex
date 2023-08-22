import React from 'react';
import { createRoot } from 'react-dom/client'; // Importando createRoot corretamente

import App from './App';

const rootElement = document.getElementById('root');

// Usando createRoot para renderizar o aplicativo
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
