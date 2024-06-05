import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ContextProps {
  balance: string;
      setBalance: Dispatch<SetStateAction<string>>;
      wrapBalance: string;
      setWrapBalance: Dispatch<SetStateAction<string>>;
      getBalance: () => Promise<void>;
}

export interface AppProviderProps {
  children: ReactNode;
}

