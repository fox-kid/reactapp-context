import { createContext, useContext, useState } from "react";

const FontColorContext = createContext();

function FontColorContextProvider({ children }) {
  const [color, setColor] = useState('grey');
  const [fontSize, setFontSize] = useState(16);

  return (
    <FontColorContext.Provider
      value={{ color, fontSize, setColor, setFontSize }}
    >
      {children}
    </FontColorContext.Provider>
  );
}

function useFontColorContext() {
  const context = useContext(FontColorContext);

  if (!context) {
    return new Error("Wrap your component within FontColorContextProvider");
  }
  return context;
}

export { useFontColorContext, FontColorContextProvider };