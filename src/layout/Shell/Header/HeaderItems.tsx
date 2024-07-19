import { Group, Menu, UnstyledButton } from '@mantine/core'
import Link from 'next/link'
import { Fragment } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { NavigationItem } from '../types'
import styles from './styles.module.css'

const LinkButton = ({ link }: { link: NavigationItem }) => (
  <UnstyledButton className={styles.control} component={Link} href={link.href || ''} {...link}>
    {link.icon}
    {link.label}
  </UnstyledButton>
)

const ActionButton = ({ link }: { link: NavigationItem }) => (
  <UnstyledButton className={styles.control} onClick={link.onClick}>
    {link.icon}
    {link.label}
  </UnstyledButton>
)

const MenuLink = ({ link }: { link: NavigationItem }) => (
  <Menu key={link.label} trigger="hover">
    <Menu.Target>
      <UnstyledButton className={styles.control}>
        {link.icon}
        {link.label}
        <FaChevronDown size={10} />
      </UnstyledButton>
    </Menu.Target>
    <Menu.Dropdown>
      {Array.isArray(link.children)
        ? (link.children as NavigationItem[]).map((child, index) =>
            typeof child === 'object' && child !== null && 'label' in child ? (
              <Menu.Item
                key={child.label}
                component={Link}
                href={child.href || ''}
                leftSection={child.icon}
                {...child}
              >
                {child.label}
              </Menu.Item>
            ) : (
              <Fragment key={index}>{child.reactNode}</Fragment>
            ),
          )
        : link.children}
    </Menu.Dropdown>
  </Menu>
)

export const HeaderItems = ({ links: items }: { links: NavigationItem[] }) => {
  return (
    <Group>
      {items.map((item, index) =>
        'hiddenFromHeader' in item && item.hiddenFromHeader ? null : 'reactNode' in item ? (
          <Fragment key={index}>{item.reactNode}</Fragment>
        ) : 'label' in item ? (
          item.children ? (
            <MenuLink key={`header-link-${item.label}`} link={item} />
          ) : item.onClick ? (
            <ActionButton key={`header-link-${item.label}`} link={item} />
          ) : (
            <LinkButton key={`header-link-${item.label}`} link={item} />
          )
        ) : (
          <Fragment key={index}>{item.reactNode}</Fragment>
        ),
      )}
    </Group>
  )
}
