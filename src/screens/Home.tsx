import LatestBlock from "components/LatestBlock";
import RecentTxns from "components/RecentTxns";
import useUserBalance from "hooks/useUserBalance";
import React from "react";
import useAppState from "store/AppStore";
import { Box, Text } from "theme";

const Home = () => {
  useUserBalance();

  const { userBalance } = useAppState();
  return (
    <Box flex={1} backgroundColor="mainBackground" alignItems="center" p="s">
      <Box
        p="m"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        columnGap={"m"}
      >
        <Text color="accent">Your Balance: {userBalance} Matic</Text>
        <LatestBlock />
      </Box>
      <RecentTxns />
    </Box>
  );
};

export default Home;
