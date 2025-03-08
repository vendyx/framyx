import { framer } from 'framer-plugin';
import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';

export type PluginContext = {
  shopId: string;
  storefrontApiKey: string;
  mode: string;
  isConnected: boolean;
  connect: (storefrontApiKey: string, shopId: string) => void;
};

export const LocalStorageKeys = {
  StorefrontApiKey: 'x-vendyx-storefront-api-key',
  ShopId: 'x-vendyx-shop-id'
};

const shopId = window.localStorage.getItem(LocalStorageKeys.ShopId) ?? '';
const storefrontApiKey = window.localStorage.getItem(LocalStorageKeys.StorefrontApiKey) ?? '';
const mode = framer.mode;
const isConnected = Boolean(shopId && storefrontApiKey);

const initialContext = { shopId, storefrontApiKey, mode, isConnected };

const Context = createContext<PluginContext>({ ...initialContext, connect: () => {} });

export const PluginContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [pluginContext, setPluginContext] = useState(initialContext);

  const connect = (storefrontApiKey: string, shopId: string) => {
    window.localStorage.setItem(LocalStorageKeys.ShopId, shopId);
    window.localStorage.setItem(LocalStorageKeys.StorefrontApiKey, storefrontApiKey);

    setPluginContext({ ...pluginContext, shopId, storefrontApiKey, isConnected: true });
  };

  return <Context.Provider value={{ ...pluginContext, connect }}>{children}</Context.Provider>;
};

export const usePluginContext = () => useContext(Context);
