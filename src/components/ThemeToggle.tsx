import React, { useState } from 'react';
import { useTheme, ThemePalette } from '../context/ThemeContext';
import { Sun, Moon, Palette, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ThemeToggle: React.FC = () => {
  const { mode, palette, toggleMode, setPalette } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const palettes: { id: ThemePalette; name: string; color: string }[] = [
    { id: 'lirisoft', name: 'Lirisoft Gold', color: '#e5a83b' },
    { id: 'classic', name: 'Classic Blue', color: '#2563eb' },
    { id: 'midnight', name: 'Midnight Indigo', color: '#6366f1' },
    { id: 'forest', name: 'Forest Emerald', color: '#10b981' },
    { id: 'royal', name: 'Royal Purple', color: '#8b5cf6' },
  ];

  return (
    <div className="relative flex items-center gap-2">
      {/* Mode Toggle */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={toggleMode}
        className="p-2 rounded-full bg-surface text-muted transition-colors border border-muted/20"
        aria-label="Toggle mode"
      >
        {mode === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </motion.button>

      {/* Palette Toggle */}
      <div className="relative">
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-surface text-muted transition-colors border border-muted/20"
          aria-label="Select palette"
        >
          <Palette size={18} />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className="absolute right-0 mt-2 w-48 bg-background border border-muted/20 rounded-2xl shadow-2xl z-50 overflow-hidden p-2"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted px-3 py-2">Select Theme</div>
                {palettes.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setPalette(p.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                      palette === p.id 
                        ? 'bg-surface text-foreground' 
                        : 'hover:bg-surface/50 text-muted'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full shadow-sm" 
                        style={{ backgroundColor: p.color }} 
                      />
                      <span className="text-sm font-medium">{p.name}</span>
                    </div>
                    {palette === p.id && <Check size={14} className="text-brand" />}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
