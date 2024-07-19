import { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

export type LinkButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> &
  Partial<LinkProps>
export type MenuButtonProps = { children?: NavigationItem[] | ReactNode }
export type ActionButtonProps = { onClick?: () => void }

export type NavigationItem = {
  hiddenFromHeader?: boolean
  hiddenFromNavbar?: boolean
  reactNode?: ReactNode
  label?: string
  icon?: ReactNode
} & LinkButtonProps &
  MenuButtonProps &
  ActionButtonProps
