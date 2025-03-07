import 'framer-plugin/framer.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { BrowserRouter } from 'react-router';
import { ConnectContext } from './shared/contexts/connect-context.tsx';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConnectContext>
        <App />
      </ConnectContext>
    </BrowserRouter>
  </React.StrictMode>
);
