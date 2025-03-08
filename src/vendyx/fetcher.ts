import { LocalStorageKeys } from '@/plugin-context';

const BASE_URL = 'https://vendyx-api.up.railway.app/shop-api';

export const fetcher = async (query: string, options?: Options) => {
  const storefrontApiKey = window.localStorage.getItem(LocalStorageKeys.StorefrontApiKey) ?? '';
  const shopId = window.localStorage.getItem(LocalStorageKeys.ShopId) ?? '';

  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      x_vendyx_shop_api_key: storefrontApiKey,
      shop_id: shopId
    },
    body: JSON.stringify({
      query: query,
      variables: options?.variables
    })
  });

  const { data, errors } = await response.json();

  if (errors) {
    console.log(errors);
    return null;
  }

  return data;
};

type Options = {
  variables?: Record<string, unknown>;
};
