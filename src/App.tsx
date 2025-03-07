import { framer } from 'framer-plugin';
import './App.css';
import { LoginForm } from './components/login-form/login-form';

framer.showUI({
  position: 'top right',
  width: 365,
  height: 650
});

export function App() {
  return (
    <main>
      <header className="login_header__container">
        <h1>Vendyx</h1>
        <p>Connect your store</p>
      </header>
      <LoginForm />
    </main>
  );
}
