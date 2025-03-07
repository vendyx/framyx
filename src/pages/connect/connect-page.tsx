import './connect-page.css';

import { ConnectForm } from '@/core/connect/connect-form';

export const ConnectPage = () => {
  return (
    <main className="connect__container">
      <header className="connect__header_container">
        <h1>Vendyx</h1>
        <p>Connect your store</p>
      </header>
      <ConnectForm />
    </main>
  );
};
