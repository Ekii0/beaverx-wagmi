import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    borderRadius: 8,
    border: "1px solid",
    mt: 4,
    mb: 4,
    ml: 8,
    mr: 8,
  },
  button: {
    fontWeight: "bold",
    fontsize: "md",
    borderRadius: 8,
    bg: "blackAlpha.600",
    pb: 4,
    pt: 4,
    _focus: {
      color: "purple.600",
      bg: "gray.400",
    },
  },
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
