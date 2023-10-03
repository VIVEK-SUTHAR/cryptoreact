function formatTransactionHash(hash: string) {
  if (!hash || typeof hash !== "string") {
    return "Invalid Hash";
  }

  const initialPart = hash.slice(0, 4);
  const lastPart = hash.slice(-4);

  return `${initialPart}...${lastPart}`;
}
export default formatTransactionHash;
