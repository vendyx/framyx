import './import.css';
import { ConnectForm } from '@/connect-form';
import { usePluginContext } from '@/plugin-context';
import { fetcher } from '@/vendyx/fetcher';
import { IMPORT_QUERY } from './import-query';
import { framer, ManagedCollectionItemInput } from 'framer-plugin';
import { useState } from 'react';

export const Import = () => {
  const { isConnected, shopId, storefrontApiKey } = usePluginContext();
  const [isLoading, setIsLoading] = useState(false);

  const importProducts = async () => {
    setIsLoading(true);
    const collection = await framer.getActiveManagedCollection();

    const nameId = 'ZfN0uPuHc';
    const imageId = 'vUvFzeUxy';
    const enabledId = 'RtU9eIhEY';
    const descriptionId = 'zvN0uPuHc';

    await collection.setFields([
      {
        id: imageId,
        name: 'image',
        type: 'image'
      },
      {
        id: nameId,
        name: 'Name',
        type: 'string'
      },
      {
        id: enabledId,
        name: 'Enabled',
        type: 'boolean'
      },
      {
        id: descriptionId,
        name: 'Description',
        type: 'formattedText'
      }
    ]);

    const {
      products: { items }
    } = await fetcher({ query: IMPORT_QUERY, storefrontApiKey, shopId });

    const collectionItems: ManagedCollectionItemInput[] = items.map(
      (item: any): ManagedCollectionItemInput => ({
        id: item.id,
        slug: item.slug,
        fieldData: {
          [nameId]: { type: 'string', value: item.name },
          [imageId]: { type: 'image', value: item.assets.items[0].source },
          [enabledId]: { type: 'boolean', value: item.enabled },
          [descriptionId]: { type: 'formattedText', value: item.description }
        }
      })
    );

    await collection.addItems(collectionItems);
    setIsLoading(false);
    framer.closePlugin();
  };

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
