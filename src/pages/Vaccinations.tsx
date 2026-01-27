import React, { useState } from 'react';
import { Card, Stack, Title, Text, Button, Table, Group, TextInput } from '@mantine/core';

interface Vaccination {
  id: string;
  vaccine: string;
  date: string;
  nextDue: string;
  vet: string;
  batch: string;
}

const Vaccinations: React.FC = () => {
  const [vaccinations, setVaccinations] = useState<Vaccination[]>([
    {
      id: '1',
      vaccine: 'Rabies',
      date: '2023-06-15',
      nextDue: '2024-06-15',
      vet: 'Dr. Smith',
      batch: 'RB-2023-001'
    },
    {
      id: '2',
      vaccine: 'DHPP',
      date: '2023-07-20',
      nextDue: '2024-07-20',
      vet: 'Dr. Johnson',
      batch: 'DH-2023-002'
    }
  ]);

  const [newVaccination, setNewVaccination] = useState({
    vaccine: '',
    date: '',
    nextDue: '',
    vet: '',
    batch: ''
  });

  const handleAddVaccination = () => {
    if (newVaccination.vaccine && newVaccination.date) {
      const vaccination: Vaccination = {
        id: Date.now().toString(),
        ...newVaccination
      };
      setVaccinations([...vaccinations, vaccination]);
      setNewVaccination({ vaccine: '', date: '', nextDue: '', vet: '', batch: '' });
    }
  };

  return (
    <Stack>
      <Title order={2}>Vaccinations</Title>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={4} mb="md">Add New Vaccination</Title>
        <Group grow>
          <TextInput
            label="Vaccine"
            placeholder="e.g., Rabies, DHPP"
            value={newVaccination.vaccine}
            onChange={(e) => setNewVaccination({ ...newVaccination, vaccine: e.target.value })}
          />
          <div>
            <label>Date Administered</label>
            <input
              type="date"
              value={newVaccination.date}
              onChange={(e) => setNewVaccination({ ...newVaccination, date: e.target.value })}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div>
            <label>Next Due Date</label>
            <input
              type="date"
              value={newVaccination.nextDue}
              onChange={(e) => setNewVaccination({ ...newVaccination, nextDue: e.target.value })}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
        </Group>
        <Group grow mt="md">
          <TextInput
            label="Vet"
            placeholder="Veterinarian name"
            value={newVaccination.vet}
            onChange={(e) => setNewVaccination({ ...newVaccination, vet: e.target.value })}
          />
          <TextInput
            label="Batch Number"
            placeholder="Vaccine batch"
            value={newVaccination.batch}
            onChange={(e) => setNewVaccination({ ...newVaccination, batch: e.target.value })}
          />
        </Group>
        <Button mt="md" onClick={handleAddVaccination}>Add Vaccination</Button>
      </Card>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={4} mb="md">Vaccination History</Title>
        <Table>
          <thead>
            <tr>
              <th>Vaccine</th>
              <th>Date</th>
              <th>Next Due</th>
              <th>Vet</th>
              <th>Batch</th>
            </tr>
          </thead>
          <tbody>
            {vaccinations.map((vac) => (
              <tr key={vac.id}>
                <td>{vac.vaccine}</td>
                <td>{vac.date}</td>
                <td>{vac.nextDue}</td>
                <td>{vac.vet}</td>
                <td>{vac.batch}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Stack>
  );
};

export default Vaccinations;