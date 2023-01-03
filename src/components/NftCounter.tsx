import { Text } from "@chakra-ui/react";

export function NftCounter(props: any) {
  return (
    <Text>
      The community has already minted {props.counter} of 500 Beavers!
    </Text>
  );
}
