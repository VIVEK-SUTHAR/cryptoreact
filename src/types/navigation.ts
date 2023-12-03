import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  ConnectWallet: undefined;
  SignInWithEth: undefined;
  Home: undefined;
  Settings: undefined;
  Debug: undefined;
};
export type ConnectWalletProps = NativeStackScreenProps<
  RootStackParamList,
  "ConnectWallet"
>;
export type SignInWithEthProps = NativeStackScreenProps<
  RootStackParamList,
  "SignInWithEth"
>;
export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type DebugProps = NativeStackScreenProps<RootStackParamList, "Debug">;
export type SettingsProp = NativeStackScreenProps<
  RootStackParamList,
  "Settings"
>;
