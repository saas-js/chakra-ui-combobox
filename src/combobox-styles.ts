import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
import {
  Form as controlTheme,
  FormLabel as labelTheme,
  Input as inputTheme,
  Menu as menuTheme,
} from "@chakra-ui/theme/components";

const parts = ["combobox", "control", "label", "input", "content", "option"];

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts);

const baseStyle = definePartsStyle({
  combobox: {},
  control: {
    ...controlTheme.baseStyle?.container,
  },
  label: {
    display: "block",
    ...labelTheme.baseStyle,
  },
  input: {
    ...inputTheme.baseStyle?.field,
  },
  trigger: {
    position: "absolute",
    top: 2,
    right: 4,
  },
  content: {
    listStyle: "none",
    ...menuTheme.baseStyle?.list,
  },
  option: {
    ...menuTheme.baseStyle?.item,
    ["&[data-highlighted]"]: menuTheme.baseStyle?.item._focus,
  },
});

export const comboboxTheme = defineMultiStyleConfig({
  defaultProps: {
    size: "md",
    variant: "outline",
  },
  baseStyle,
  variants: {
    outline: definePartsStyle((props) => {
      return {
        input: inputTheme.variants?.outline(props).field ?? {},
      };
    }),
  },
  sizes: {
    md: {
      input: inputTheme.sizes?.md.field ?? {},
    },
  },
});
