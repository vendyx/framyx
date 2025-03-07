const BASE_URL = 'https://vendyx-api.up.railway.app/shop-api';

export const fetcher = async (options: Options) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      x_vendyx_shop_api_key: options.shop_api_key,
      shop_id: options.shop_id
    },
    body: JSON.stringify({
      query: options.query,
      variables: options.variables
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
  query: string;
  variables?: Record<string, unknown>;
  shop_api_key: string;
  shop_id: string;
};
