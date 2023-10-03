import { create } from "zustand";

// Define the AppState type
type AppState = {
  currentAddress: string | undefined;
  userBalance: string | undefined;
  setCurrentAddress: (newAddress: string) => void;
  setBalace: (latesBalance: string) => void;
};

const useAppState = create<AppState>((set) => ({
  currentAddress: undefined,
  userBalance: undefined,
  setCurrentAddress: (newAddress: string) => {
    set(() => ({ currentAddress: newAddress }));
  },
  setBalace: (newBalance: string) => {
    set({
      userBalance: newBalance,
    });
  },
}));
export default useAppState;
