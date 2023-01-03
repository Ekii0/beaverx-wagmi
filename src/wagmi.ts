import { modalConnectors, walletConnectProvider } from "@web3modal/ethereum";
import { configureChains, createClient } from "wagmi";
import { bsc } from "wagmi/chains";

export const walletConnectProjectId = "b725afdbcf8794b34c84634daeb4302e";

const { chains, provider, webSocketProvider } = configureChains(
  [bsc],
  [walletConnectProvider({ projectId: walletConnectProjectId })]
);

export const client = createClient({
  autoConnect: false,
  connectors: modalConnectors({ appName: "BeaverXNft", chains }),
  provider,
  webSocketProvider,
});

export { chains };
