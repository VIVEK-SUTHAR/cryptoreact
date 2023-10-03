import { Appearance } from "react-native";
import { create } from "zustand";

type ThemeStore = {
  activeTheme: "light" | "dark";
  toggleTheme: () => void;
};

const devicePreferredTheme = Appearance.getColorScheme() ?? "dark";
console.log(devicePreferredTheme)
const useThemeStore = create<ThemeStore>((set) => ({
  activeTheme: devicePreferredTheme,
  toggleTheme: () => {
    set((state) => ({
      activeTheme: state.activeTheme === "light" ? "dark" : "light",
    }));
  },
}));
export default useThemeStore;
