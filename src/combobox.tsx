import * as React from "react";
import {
  Combobox as ComboboxPrimitive,
  ComboboxContent as ComboboxContentPrimitive,
  ComboboxLabel as ComboboxLabelPrimitive,
  ComboboxControl as ComboboxControlPrimitive,
  ComboboxInput as ComboboxInputPrimitive,
  ComboboxOption as ComboboxOptionPrimitive,
  ComboboxOptionProps as ComboboxOptionPropsPrimitive,
  ComboboxPositioner as ComboboxPositionerPrimitive,
  ComboboxProps as ComboboxPropsPrimitive,
  ComboboxTrigger as ComboboxTriggerPrimitive,
  Portal,
} from "@ark-ui/react";

import type {
  ComboboxProps as ComboboxPrimitiveProps,
  ComboboxOptionProps as ComboboxOptionPrimitiveProps,
} from "@ark-ui/react";

import {
  chakra,
  forwardRef,
  createStylesContext,
  HTMLChakraProps,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { cx } from "@chakra-ui/utils";

const [ComboboxStylesProvider, useComboboxStyles] =
  createStylesContext("Combobox");

function factory<P extends object>(
  Component: React.ForwardRefExoticComponent<P>,
  key: string
) {
  const StyledComponent = chakra(Component);
  return forwardRef<any, typeof StyledComponent>((props, ref) => {
    const styles = useComboboxStyles();
    return (
      <StyledComponent
        ref={ref}
        {...props}
        __css={styles[key]}
        className={cx(`chakra-combobox__${key}`, props.className)}
      />
    );
  });
}

export interface ComboboxProps
  extends HTMLChakraProps<"div">,
    ComboboxPrimitiveProps {}

export const Combobox = forwardRef<ComboboxProps, "div">((props, ref) => {
  const styles = useMultiStyleConfig("Combobox", props);

  return (
    <ComboboxStylesProvider value={styles}>
      <ComboboxPrimitive {...props} ref={ref} />
    </ComboboxStylesProvider>
  );
});

export const ComboboxContent = factory(ComboboxContentPrimitive, "content");
export const ComboboxControl = factory(ComboboxControlPrimitive, "control");
export const ComboboxInput = factory(ComboboxInputPrimitive, "input");
export const ComboboxLabel = factory(ComboboxLabelPrimitive, "label");
export const ComboboxOption = factory(ComboboxOptionPrimitive, "option");
export const ComboboxPositioner = ComboboxPositionerPrimitive;
export const ComboboxTrigger = factory(ComboboxTriggerPrimitive, "trigger");
