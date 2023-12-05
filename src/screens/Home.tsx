import LatestBlock from "components/LatestBlock";
import RecentTxns from "components/RecentTxns";
import SendToken from "components/SendToken";
import UserBalance from "components/UserBalance";
import React from "react";
import { Box } from "theme";

const Home = () => {
  return (
    <Box flex={1} backgroundColor="mainBackground" alignItems="center" p="s">
      <Box
        p="m"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        columnGap={"m"}
      >
        <UserBalance />
        <LatestBlock />
      </Box>
      <SendToken />
      <Box my="m">
      <RecentTxns />
      </Box>
    </Box>
  );
};

export default Home;
