import React from "react";
import { Text } from "theme";
import formatEthAddress from "utils/formatEthAddress";

type Props = {
  userAddress: string;
};

const Address = ({ userAddress }: Props) => {
  const formattedAddress = formatEthAddress(userAddress);
  return <Text color="primaryCardText">{formattedAddress}</Text>;
};

export default Address;
