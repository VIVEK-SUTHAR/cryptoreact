import React, { FC } from "react";
import { SignInWithEthProps } from "types/navigation";
import { Box, Text } from "theme";
import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import { Button } from "react-native";
import useAppState from "store/AppStore";
import formatEthAddress from "utils/formatEthAddress";

const SignInWithEth: FC<SignInWithEthProps> = ({ navigation }) => {
  const { provider, address } = useWalletConnectModal();
  const { currentAddress } = useAppState();

  const signIn = async () => {
    try {
      const signature = await provider?.request({
        method: "personal_sign",
        params: [address, "hello"],
      });
      if (signature) {
        navigation.replace("Home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      flex={1}
      backgroundColor="mainBackground"
      justifyContent="center"
      alignItems="center"
    >
      <Text variant="body">Connected Wallet Address</Text>
      <Text variant="body">{formatEthAddress(currentAddress)}</Text>
      <Button title="Sign In With Eth" onPress={signIn} />
    </Box>
  );
};

export default SignInWithEth;
