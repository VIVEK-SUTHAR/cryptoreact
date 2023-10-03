import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import React from "react";
import useAppState from "store/AppStore";
import formatEthreumBalance from "utils/formatBalance";

const useUserBalance = () => {
  const { provider } = useWalletConnectModal();

  const { currentAddress, setBalace } = useAppState();
  const fetchBalance = async () => {
    try {
      const balanceWei = await provider?.request<string>({
        method: "eth_getBalance",
        params: [currentAddress, "latest"],
      });
      const formattedBalance = formatEthreumBalance(balanceWei!);
      setBalace(formattedBalance!);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchBalance();
  }, []);
};

export default useUserBalance;
