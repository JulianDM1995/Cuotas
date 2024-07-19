import { AppLogo } from '@/assets/AppLogo'
import { Burger, Group } from '@mantine/core'
import { NAVIGATION_ITEMS } from '../CONFIG'
import { HeaderItems } from './HeaderItems'

export const Header = ({ opened, toggle }: { opened: boolean; toggle: () => void }) => {
  return (
    <Group h="100%" px="md">
      <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
      <Group justify="space-between" style={{ flex: 1 }} visibleFrom="md">
        <AppLogo height={60} />
        <HeaderItems links={NAVIGATION_ITEMS} />
      </Group>
    </Group>
  )
}
