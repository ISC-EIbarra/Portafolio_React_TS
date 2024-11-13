import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import './index.css';
import Router from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <Router />
    </NextUIProvider>
  </StrictMode>
);
