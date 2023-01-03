import { Web3Button } from "@web3modal/react";
import { Box, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <>
      <Box
        as="nav"
        minW="100vw"
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        padding={5}
      >
        <Text fontSize="2xl" fontWeight="bold">
          BeaverX NFT
        </Text>
        <Web3Button label="Connect Wallet" icon="hide" balance="show" />
      </Box>
    </>
  );
}
