import React from 'react'
import { Card, Stack, Text, Table, Title } from '@mantine/core'
import { Pet } from '../types'

export default function LifeManagement({ pet }: { pet: Pet }) {
  return (
    <Stack>
      <Card>
        <Title order={4}>Health Records</Title>
        <Table highlightOnHover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {pet.healthRecords?.map((r, i) => (
              <tr key={i}><td>{r.date}</td><td>{r.note}</td></tr>
            ))}
          </tbody>
        </Table>
      </Card>

      <Card>
        <Title order={4}>Feeding Schedule</Title>
        {pet.feedingSchedule?.map((f, i) => (
          <Text key={i}>• {f.time} — {f.food}</Text>
        ))}
      </Card>
    </Stack>
  )
}
