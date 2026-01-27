import React, { useState } from 'react'
import { Card, Stack, Title, NumberInput, Button, Text } from '@mantine/core'
import { calculateApproxAge } from '../utils/age'

export default function ToolsDashboard() {
  const [birth, setBirth] = useState<string | undefined>(undefined)
  const [result, setResult] = useState<string | null>(null)

  function onCalc() {
    const age = calculateApproxAge(birth)
    setResult(age.label)
  }

  return (
    <Stack>
      <Card>
        <Title order={4}>Smart Age Calculator</Title>
        <input type="date" value={birth ?? ''} onChange={(e) => setBirth(e.target.value)} />
        <Button mt="sm" onClick={onCalc}>Calculate</Button>
        {result && <Text mt="sm">Estimated age: {result}</Text>}
      </Card>

      <Card>
        <Title order={4}>Veterinary Notifications</Title>
        <Text size="sm">Placeholder: set reminders for vaccines and checkups.</Text>
      </Card>

      <Card>
        <Title order={4}>Analytics</Title>
        <Text size="sm">Placeholder: simple activity and feeding stats.</Text>
      </Card>
    </Stack>
  )
}
