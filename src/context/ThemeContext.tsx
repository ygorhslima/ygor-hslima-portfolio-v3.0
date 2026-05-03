"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  temaEscuro: boolean;
  setTemaEscuro: (tema: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [temaEscuro, setTemaEscuro] = useState(false);

  useEffect(() => {
    if (temaEscuro) {
      document.body.classList.add("escuro");
    } else {
      document.body.classList.remove("escuro");
    }
  }, [temaEscuro]);

  return (
    <ThemeContext.Provider value={{ temaEscuro, setTemaEscuro }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}