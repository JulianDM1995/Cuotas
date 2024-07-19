import { Anchor, Button } from '@mantine/core'
import Link from 'next/link'

export const AnchorLink = Anchor.withProps({
  component: Link,
  href: '#',
})

export const ButtonLink = Button.withProps({
  component: Link,
  href: '#',
})
