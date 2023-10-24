import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import { useEffect, useState } from "react";
import { createPublicClient, http } from "viem";
import { polygonMumbai, mainnet } from "viem/chains";
const FETCH_BLOCK_INTERVAL = 10000;

export const Client = createPublicClient({
  transport: http(),
  chain: mainnet,
});

const useLatestBlock = () => {
  const [blockNumber, setblockNumber] = useState(0);
  const { provider } = useWalletConnectModal();

  const fetchLatestBlock = async () => {
    try {
      const block = await Client.getBlockNumber();

      // const blockNumber = await provider?.request({
      //   method: "eth_blockNumber",
      //   params: [],
      // });
      const intBlockNumber: number = Number(block);
      setblockNumber(intBlockNumber);
    } catch (error) {}
  };

  useEffect(() => {
    const blockInterval = setInterval(() => {
      fetchLatestBlock();
    }, FETCH_BLOCK_INTERVAL);
    //Clear interval on unmount
    return () => clearInterval(blockInterval);
  }, []);

  return { blockNumber };
};

export default useLatestBlock;
