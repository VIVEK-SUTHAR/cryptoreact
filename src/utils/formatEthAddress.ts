function formatEthAddress(
  address: string | undefined,
  prefixLength: number = 6,
  suffixLength: number = 4
) {
  if (!address) {
    return "0x00...00";
  }
  if (!/^(0x)?[0-9a-fA-F]{40}$/.test(address)) {
    throw new Error("Invalid Ethereum address");
  }

  if (!address.startsWith("0x")) {
    address = "0x" + address;
  }

  const prefix = address.substring(0, prefixLength + 2); // Add 2 for "0x" prefix
  const suffix = address.substring(address.length - suffixLength);

  const formattedAddress = `${prefix}...${suffix}`;

  return formattedAddress;
}
export default formatEthAddress;
