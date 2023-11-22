import React, { useState, useContext } from 'react';

import { Theme } from 'types';

type ContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
type Props = {
  children: React.ReactNode;
};

const AppContextProvider = ({ children }: Props): JSX.Element => {
  const defaultTheme: Theme = 'dark';
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const value = {
    theme,
    setTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
export const AppContext = React.createContext({} as ContextType);
export const useAppContext = (): ContextType => useContext(AppContext);
