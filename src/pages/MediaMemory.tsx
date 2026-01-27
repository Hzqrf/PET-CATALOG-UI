import React from 'react'
import { Card, Grid, Image, Stack, Title, Text } from '@mantine/core'
import { Pet } from '../types'

export default function MediaMemory({ pet }: { pet: Pet }) {
  return (
    <Stack>
      <Card>
        <Title order={4}>Photo Gallery</Title>
        <Grid className="gallery">
          {pet.photos?.map((src, i) => (
            <Grid.Col key={i} span={4}>
              <Image src={src} alt={`${pet.name}-${i}`} />
            </Grid.Col>
          ))}
        </Grid>
      </Card>

      <Card>
        <Title order={4}>Notes</Title>
        {pet.notes?.map((n, i) => (
          <Text key={i}>• {n}</Text>
        ))}
      </Card>
    </Stack>
  )
}
