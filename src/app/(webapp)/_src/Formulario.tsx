'use client'
import {
  Button,
  Grid,
  Input,
  NumberInput,
  SegmentedControl,
  Select,
  Stack,
  Table,
  Title,
} from '@mantine/core'
import { useForm, UseFormReturnType } from '@mantine/form'
import React, { useState } from 'react'
import { CreditCard } from './CreditCard'

// Define types for the form values
interface FormValues {
  productoTipo: string
  tipoUtilizacion: string
  valor: number
  numeroCuotas: number
}

// Define types for the cuota data
interface Cuota {
  cuota: number
  valorCuota: string
  saldo: string
}

export const Formulario: React.FC = () => {
  const [cuotas, setCuotas] = useState<Cuota[]>([])
  const [showResults, setShowResults] = useState<boolean>(false)

  const form: UseFormReturnType<FormValues> = useForm<FormValues>({
    initialValues: {
      productoTipo: 'Mastercard',
      tipoUtilizacion: 'Compra',
      valor: 1000000,
      numeroCuotas: 12,
    },

    validate: {
      productoTipo: (value) => (value ? null : 'El producto es obligatorio'),
      tipoUtilizacion: (value) => (value ? null : 'El tipo de transacción es obligatorio'),
      valor: (value) =>
        value && !isNaN(value) ? null : 'La cantidad es obligatoria y debe ser un número',
      numeroCuotas: (value) =>
        value >= 1 && value <= 48 ? null : 'El número de cuotas debe ser entre 1 y 48',
    },
  })

  const handleSubmit = (values: FormValues) => {
    const tasa = obtenerTasa(values.productoTipo)
    const nuevasCuotas = calcularCuotas(values.valor, tasa, values.numeroCuotas)
    setCuotas(nuevasCuotas)
    setShowResults(true)
  }

  const obtenerTasa = (productoTipo: string): number => {
    switch (productoTipo) {
      case 'Privada':
        return 2.176
      case 'Mastercard':
        return 2.34
      case 'CrediCompras':
        return 2.45
      default:
        return 2.176
    }
  }

  return (
    <Stack>
      <Title my={20} tt={'uppercase'}>
        {'Simulador de cuotas'}
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <Grid gutter={'xl'}>
            <Grid.Col order={{ base: 2, md: 1 }} span={{ base: 12, md: 6 }}>
              <Stack gap={'lg'}>
                <NumberInput
                  size="xs"
                  label="Cantidad"
                  placeholder="Cantidad a diferir sin puntos"
                  prefix="$"
                  thousandSeparator={true}
                  hideControls
                  {...form.getInputProps('valor')}
                />
                <Stack gap={0}>
                  <Input.Wrapper size="xs" label="Producto" />
                  <SegmentedControl
                    color="red"
                    size="xs"
                    data={['Privada', 'Mastercard', 'CrediCompras']}
                    {...form.getInputProps('productoTipo')}
                  />
                </Stack>
                <Stack gap={0}>
                  <Input.Wrapper size="xs" label="Tipo de transacción" />
                  <SegmentedControl
                    size="xs"
                    color="red"
                    data={['Avance', 'Compra']}
                    {...form.getInputProps('tipoUtilizacion')}
                  />
                </Stack>
                <Select
                  size="xs"
                  label="Número de cuotas"
                  placeholder="Plazo deseado"
                  {...form.getInputProps('numeroCuotas')}
                  data={[...Array(36)].map((_, index) => (index + 1).toString())}
                />
                <Button size="xs" type="submit">
                  Simular
                </Button>
              </Stack>
            </Grid.Col>
            <Grid.Col order={{ base: 1, md: 2 }} span={{ base: 12, md: 6 }}>
              <CreditCard />
            </Grid.Col>
          </Grid>
        </Stack>
      </form>

      {showResults && (
        <>
          <Title order={2} my={20} tt={'uppercase'}>
            {'Resultados'}
          </Title>
          <Table striped highlightOnHover withTableBorder withColumnBorders captionSide="bottom">
            <Table.Caption>Detalle de cuotas y saldos</Table.Caption>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>#</Table.Th>
                <Table.Th>Valor Cuota (Capital + Intereses)</Table.Th>
                <Table.Th>Saldo</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {cuotas.map((cuota) => (
                <Table.Tr key={cuota.cuota}>
                  <Table.Td>{cuota.cuota}</Table.Td>
                  <Table.Td>{`$ ${cuota.valorCuota}`}</Table.Td>
                  <Table.Td>{`$ ${cuota.saldo}`}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </>
      )}
    </Stack>
  )
}

function calcularCuotas(valor: number, tasa: number, numeroCuotas: number): Cuota[] {
  const cuotas: Cuota[] = []
  let saldo = valor
  const tasaMensual = tasa / 100 / 12
  const valorCuota = (valor * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -numeroCuotas))

  for (let i = 1; i <= numeroCuotas; i++) {
    const intereses = saldo * tasaMensual
    const capital = valorCuota - intereses
    saldo -= capital
    cuotas.push({ cuota: i, valorCuota: valorCuota.toFixed(2), saldo: saldo.toFixed(2) })
  }

  return cuotas
}
