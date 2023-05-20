# chakra-ui-combobox

A combobox component for [Chakra UI](https://chakra-ui.com/), implemented using [Ark UI](https://ark-ui.com)

## Usage

Add the theme to your Chakra UI theme:

```ts
import { comboboxTheme } from "chakra-ui-combobox";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Combobox: comboboxTheme,
  },
});
```

Then use the component:

```tsx
const comboboxData = [
  { value: "apple", label: "Apple" },
  { value: "orange", label: "Orange" },
  { value: "grape", label: "Grape" },
  { value: "pear", label: "Pear" },
];

export const MyCombobox = () => {
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
```
