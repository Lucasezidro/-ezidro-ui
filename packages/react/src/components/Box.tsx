import { ElementType, ComponentProps } from "react";
import { styled } from "../styles";

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface Boxprops extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
