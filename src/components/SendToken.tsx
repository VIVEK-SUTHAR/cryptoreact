import useDebounce from "hooks/useDebounce";
import React from "react";
import { Button, Linking, StyleSheet, TextInput } from "react-native";
import { Box, Text, theme } from "theme";
import { parseEther } from "viem";
import { polygonMumbai } from "viem/chains";
import {
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from "wagmi";

const SendToken = () => {
  const [to, setTo] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const [debouncedTo] = useDebounce(to, 500);
  const [debouncedAmount] = useDebounce(amount, 500);

  const { config } = usePrepareSendTransaction({
    chainId: polygonMumbai.id,
    to: debouncedTo,
    value: debouncedAmount ? parseEther(debouncedAmount) : undefined,
  });
  const {
    sendTransaction,
    data,
    error: sendTxError,
  } = useSendTransaction(config);
  const { isLoading, isSuccess, error } = useWaitForTransaction({
    chainId: polygonMumbai.id,
    hash: data?.hash,
  });
  const sendTx = async () => {
    try {
      if (amount == "") {
        return;
      }
      console.log("s");
      sendTransaction?.();
    } catch (error) {
    } finally {
    }
  };

  return (
    <Box
      p="s"
      width={"98%"}
      borderColor={"secondaryCardText"}
      borderWidth={2}
      borderRadius={4}
    >
      <TextInput
        inputMode="decimal"
        onChange={(e) => {
          setAmount(e.nativeEvent.text);
        }}
        placeholder="Enter the amount (Matic)"
        placeholderTextColor={theme.colors.secondaryCardText}
        selectionColor={theme.colors.accent}
        style={styles.inputContainer}
      />

      <TextInput
        inputMode="text"
        onChange={(e) => {
          setTo(e.nativeEvent.text);
        }}
        placeholder={`Enter the Recipient Address`}
        placeholderTextColor={theme.colors.secondaryCardText}
        selectionColor={theme.colors.accent}
        style={styles.inputContainer}
      />
      <Button title={isLoading ? "Sending..." : "Send"} onPress={sendTx} />
      {isSuccess ? (
        <Text color="primaryCardText">
          Txn Confirmed, Track{" "}
          <Text
            color="accent"
            onPress={() => {
              Linking.openURL(
                `https://mumbai.polygonscan.com/tx/${data?.hash}`
              );
            }}
          >
            Here
          </Text>
        </Text>
      ) : null}
    </Box>
  );
};

export default React.memo(SendToken);

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: theme.colors.secondaryCardText,
    borderBottomWidth: 1,
    padding: 4,
    marginVertical: 8,
    color: theme.colors.accent,
  },
});
