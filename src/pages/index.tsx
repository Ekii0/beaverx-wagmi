import { Img } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { Flex, Text } from "@chakra-ui/react";

import { Header } from "../components";
import { FAQ } from "../components";
import { NFTFactory } from "../components";

function Page() {
  const { isConnected } = useAccount();

  return (
    <>
      <Flex minH="100vh" flexDir="column" alignItems="center">
        <Header />

        {isConnected ? (
          <>
            <Flex
              w={{ base: "100%", lg: "960px" }}
              p={{ base: "1em", lg: "0" }}
              flexDir={{ base: "column", lg: "row" }}
              justifyContent="center"
              alignItems="center"
            >
              <Flex flex="1" p="2em">
                <Img
                  src="./STRXBeaver.png"
                  width="100%"
                  style={{
                    borderRadius: "1em",
                  }}
                />
              </Flex>
              <Flex
                flex="1"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
              >
                <NFTFactory />
              </Flex>
            </Flex>
          </>
        ) : (
          <Flex flex="1" flexDir="column" justifyContent="center" p="4em">
            <Text as="h1">
              Please connect your wallet to enter the NFT Factory!
            </Text>
          </Flex>
        )}
        <Flex
          flexDir="column"
          p={{ base: "1em", lg: "0" }}
          w={{ base: "100%", lg: "960px" }}
        >
          <FAQ />
        </Flex>
      </Flex>
    </>
  );
}

export default Page;
