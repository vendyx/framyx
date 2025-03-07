import { framer } from 'framer-plugin';
import './App.css';
import { Route, Routes } from 'react-router';
import { ConnectPage } from './pages/connect/connect-page';

framer.showUI({
  position: 'top right',
  width: 365,
  height: 650
});

export function App() {
  return (
    <Routes>
      <Route path="/" element={<ConnectPage />} />
    </Routes>
  );
}
