import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

export function FAQ() {
  const faqContent = [
    {
      Q: <>How much does it cost to mint a BeaverX NFT?</>,
      A: (
        <>
          This BeaverX NFT is a gift to the awesome StrikeX community, so there
          is no minting fee. You will only have to pay the usual transaction
          fees on the BSC network to claim your NFT. These should be
          0.000484375&nbsp;BNB, or roughly $0.12 at the current BNB price.
        </>
      ),
    },
    {
      Q: <>How many NFTs can I mint?</>,
      A: (
        <>
          There is a per wallet minting limit of one NFT, i.e. every wallet can
          only ever mint exactly one NFT. You can, however, transfer this NFT to
          whomever you want. Please note that the prize will be automatically
          transferred to the owner of the NFT at the time of the raffle. So
          please be aware of this fact when you want to transfer your NFT before
          the raffle is concluded. On the other hand, this could be a great
          opportunity to make someone a special gift.
        </>
      ),
    },
    {
      Q: <>Can I transfer my NFT?</>,
      A: (
        <>
          Yes! You can transfer your NFT like any other token. But don&apos;t
          forget that the prize will be sent to the owner of the NFT when the
          rafle is drawn, not to the one who minted the NFT! So if you&apos;d
          like to give someone the chance to win the prize, then go ahead and
          transfer your NFT any time. Otherwise, you should probably wait for
          the end of the raffle!
        </>
      ),
    },
    {
      Q: <>How is the raffle drawn?</>,
      A: (
        <>
          Once all 500 NFTs have been minted, the smart contract automatically
          calls the Chainlink VRF oracle and requests a verifiably random
          number. Once the contract gets a random number, it looks up the
          current owner of the NFT and transfers the prize tokens to their
          wallet.
        </>
      ),
    },
    {
      Q: <>Can I mint my NFT with my StrikeXWallet?</>,
      A: (
        <>
          That&apos;s indeed possible! Your NFT won&apos;t show up, though,
          until NFTs will be integrated into the StrikeXWallet. But fret not,
          your beaver is living happily on the blockchain and can be viewed on
          many NFT marketplaces like OpenSea or tofuNFT in the meantime. I am
          also working on a little NFT showroom, so you will have a place where
          all your beavers can come together and frolic!
        </>
      ),
    },
    {
      Q: <>How can I connect my StrikeXWallet to your site?</>,
      A: (
        <>
          You will need two devices for this. That&apos;s because you will need
          to scan the WalletConnect QR image with the device on which you have
          installed your StrikeXWallet. Currently it is not possible to open the
          deep link provided by WalletConnect from the same device you have your
          StrikeXWallet on, so this is a workaround to connect your
          StrikeXWallet.
        </>
      ),
    },
    {
      Q: <>Is it safe to interact with this site?</>,
      A: (
        <>
          Short answer: Yes, it is safe to interact with this site and the smart
          contract as no part of the code will ever access your assets. But as
          always, take caution, never give away your seed phrase and disconnect
          from the site once you&apos;re done.
          <br />
          <br />
          Long answer: Instead of trusting me that I created a secure frontend
          and smart contract, you can (and probably should!) check all available
          code bases and see for yourself what exactly the code is doing that
          you want to interact with to minimize any risks. If you find anything
          that you perceive as unsafe to interact with, please reach out to me
          on Discord or Twitter. I am more than happy to learn about the
          troubles you might be facing, and if there is anything I can do to
          improve my code! So please check out my{" "}
          <a href="https://github.com/Ekii0" target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          for the repositories associated with this project! You will find the
          smart contract code{" "}
          <a
            href="https://github.com/Ekii0/BeaverNFT"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{" "}
          and all the frontend stuff{" "}
          <a
            href="https://github.com/Ekii0/beaverx-nft-latest"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          !
        </>
      ),
    },
    {
      Q: <>Can I see the actual deployed contract?</>,
      A: (
        <>
          Of course! Everything is public on the blockchain, so please check out
          the contract on{" "}
          <a
            href="https://bscscan.com/address/0x92a6Fd4d16c5A55C9f138DA1Db7A99254148c829#code"
            target="_blank"
            rel="noreferrer"
          >
            bscscan
          </a>
          !
        </>
      ),
    },
    {
      Q: <>Who created this?</>,
      A: (
        <>
          This is a little fullstack Web3 coding project by{" "}
          <a href="https://twitter.com/ekiio6" target="_blank" rel="noreferrer">
            ekiio
          </a>
          . All code has been written by me. The BeaverX illustration has been
          created with Stable Diffusion.
        </>
      ),
    },
  ];

  return (
    <>
      <Accordion>
        {faqContent.map((item, index) => {
          return (
            <AccordionItem key={index}>
              <Heading as="h4" size="md">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {item.Q}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4}>
                <Text>{item.A}</Text>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}
