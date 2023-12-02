import Dai from "icons/Dai";
import Eth from "icons/Eth";
import Matic from "icons/Matic";
import Usdc from "icons/Usdc";
import Usdt from "icons/Usdt";
import React from "react";
import { useWindowDimensions } from "react-native";
import { Box, Text } from "theme";
import { Transaction } from "types/common";
import formatEthAddress from "utils/formatEthAddress";
import formatTransactionHash from "utils/formatTxnHash";

type Props = {
  transaction: Transaction;
};

const TxnCard = ({ transaction }: Props) => {
  const { width } = useWindowDimensions();
  return (
    <Box
      backgroundColor="mainBackground"
      m="s"
      width={width}
      flexDirection="row"
    >
      <Box flex={0.15}>{getTokenIcon(transaction.asset)}</Box>
      <Box flex={1}>
        <Text variant="body" color="primaryCardText">
          Txn hash: {formatTransactionHash(transaction.hash)}
        </Text>
        <Text color="secondaryCardText">
          To:{formatEthAddress(transaction.to)}
        </Text>
      </Box>
    </Box>
  );
};

const getTokenIcon = (assetName: string) => {
  switch (assetName) {
    case "WMATIC":
    case "MATIC":
    case "aPolWMATIC":
      return <Matic height={34} width={34} />;
    case "USDC":
      return <Usdc height={34} width={34} />;
    case "WETH":
      return <Eth height={34} width={34} />;
    case "USDT":
      return <Usdt height={34} width={34} />;
    case "fDAI":
    case "DAI":
      return <Dai height={34} width={34} />;
  }
};

export default React.memo(TxnCard);
