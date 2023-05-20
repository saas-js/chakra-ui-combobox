import { Meta } from "@storybook/react";
import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxPositioner,
  ComboboxProps,
  ComboboxTrigger,
} from "./combobox.js";
import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import { comboboxTheme } from "./combobox-styles.js";
import { useState } from "react";

const theme = extendTheme({
  components: {
    Combobox: comboboxTheme,
  },
});

export default {
  title: "Combobox",
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Container>
          <Story />
        </Container>
      </ChakraProvider>
    ),
  ],
} as Meta;

const comboboxData = [
  { value: "apple", label: "Apple" },
  { value: "orange", label: "Orange" },
  { value: "grape", label: "Grape" },
  { value: "pear", label: "Pear" },
];

export const Basic = () => {
  const [options, setOptions] = useState(comboboxData);

  const handleInputChange = (e: any) => {
    const filtered = comboboxData.filter((item) =>
      item.label.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setOptions(filtered.length > 0 ? filtered : comboboxData);
  };

  return (
    <Combobox>
      <ComboboxLabel>Fruits</ComboboxLabel>
      <ComboboxControl>
        <ComboboxInput onChange={handleInputChange} />
        <ComboboxTrigger>▼</ComboboxTrigger>
      </ComboboxControl>
      <ComboboxPositioner>
        <ComboboxContent>
          {options.map((item) => (
            <ComboboxOption value={item.value} label={item.label}>
              {item.label}
            </ComboboxOption>
          ))}
        </ComboboxContent>
      </ComboboxPositioner>
    </Combobox>
  );
};
