'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface StringContextType {
  sharedString: string;
  setSharedString: React.Dispatch<React.SetStateAction<string>>;
  sharedStringLength: number;
  setSharedStringLength: React.Dispatch<React.SetStateAction<number>>;
}

const StringContext = createContext<StringContextType | undefined>(undefined);

export const useStringContext = (): StringContextType => {
  const context = useContext(StringContext);
  if (!context) {
    throw new Error('useStringContext must be used within a StringContextProvider');
  }
  return context;
};

interface StringContextProviderProps {
  children: React.ReactNode; 
}

export const StringContextProvider: React.FC<StringContextProviderProps> = ({ children }) => {
  const [sharedString, setSharedString] = useState<string>('');
  const [sharedStringLength, setSharedStringLength] = useState<number>(0);

  const value: StringContextType = {
    sharedString,
    setSharedString,
    sharedStringLength,
    setSharedStringLength
  };

  return (
    <StringContext.Provider value={value}>
      {children}
    </StringContext.Provider>
  );
};
