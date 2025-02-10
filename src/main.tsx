import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './components/GlobalStyle/index.tsx';
import Router from './router.tsx';

import "./styles/normalize.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
);
