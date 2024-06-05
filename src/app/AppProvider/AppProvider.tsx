import { createContext, FC, useContext, useMemo, useState } from 'react';
import { useBalance } from '../../blockChain/hooks/useBalance';
import { AppProviderProps, ContextProps } from './types';

const AppContext = createContext<ContextProps | undefined>(undefined);

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [balance, setBalance] = useState('');
  const [wrapBalance, setWrapBalance] = useState('');
  const {getBalance} = useBalance(setBalance, setWrapBalance);

  const contextValue = useMemo(
    () => ({
      balance,
      setBalance,
      wrapBalance,
      setWrapBalance,
      getBalance
    }),
    [balance, wrapBalance, getBalance]
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = (): ContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
};
