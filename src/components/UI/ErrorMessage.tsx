import React from "react";
import { Box, Text } from "theme";

type Props = {
  message: string;
};

const ErrorMessage = ({ message }: Props) => {
  return (
    <Box>
      <Text variant="body" color="primaryCardText">
        {message}
      </Text>
    </Box>
  );
};

export default React.memo(ErrorMessage);
