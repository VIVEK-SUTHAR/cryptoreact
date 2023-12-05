import React, { PropsWithChildren } from "react";
import { WagmiConfig } from "wagmi";
import { goerli, mainnet, polygonMumbai } from "viem/chains";
import { APP_NAME, APP_DESC, PROJECT_WEBSITE } from "constants/index";
import app from "../../app.json";
import {
  Web3Modal,
  createWeb3Modal,
  defaultWagmiConfig,
} from "@web3modal/wagmi-react-native";

const projectId = "YOUR_PROJECT_ID_GOES_HERE";

const providerMetadata = {
  name: APP_NAME,
  description: APP_DESC,
  url: PROJECT_WEBSITE,
  icons: ["LOGO_URL_GOES_HERE"],
  redirect: {
    native: app.expo.scheme,
    universal: "add_your_universal_scheme_here",
  },
};

const chains = [mainnet,goerli, polygonMumbai];

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: providerMetadata,
});

createWeb3Modal({ projectId, chains, wagmiConfig });
const WagmiProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <WagmiConfig config={wagmiConfig}>{children}
  <Web3Modal />
  </WagmiConfig>;
};

export default WagmiProvider;
