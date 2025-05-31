import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//export import nomeado
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
