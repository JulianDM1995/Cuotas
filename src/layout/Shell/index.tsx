'use client'

import { AppShell } from '@mantine/core'
import { useDisclosure, useHeadroom } from '@mantine/hooks'
import { Footer } from './Footer'
import { Header } from './Header'
import { Navbar } from './Navbar'

export const Shell = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure()
  const pinned = useHeadroom({ fixedAt: 120 })
  return (
    <AppShell
      bg={'gray.0'}
      header={{ height: 80, collapsed: !pinned }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header
        style={{
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: 'none',
        }}
        withBorder={false}
      >
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  )
}
