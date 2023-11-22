import React, { useState, useContext } from 'react';

import { Theme } from 'types';
import { useLocalStorage } from 'utils/useLocalStorage';

type ContextType = {
  isLoggedIn: { isLoggedIn: boolean };
  setIsLoggedIn: (isLoggedIn: { isLoggedIn: boolean }) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
type Props = {
  children: React.ReactNode;
};

const AppContextProvider = ({ children }: Props): JSX.Element => {
  const defaultTheme: Theme = 'dark';
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', {
    isLoggedIn: false,
  });
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    theme,
    setTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
export const AppContext = React.createContext({} as ContextType);
export const useAppContext = (): ContextType => useContext(AppContext);
