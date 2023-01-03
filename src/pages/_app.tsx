import { EthereumClient } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import * as React from "react";
import { WagmiConfig } from "wagmi";
import { bsc } from "wagmi/chains";
import { chains, client, walletConnectProjectId } from "../wagmi";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { accordionTheme } from "../accordionTheme";

const ethereumClient = new EthereumClient(client, chains);

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const theme = extendTheme({
    components: {
      Accordion: accordionTheme,
    },
    styles: {
      global: {
        "html, body": {
          color: "gray.300",
          lineHeight: "tall",
          bgGradient: "radial(pink.900, purple.900, gray.900 80%)",
        },
        h1: {
          fontSize: "3xl",
          fontWeight: "bold",
        },
        h3: {
          fontSize: "xl",
          fontWeight: "bold",
        },
        h4: {
          fontSize: "lg",
          fontWeight: "bold",
          /*    mb: "2",
          mt: "2", */
        },
        a: {
          textDecoration: "underline",
        },
      },
    },
  });
  return (
    <WagmiConfig client={client}>
      <NextHead>
        <title>BeaverX NFT</title>
        <meta
          name="description"
          content="A beaver-themed NFT created by ekiio as tribute to the StrikeX community"
        />
      </NextHead>
      <ChakraProvider theme={theme}>
        {mounted && <Component {...pageProps} />}
      </ChakraProvider>
      <Web3Modal
        projectId={walletConnectProjectId}
        ethereumClient={ethereumClient}
        desktopWallets={[]}
        defaultChain={bsc}
        themeMode="dark"
        themeColor="purple"
      />
    </WagmiConfig>
  );
}

export default App;
