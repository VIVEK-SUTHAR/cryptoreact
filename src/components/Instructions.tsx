import React from "react";
import { Box, Text } from "theme";

const Data = [
  {
    id: 1,
    instruction:
      " Grab a projectId from Wallet Connect and paste it in I/src/components/WalletConnectModal.tsx at projectId",
  },
  {
    id: 2,
    instruction:
      "Get your RPC url from Alchemy and paste it in /src/constants/index.ts at RPC_URL",
  },
];

const Instructions = () => {
  return (
    <Box
      backgroundColor="mainBackground"
      borderRadius={4}
      borderColor="secondaryCardText"
      borderWidth={1}
      p="s"
      my="s"
    >
      <Text color="primaryCardText" variant="body">
        Just Add this two and you are good to go
      </Text>
      {Data.map((item) => {
        return (
          <Instruction detail={item.instruction} id={item.id} key={item.id} />
        );
      })}
    </Box>
  );
};

const Instruction = ({ detail, id }: { detail: string; id: number }) => {
  return (
    <Box m="s">
      <Text color="primaryCardText">
        {id}. {detail}
      </Text>
    </Box>
  );
};

export default Instructions;
