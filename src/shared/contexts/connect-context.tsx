import { createContext, FC, PropsWithChildren, useContext } from 'react';
import { useLocalStorage } from '../hooks/use-local-storage';
import { LocalStorageKeys } from '../constants/local-storage';

type Schema = {
  storefrontApiKey: string;
  shopID: string;
  setShopCredentials: (shopID: string, storefrontApiKey: string) => void;
};

const Context = createContext<Schema>({
  shopID: '',
  storefrontApiKey: '',
  setShopCredentials: () => {}
});

export const ConnectContext: FC<PropsWithChildren> = ({ children }) => {
  const [shopID, setShopID] = useLocalStorage(LocalStorageKeys.ShopId, '');
  const [storefrontApiKey, setStorefrontApiKey] = useLocalStorage(
    LocalStorageKeys.StorefrontApiKey,
    ''
  );

  const setShopCredentials = (shopID: string, storefrontApiKey: string) => {
    setShopID(shopID);
    setStorefrontApiKey(storefrontApiKey);
  };

  return (
    <Context.Provider value={{ storefrontApiKey, shopID, setShopCredentials }}>
      {children}
    </Context.Provider>
  );
};

export const useConnectContext = () => useContext(Context);
