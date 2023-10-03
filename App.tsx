import React from "react";
import WalletConnectModal from "components/WalletConnectModal";
import RootStackNavigator from "navigation/RootStackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <RootStackNavigator />
      <WalletConnectModal />
    </SafeAreaProvider>
  );
}
