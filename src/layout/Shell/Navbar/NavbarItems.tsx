import { Box, NavLink } from '@mantine/core'
import React from 'react'
import { NavigationItem } from '../types'

export const NavbarItems = ({ links: items }: { links: NavigationItem[] }) => {
  const renderNavLink = (item: NavigationItem, key: string) => {
    if ('reactNode' in item) {
      if (item.hiddenFromNavbar) {
        return null
      }
      return <React.Fragment key={key}>{item.reactNode}</React.Fragment>
    }

    if ('hiddenFromNavbar' in item && item.hiddenFromNavbar) {
      return null
    }

    const navItem = item as NavigationItem

    const nestedItems = Array.isArray(navItem.children)
      ? (navItem.children as NavigationItem[]).map((child, index) =>
          renderNavLink(child, `${key}-child-${index}`),
        )
      : navItem.children

    return (
      <NavLink
        key={key}
        href={navItem.href || '#'}
        label={navItem.label}
        leftSection={navItem.icon}
        childrenOffset={28}
      >
        {nestedItems}
      </NavLink>
    )
  }

  return <Box>{items.map((item, index) => renderNavLink(item, `navbar-link-${index}`))}</Box>
}
