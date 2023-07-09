import { createContext, useState } from 'react';
import { data } from '../Data/Data';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [AppState, setAppState] = useState(data);
  return (
    <AppContext.Provider value={{ AppState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
};
