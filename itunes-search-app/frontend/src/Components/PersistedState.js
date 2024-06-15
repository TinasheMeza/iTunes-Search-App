import { useState, useEffect } from "react";

/**
 * usePersistedState Hook
 * A custom hook to persist state to localStorage.
 * */
const usePersistedState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const persistedValue = localStorage.getItem(key);
    return persistedValue ? JSON.parse(persistedValue) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default usePersistedState;
