import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  mode: "light" | "dark";
  toggleColorMode: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "light",
      toggleColorMode: () =>
        set((state) => ({ mode: state.mode === "light" ? "dark" : "light" })),
    }),
    {
      name: "theme-storage",
    },
  ),
);
