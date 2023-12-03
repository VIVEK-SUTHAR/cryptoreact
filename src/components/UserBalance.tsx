import React from "react";
import { useBalance } from "wagmi";
import { Box, Text } from "theme";
import useAppState from "store/AppStore";

const UserBalance = () => {
  const { currentAddress } = useAppState();
  const { data, isLoading } = useBalance({
    address: currentAddress as `0x${string}`,
    chainId: 80001,
    watch:true
  });
  return (
    <Box bg={"mainBackground"}>
      {isLoading ? (
        <Box backgroundColor="primaryCardText" />
      ) : (
        <Text color="accent">
          Balance:{data?.formatted?.slice(0, 5)} {data?.symbol}
        </Text>
      )}
    </Box>
  );
};

export default UserBalance;
