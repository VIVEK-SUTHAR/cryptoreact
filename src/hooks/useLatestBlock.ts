import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import { useEffect, useState } from "react";

const FETCH_BLOCK_INTERVAL = 10000;

const useLatestBlock = () => {
  const [blockNumber, setblockNumber] = useState(0);
  const { provider } = useWalletConnectModal();

  const fetchLatestBlock = async () => {
    try {
      const blockNumber = await provider?.request({
        method: "eth_blockNumber",
        params: [],
      });
      const intBlockNumber: number = Number(blockNumber);
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
