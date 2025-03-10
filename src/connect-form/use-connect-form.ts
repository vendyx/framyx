import { usePluginContext } from '@/plugin-context';
import { fetcher } from '@/vendyx/fetcher';
import { CHECK_QUERY } from '@/vendyx/operations';
import { framer } from 'framer-plugin';
import { useState } from 'react';

export const useConnectForm = () => {
  const { connect } = usePluginContext();

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    shopId: '',
    storefrontApiKey: ''
  });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    if (!form.shopId) {
      framer.notify('Shop ID is required', { variant: 'warning' });
      return;
    }

    if (!form.storefrontApiKey) {
      framer.notify('Storefront API key is required', { variant: 'warning' });
      return;
    }

    setIsLoading(true);
    const check = await fetcher(
      CHECK_QUERY,
      {},
      {
        headers: {
          x_vendyx_shop_api_key: form.storefrontApiKey,
          shop_id: form.shopId
        }
      }
    );
    setIsLoading(false);

    if (!check) {
      framer.notify('Invalid credentials', { variant: 'error' });
      return;
    }

    framer.notify('Connected', { variant: 'success' });
    connect(form.storefrontApiKey, form.shopId);
  };

  return {
    isLoading,
    setForm,
    onSubmit
  };
};
