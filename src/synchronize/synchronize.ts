import { LocalStorageKeys } from '@/plugin-context';
import { fetcher } from '@/vendyx/fetcher';
import { buildCollectionItems } from '@/vendyx/items';
import { SYNCHRONIZE_QUERY } from '@/vendyx/operations';
import { framer, ManagedCollectionItemInput } from 'framer-plugin';

export const synchronize = async () => {
  const storefrontApiKey = window.localStorage.getItem(LocalStorageKeys.StorefrontApiKey) ?? '';
  const shopId = window.localStorage.getItem(LocalStorageKeys.ShopId) ?? '';

  const {
    products: { items }
  } = await fetcher({ query: SYNCHRONIZE_QUERY, storefrontApiKey, shopId });

  const collection = await framer.getActiveManagedCollection();
  const itemsIds = await collection.getItemIds();

  const itemsToBeDeleted = itemsIds.filter(id => !items.some((item: any) => item.id === id));

  const collectionItems: ManagedCollectionItemInput[] = items.map(buildCollectionItems);

  await collection.addItems(collectionItems);
  await collection.removeItems(itemsToBeDeleted);
};
