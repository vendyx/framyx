import './import.css';
import { ConnectForm } from '@/connect-form';
import { usePluginContext } from '@/plugin-context';

export const Import = () => {
  const { isConnected } = usePluginContext();

  return (
    <main className="import__container">
      <header className="import__header_container">
        <h2>Import your products from Vendyx</h2>
        <p>
          {isConnected
            ? 'Click the button below to import all products from your vendyx store'
            : 'Connect your account to be able to import your products from vendyx'}
        </p>
      </header>
      {isConnected ? <button className="framer-button-primary">Import</button> : <ConnectForm />}
    </main>
  );
};
