import React, { FC } from "react";
import { SignInWithEthProps } from "types/navigation";
import { Box, Text } from "theme";
import { Alert, Button } from "react-native";
import useAppState from "store/AppStore";
import formatEthAddress from "utils/formatEthAddress";

const SignInWithEth: FC<SignInWithEthProps> = ({ navigation }) => {
  
  const { currentAddress } = useAppState();

  const signIn = async () => {
    try {
     Alert.alert("Sign In With Eth", "Coming Soon");
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
