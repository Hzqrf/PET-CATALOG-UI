import React from 'react'
import { Card, Image, Text, Group, Stack, Badge } from '@mantine/core'
import { Pet } from '../types'
import { calculateApproxAge } from '../utils/age'

export default function PetProfile({ pet }: { pet: Pet }) {
  const age = calculateApproxAge(pet.birthDate)
  return (
    <Card shadow="sm" withBorder>
      <Group>
        {pet.avatar && <Image src={pet.avatar} alt={pet.name} width={160} />}
        <Stack gap="xs">
          <Text fw={700} size="xl">{pet.name}</Text>
          <Text color="dimmed">{pet.breed ?? pet.species}</Text>
          <Group>
            <Badge color="blue">Age: {age.label}</Badge>
            <Badge color="green">Species: {pet.species}</Badge>
          </Group>
          {pet.notes && (
            <div>
              <Text fw={600}>Notes</Text>
              {pet.notes.map((n, i) => (
                <Text key={i} size="sm">• {n}</Text>
              ))}
            </div>
          )}
        </Stack>
      </Group>
    </Card>
  )
}
