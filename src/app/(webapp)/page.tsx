import { Shell } from '@/layout/Shell'
import { Container } from '@mantine/core'
import { Formulario } from './_src/Formulario'

export default function Page() {
  return (
    <Shell>
      <Container mb={300}>
        <Formulario />
      </Container>
    </Shell>
  )
}
