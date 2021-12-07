import reat, { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

export const HeaderContext = createContext({});

export const HeaderContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [theme, setTheme] = useState(1);
  const [isConnectWallet, setIsConnectWallet] = useState(false);

  return (
    <HeaderContext.Provider
      value={{
        open,
        setOpen,
        isCreate,
        setIsCreate,
        theme,
        setTheme,
        isConnectWallet,
        setIsConnectWallet,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
