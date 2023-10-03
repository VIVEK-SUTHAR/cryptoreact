import { useNavigation } from "@react-navigation/native";
import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import Address from "components/UI/Address";
import { sessionParams } from "components/WalletConnectModal";
import React, { useEffect, type FC } from "react";
import { Button } from "react-native";
import useAppState from "store/AppStore";
import { Box } from "theme";
import { type ConnectWalletProps } from "types/navigation";

const ConnectWallet: FC<ConnectWalletProps> = ({ navigation }) => {
  const { isConnected, address } = useWalletConnectModal();
  const { setCurrentAddress } = useAppState();

  useEffect(() => {
    if (isConnected && address) {
      setCurrentAddress(address);
      navigation.replace("SignInWithEth");
    }
  }, [isConnected]);

  return (
    <Box
      flex={1}
      backgroundColor="mainBackground"
      p="m"
      justifyContent="center"
      alignItems="center"
    >
      {isConnected && address ? (
        <Address userAddress={address} />
      ) : (
        <ConnectWalletButton />
      )}
    </Box>
  );
};

export default ConnectWallet;

const ConnectWalletButton = () => {
  const { open, provider } = useWalletConnectModal();

  const navigation = useNavigation();
  const connectWalletAsync = async () => {
    try {
      await open();
      await provider?.connect({ namespaces: sessionParams.namespaces });
      navigation.navigate("SignInWithEth");
    } catch (error) {
      console.log(error);
    }
  };
  return <Button title="Connect Wallet" onPress={connectWalletAsync} />;
};
