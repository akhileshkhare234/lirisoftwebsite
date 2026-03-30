import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';
export type ThemePalette = 'classic' | 'midnight' | 'forest' | 'royal' | 'lirisoft';

interface ThemeContextType {
  mode: ThemeMode;
  palette: ThemePalette;
  toggleMode: () => void;
  setPalette: (palette: ThemePalette) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme-mode');
    return (saved as ThemeMode) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  const [palette, setPalette] = useState<ThemePalette>(() => {
    const saved = localStorage.getItem('theme-palette');
    return (saved as ThemePalette) || 'lirisoft'; // Default to lirisoft theme
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark', 'theme-classic', 'theme-midnight', 'theme-forest', 'theme-royal', 'theme-lirisoft');
    root.classList.add(mode);
    root.classList.add(`theme-${palette}`);
    localStorage.setItem('theme-mode', mode);
    localStorage.setItem('theme-palette', palette);
  }, [mode, palette]);

  const toggleMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ mode, palette, toggleMode, setPalette }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
