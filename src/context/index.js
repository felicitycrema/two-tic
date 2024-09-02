import React from 'react';
import { ThemeContextProvider } from "./ThemeContext";
import { GameContextProvider } from './GameContext';
// import { ModalContextProvider } from './ModalContext';
function Provider ({ children }) {
  return (
    <ThemeContextProvider>
      <GameContextProvider>
        {/* <ModalContextProvider> */}
          {children}
          {/* </ModalContextProvider> */}
      </GameContextProvider>
      </ThemeContextProvider>
  );
}

export default Provider