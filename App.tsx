import React from "react";
import RootStackNavigator from "navigation/RootStackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import WagmiProvider from "providers/WagmiProvider";
import useSystemUI from "hooks/useSystemUI";

export default function App() {
  useSystemUI()
  return (
    <SafeAreaProvider>
      <WagmiProvider>
        <RootStackNavigator />
      </WagmiProvider>
    </SafeAreaProvider>
  );
}
