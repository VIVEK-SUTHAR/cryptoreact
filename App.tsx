import React from "react";
import RootStackNavigator from "navigation/RootStackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import WagmiProvider from "providers/WagmiProvider";

export default function App() {
  return (
    <SafeAreaProvider>
      <WagmiProvider>
        <RootStackNavigator />
      </WagmiProvider>
    </SafeAreaProvider>
  );
}
