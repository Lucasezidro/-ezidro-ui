import type { StoryObj, Meta } from '@storybook/react'
import { Box, Boxprops, Text } from '@ezidro-ui/react'


export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Testando elemento Box</Text>
  },
} as Meta<Boxprops>

export const Primary: StoryObj<Boxprops> = {}

