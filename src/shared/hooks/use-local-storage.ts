import { useState } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const get = () => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  };

  const [storedValue, setStoredValue] = useState<T>(get);

  const set = (value: T) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, set] as const;
};
