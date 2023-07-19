import { useEffect, useState } from 'react';

export function useLocalStorageState(initialeState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem('watched');
    return storedValue ? JSON.parse(storedValue) : initialeState;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
