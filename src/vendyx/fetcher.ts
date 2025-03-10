import { LocalStorageKeys } from '@/plugin-context';
import { TypedDocumentString } from './types';

export const BASE_URL = 'https://vendyx-api.up.railway.app/shop-api';

export const fetcher = async <R, V>(
  query: TypedDocumentString<R, V>,
  variables?: V,
  options?: Options
): Promise<R> => {
  console.log({ BASE_URL });
  const storefrontApiKey = window.localStorage.getItem(LocalStorageKeys.StorefrontApiKey) ?? '';
  const shopId = window.localStorage.getItem(LocalStorageKeys.ShopId) ?? '';

  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      x_vendyx_shop_api_key: storefrontApiKey,
      shop_id: shopId,
      ...options?.headers
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  const { data, errors } = await response.json();

  if (errors) {
    console.log(errors);
  }

  return data;
};

type Options = {
  headers?: Record<string, string>;
};
