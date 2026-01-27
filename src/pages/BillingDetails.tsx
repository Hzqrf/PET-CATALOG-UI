import React, { useState } from 'react';
import { Card, Stack, Title, Text, Button, Table, Group, TextInput, NumberInput } from '@mantine/core';

interface Bill {
  id: string;
  date: string;
  service: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
  notes: string;
}

const BillingDetails: React.FC = () => {
  const [bills, setBills] = useState<Bill[]>([
    {
      id: '1',
      date: '2024-01-15',
      service: 'Annual Check-up',
      amount: 150.00,
      status: 'Paid',
      notes: 'Routine examination'
    },
    {
      id: '2',
      date: '2024-02-20',
      service: 'Vaccination',
      amount: 85.00,
      status: 'Pending',
      notes: 'Rabies vaccine'
    }
  ]);

  const [newBill, setNewBill] = useState({
    date: '',
    service: '',
    amount: 0,
    status: 'Pending' as 'Paid' | 'Pending' | 'Overdue',
    notes: ''
  });

  const handleAddBill = () => {
    if (newBill.service && newBill.amount > 0) {
      const bill: Bill = {
        id: Date.now().toString(),
        ...newBill
      };
      setBills([...bills, bill]);
      setNewBill({ date: '', service: '', amount: 0, status: 'Pending', notes: '' });
    }
  };

  const totalAmount = bills.reduce((sum, bill) => sum + bill.amount, 0);
  const paidAmount = bills.filter(bill => bill.status === 'Paid').reduce((sum, bill) => sum + bill.amount, 0);

  return (
    <Stack>
      <Title order={2}>Billing Details</Title>

      <Group grow>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4}>Total Billed</Title>
          <Text size="xl" fw={700}>${totalAmount.toFixed(2)}</Text>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4}>Total Paid</Title>
          <Text size="xl" fw={700} color="green">${paidAmount.toFixed(2)}</Text>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4}>Outstanding</Title>
          <Text size="xl" fw={700} color="red">${(totalAmount - paidAmount).toFixed(2)}</Text>
        </Card>
      </Group>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={4} mb="md">Add New Bill</Title>
        <Group grow>
          <div>
            <label>Date</label>
            <input
              type="date"
              value={newBill.date}
              onChange={(e) => setNewBill({ ...newBill, date: e.target.value })}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <TextInput
            label="Service"
            placeholder="e.g., Check-up, Vaccination"
            value={newBill.service}
            onChange={(e) => setNewBill({ ...newBill, service: e.target.value })}
          />
          <NumberInput
            label="Amount ($)"
            placeholder="0.00"
            value={newBill.amount}
            onChange={(value) => setNewBill({ ...newBill, amount: Number(value) || 0 })}
            min={0}
          />
        </Group>
        <Group grow mt="md">
          <TextInput
            label="Status"
            placeholder="Paid, Pending, Overdue"
            value={newBill.status}
            onChange={(e) => setNewBill({ ...newBill, status: e.target.value as 'Paid' | 'Pending' | 'Overdue' })}
          />
          <TextInput
            label="Notes"
            placeholder="Additional notes"
            value={newBill.notes}
            onChange={(e) => setNewBill({ ...newBill, notes: e.target.value })}
          />
        </Group>
        <Button mt="md" onClick={handleAddBill}>Add Bill</Button>
      </Card>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={4} mb="md">Billing History</Title>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <tr key={bill.id}>
                <td>{bill.date}</td>
                <td>{bill.service}</td>
                <td>${bill.amount.toFixed(2)}</td>
                <td>
                  <Text color={bill.status === 'Paid' ? 'green' : bill.status === 'Pending' ? 'orange' : 'red'}>
                    {bill.status}
                  </Text>
                </td>
                <td>{bill.notes}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Stack>
  );
};

export default BillingDetails;