import React from 'react'
import { Card, Image, Text, Stack } from '@mantine/core'
import { Pet } from '../types'

type Props = {
  pets: Pet[]
  selectedId?: string | null
  onSelect: (p: Pet) => void
}

export default function PetList({ pets, onSelect, selectedId }: Props) {
  return (
    <Stack>
      {pets.map((p) => (
        <Card key={p.id} shadow={p.id === selectedId ? 'md' : 'sm'} withBorder className="pet-card" onClick={() => onSelect(p)}>
          <Stack gap="xs">
            {p.avatar && <Image src={p.avatar} alt={p.name} height={120} />}
            <Text fw={700}>{p.name}</Text>
            <Text size="sm" color="dimmed">{p.breed ?? p.species}</Text>
          </Stack>
        </Card>
      ))}
    </Stack>
  )
}
