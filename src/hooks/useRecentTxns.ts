import { ALCHMEY_RPC_URL } from "constants/index";
import { useEffect, useState } from "react";
import useAppState from "store/AppStore";
import { Transaction } from "types/common";

const TXN_TYPE = ["erc20"];

const useEthereumTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { currentAddress } = useAppState();
  const fetchTransactions = async (controller: AbortController) => {
    try {
      const baseURL = ALCHMEY_RPC_URL;
      let data = JSON.stringify({
        method: "alchemy_getAssetTransfers",
        params: [
          {
            category: TXN_TYPE,
            fromBlock: "0x0",
            fromAddress: currentAddress,
          },
        ],
      });

      const response = await fetch(baseURL, {
        body: data,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const result = await response.json();
      console.log(result);
      setTransactions(result.result.transfers);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!currentAddress) return;
    const controller = new AbortController();
    fetchTransactions(controller);
    return () => controller.abort();
  }, [currentAddress]);

  return { transactions, loading, error };
};

export default useEthereumTransactions;
