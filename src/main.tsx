import 'framer-plugin/framer.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { PluginContextProvider } from './plugin-context.tsx';
import { framer } from 'framer-plugin';
import { synchronize } from './synchronize/synchronize.ts';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

const mode = framer.mode;

if (mode === 'syncManagedCollection') {
  await synchronize();

  framer.closePlugin('Synchronized');
} else {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <PluginContextProvider>
        <App />
      </PluginContextProvider>
    </React.StrictMode>
  );
}
