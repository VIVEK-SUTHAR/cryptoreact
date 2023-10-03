import {
  type IProviderMetadata,
  WalletConnectModal as WCModal,
} from "@walletconnect/modal-react-native";
import app from "../../app.json";
import { APP_DESC, APP_NAME, PROJECT_WEBSITE } from "constants/index";
import useThemeStore from "store/ThemeStore";
const projectId = "GRAB_FROM_WC_CLOUD_ANDPASTE_HERE";

const providerMetadata: IProviderMetadata = {
  name: APP_NAME,
  description: APP_DESC,
  url: PROJECT_WEBSITE,
  icons: ["LOGO_URL_GOES_HERE"],
  redirect: {
    native: app.expo.scheme,
    universal: "add_your_universal_scheme_here",
  },
};
export const sessionParams = {
  namespaces: {
    eip155: {
      methods: ["eth_sendTransaction", "personal_sign", "eth_signTypedData"],
      chains: ["eip155:137"],
      events: ["chainChanged", "accountsChanged"],
      rpcMap: {
        
      },
    },
  },
};
const WalletConnectModal = () => {
  const { activeTheme } = useThemeStore();
  return (
    <WCModal
      projectId={projectId}
      providerMetadata={providerMetadata}
      themeMode={activeTheme}
      sessionParams={sessionParams}
    />
  );
};

export default WalletConnectModal;
