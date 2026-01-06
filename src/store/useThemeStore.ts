import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'dark' | 'light';

interface ThemeState {
  mode: Theme;
  setMode: (mode: Theme) => void;
  toggleMode: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: 'light',
      setMode: (mode) => {
        set({ mode });
        if (typeof document !== 'undefined') {
          if (mode === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      },
      toggleMode: () => set((state) => {
        const newMode = state.mode === 'light' ? 'dark' : 'light';
        if (typeof document !== 'undefined') {
          if (newMode === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
        return { mode: newMode };
      }),
    }),
    {
      name: 'theme',
      onRehydrateStorage: () => (state) => {
        if (state && typeof document !== 'undefined') {
           if (state.mode === 'dark') {
             document.documentElement.classList.add('dark');
           } else {
             document.documentElement.classList.remove('dark');
           }
        }
      }
    }
  )
);
