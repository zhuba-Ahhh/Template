import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import App from './App';
import 'uno.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
