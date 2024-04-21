import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ezidro-ui/react'


export default {
  title: 'Data Display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/Lucasezidro.png',
    alt: 'Lucas Ezidro'
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}
