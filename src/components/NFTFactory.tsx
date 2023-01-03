import {
  useAccount,
  useNetwork,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import { abi, contractAddress } from "../constants";
import { NftCounter } from "../components";
import { useEffect, useState } from "react";
import { Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import { BigNumber } from "ethers";

export function NFTFactory() {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const chainId = chain?.id;

  const [numNFTs, setNumNFTs] = useState(0);
  const [winner, setWinner] = useState("");
  const [hasMinted, setHasMinted] = useState(false);

  const toast = useToast();

  const { config, error } = usePrepareContractWrite({
    address: contractAddress,
    abi: abi,
    functionName: "mintNft",
  });
  const { isLoading, writeAsync: mintNft } = useContractWrite({
    ...config,
    onSuccess(data) {
      handleSuccess(data);
    },
    onError(error) {
      console.log("Error", error);
    },
  });

  const {
    /*     data: getTokenId,
    isError: getTokenIdError,
    isLoading: tokenIdLoading,
    isFetching,
    isRefetching, */
    refetch,
  } = useContractRead({
    abi: abi,
    address: contractAddress,
    functionName: "getTokenId",
    /*     scopeKey: "beaver",
    staleTime: 15000, */
    onSuccess(tokenId: BigNumber) {
      setNumNFTs(tokenId.toNumber());
      console.log(`Refreshed tokenId: ${tokenId.toString()}`);
    },
  });

  useEffect(() => {
    const interval = setInterval(refetch, 15000);
    return () => clearInterval(interval);
  }, []);

  const { data: getWinner, isError: getWinnerError } = useContractRead({
    abi: abi,
    address: contractAddress,
    functionName: "s_winner",
    onSuccess(winnerAddress: string) {
      if (winnerAddress !== "0x0000000000000000000000000000000000000000") {
        setWinner(winnerAddress);
      }
    },
  });

  const { data: mintedStatus, isError: mintedStatusError } = useContractRead({
    abi: abi,
    address: contractAddress,
    functionName: "getMintedStatus",
    args: [address],
    onSuccess(mintedStatus: boolean) {
      setHasMinted(mintedStatus);
      console.log("Has minted: ", mintedStatus);
    },
    onError(err) {
      console.log("Error ", err);
    },
  });

  const handleSuccess = async (tx: any) => {
    try {
      await tx.wait();
      handleNewNotification(tx);
      refetch;
      setHasMinted(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewNotification = (tx: any) => {
    toast({
      title: "Transaction complete!",
      description: "Successfully minted your BeaverX NFT!",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <>
      {chainId == 56 ? (
        <>
          {winner ? (
            <>
              <Heading as="h3" size="lg">
                Congratulations to {winner} on winning 2000 $STRX!
              </Heading>
              <Text>
                Thanks everyone for participating! See you soon for another
                giveaway!
              </Text>
            </>
          ) : (
            <>
              <Flex flexBasis="34%" alignItems="center">
                <Heading as="h3" size="lg" p={{ base: "1em 2em", lg: "0" }}>
                  Mint your own limited BeaverX NFT and have a chance to win
                  2000 $STRX!
                </Heading>
              </Flex>
              <Flex m="8">
                <Button
                  /* text="Mint your NFT" */
                  /* theme="primary"
                  size="large" */
                  colorScheme="purple"
                  onClick={async () => {
                    await mintNft?.();
                  }}
                  disabled={isLoading || hasMinted}
                  /* style={{ display: "flex" }} */
                >
                  Mint your NFT
                </Button>
              </Flex>
              {(hasMinted || error) && (
                <Text color="red.400">Already minted your NFT!</Text>
              )}
              <Flex flexBasis="33%" alignItems="center">
                <NftCounter counter={numNFTs} />
              </Flex>
            </>
          )}
        </>
      ) : (
        <>
          <Text as="h1">
            Please make sure you are connected to the BSC network!
          </Text>
        </>
      )}
    </>
  );
}
