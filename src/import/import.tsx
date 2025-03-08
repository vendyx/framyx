import './import.css';
import { ConnectForm } from '@/connect-form';
import { usePluginContext } from '@/plugin-context';
import { fetcher } from '@/vendyx/fetcher';
import { framer, ManagedCollectionItemInput } from 'framer-plugin';
import { useState } from 'react';
import { getInitialFields } from '@/vendyx/fields';
import { buildCollectionItems } from '@/vendyx/items';
import { SYNCHRONIZE_QUERY } from '@/vendyx/operations';

export const Import = () => {
  const { isConnected } = usePluginContext();
  const [isLoading, setIsLoading] = useState(false);

  const importProducts = async () => {
    setIsLoading(true);
    const collection = await framer.getActiveManagedCollection();

    await collection.setFields(getInitialFields());

    const {
      products: { items }
    } = await fetcher(SYNCHRONIZE_QUERY);

    const collectionItems: ManagedCollectionItemInput[] = items.map(buildCollectionItems);

    await collection.addItems(collectionItems);
    setIsLoading(false);
    framer.closePlugin();
  };

  return (
    <main className="container import__container">
      <header className="import__header_container">
        <h2>Import your products from Vendyx</h2>
        <p>
          {isConnected
            ? 'Click the button below to import all products from your vendyx store'
            : 'Connect your account to be able to import your products from vendyx'}
        </p>
      </header>
      {isConnected ? (
        <button onClick={importProducts} disabled={isLoading} className="framer-button-primary">
          {isLoading ? 'Importing...' : 'Import'}
        </button>
      ) : (
        <ConnectForm />
      )}
    </main>
  );
};
