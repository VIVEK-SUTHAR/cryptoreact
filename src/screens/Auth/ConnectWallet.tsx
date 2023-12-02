import { useWeb3Modal } from "@web3modal/wagmi-react-native";
import Instructions from "components/Instructions";
import Address from "components/UI/Address";
import React, { useEffect, type FC } from "react";
import { Alert, Button } from "react-native";
import useAppState from "store/AppStore";
import { Box } from "theme";
import { type ConnectWalletProps } from "types/navigation";
import { useAccount } from "wagmi";

const ConnectWallet: FC<ConnectWalletProps> = ({navigation}) => {
  const { setCurrentAddress } = useAppState();
  const { address, isConnected } = useAccount();
  useEffect(() => {
    if (isConnected && address) {
      setCurrentAddress(address);
      navigation.replace("Home")
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
      <Instructions />
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
  const { open } = useWeb3Modal();
  const connectWalletAsync = async () => {
    try {
      Alert.alert("Connect Wallet", "Coming Soon");
      await open();
      console.log("cal");
    } catch (error) {
      console.log(error);
    }
  };
  return <Button title="COnnect" onPress={connectWalletAsync} />;
};
