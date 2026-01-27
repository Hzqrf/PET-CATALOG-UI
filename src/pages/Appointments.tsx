import React, { useState } from 'react';
import { Card, Stack, Title, Text, Button, Table, Group, TextInput } from '@mantine/core';

interface Appointment {
  id: string;
  date: string;
  time: string;
  type: string;
  vet: string;
  notes: string;
}

const Appointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: '1',
      date: '2024-02-15',
      time: '10:00 AM',
      type: 'Check-up',
      vet: 'Dr. Smith',
      notes: 'Annual check-up'
    },
    {
      id: '2',
      date: '2024-03-20',
      time: '2:00 PM',
      type: 'Vaccination',
      vet: 'Dr. Johnson',
      notes: 'Rabies vaccine'
    }
  ]);

  const [newAppointment, setNewAppointment] = useState({
    date: '',
    time: '',
    type: '',
    vet: '',
    notes: ''
  });

  const handleAddAppointment = () => {
    if (newAppointment.date && newAppointment.type) {
      const appointment: Appointment = {
        id: Date.now().toString(),
        ...newAppointment
      };
      setAppointments([...appointments, appointment]);
      setNewAppointment({ date: '', time: '', type: '', vet: '', notes: '' });
    }
  };

  return (
    <Stack>
      <Title order={2}>Appointments</Title>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={4} mb="md">Schedule New Appointment</Title>
        <Group grow>
          <div>
            <label>Date</label>
            <input
              type="date"
              value={newAppointment.date}
              onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <TextInput
            label="Time"
            placeholder="e.g., 10:00 AM"
            value={newAppointment.time}
            onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
          />
          <TextInput
            label="Type"
            placeholder="Check-up, Vaccination, etc."
            value={newAppointment.type}
            onChange={(e) => setNewAppointment({ ...newAppointment, type: e.target.value })}
          />
          <TextInput
            label="Vet"
            placeholder="Veterinarian name"
            value={newAppointment.vet}
            onChange={(e) => setNewAppointment({ ...newAppointment, vet: e.target.value })}
          />
        </Group>
        <TextInput
          label="Notes"
          placeholder="Additional notes"
          value={newAppointment.notes}
          onChange={(e) => setNewAppointment({ ...newAppointment, notes: e.target.value })}
          mt="md"
        />
        <Button mt="md" onClick={handleAddAppointment}>Add Appointment</Button>
      </Card>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={4} mb="md">Upcoming Appointments</Title>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Type</th>
              <th>Vet</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id}>
                <td>{appt.date}</td>
                <td>{appt.time}</td>
                <td>{appt.type}</td>
                <td>{appt.vet}</td>
                <td>{appt.notes}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Stack>
  );
};

export default Appointments;