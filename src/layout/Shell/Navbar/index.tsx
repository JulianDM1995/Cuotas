import { NAVIGATION_ITEMS } from '../CONFIG'
import { NavbarItems } from './NavbarItems'

export const Navbar = () => {
  return (
    <>
      <NavbarItems links={NAVIGATION_ITEMS} />
    </>
  )
}
