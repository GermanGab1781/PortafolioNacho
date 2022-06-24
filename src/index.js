import App from './App';
import React from 'react';
import './fonts/Nurom-Bold.ttf'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
  
);