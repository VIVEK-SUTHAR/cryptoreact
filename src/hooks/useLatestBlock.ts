import { useEffect, useState } from "react";
import { formatUnits } from "viem";
import { useBlockNumber, useNetwork } from "wagmi";

const FETCH_BLOCK_INTERVAL = 10000;

const useLatestBlock = () => {
  const [blockNumber, setblockNumber] = useState("");
  const network = useNetwork();
  const { data } = useBlockNumber({
    chainId: network.chain?.id,
    watch: true,
    cacheTime: 2_000,
  });

  useEffect(() => {
    const blockInterval = setInterval(() => {}, FETCH_BLOCK_INTERVAL);
    if (data) {
      setblockNumber(formatUnits(data, 0));
    }
    //Clear interval on unmount
    return () => clearInterval(blockInterval);
  }, [data]);

  return { blockNumber };
};

export default useLatestBlock;
