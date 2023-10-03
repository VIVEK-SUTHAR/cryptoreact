import { useNavigation } from "@react-navigation/native";
import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import React, { useState } from "react";
import { ActivityIndicator, Alert, Button } from "react-native";
import { Box, Text } from "theme";

const DisconnectButton = () => {
  const navigation = useNavigation();
  const { provider, isConnected } = useWalletConnectModal();
  const [isDisconnecting, setIsDisconnecting] = useState(false);
  const disconnectWallet = () => {
    try {
      Alert.alert(
        "Do you want to continue",
        "By doing this, next time you need to connect your  wallet",
        [
          {
            text: "Cancel",
            onPress: () => {
              return;
            },
            style: "cancel",
          },
          {
            text: "Disconnect",
            onPress: () => {
              setIsDisconnecting(true);
              provider?.disconnect().then(() => {
                setIsDisconnecting(false);
                navigation.reset({
                  index: 0,
                  routes: [{ name: "ConnectWallet" }],
                });
              });
            },
            style: "destructive",
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        }
      );
    } catch (error) {}
  };
  return (
    <>
      {isConnected && (
        <Button
          title="Disconnect Wallet"
          onPress={disconnectWallet}
          disabled={isDisconnecting}
        />
      )}
      {isDisconnecting && (
        <Box p="m" justifyContent="center" alignItems="center">
          <Text color="primaryCardText">
            Disconnecting wallet...
            <ActivityIndicator size={"small"} />
          </Text>
        </Box>
      )}
    </>
  );
};

export default React.memo(DisconnectButton);
