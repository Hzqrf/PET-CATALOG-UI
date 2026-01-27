import React from 'react';
import { Card, Stack, Title, Text, Button, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Stack>
      <Title order={2}>Pet Catalog Dashboard</Title>

      <Group grow>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4}>Pet List</Title>
          <Text size="sm" color="dimmed">
            View and manage your pets
          </Text>
          <Button mt="md" onClick={() => navigate('/pet-list')}>
            Go to Pet List
          </Button>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4}>Tools Dashboard</Title>
          <Text size="sm" color="dimmed">
            Access pet care tools and calculators
          </Text>
          <Button mt="md" onClick={() => navigate('/tools-dashboard')}>
            Go to Tools
          </Button>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4}>Pet Profile</Title>
          <Text size="sm" color="dimmed">
            View detailed pet information
          </Text>
          <Button mt="md" onClick={() => navigate('/pet-profile')}>
            View Profile
          </Button>
        </Card>
      </Group>

      <Group grow>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4}>Appointments</Title>
          <Text size="sm" color="dimmed">
            Schedule and manage vet appointments
          </Text>
          <Button mt="md" onClick={() => navigate('/appointments')}>
            Manage Appointments
          </Button>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4}>Vaccinations</Title>
          <Text size="sm" color="dimmed">
            Track vaccination history and schedules
          </Text>
          <Button mt="md" onClick={() => navigate('/vaccinations')}>
            View Vaccinations
          </Button>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4}>Billing Details</Title>
          <Text size="sm" color="dimmed">
            View bills, payments, and expenses
          </Text>
          <Button mt="md" onClick={() => navigate('/billing-details')}>
            View Billing
          </Button>
        </Card>
      </Group>

      <Group grow>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4}>Reports</Title>
          <Text size="sm" color="dimmed">
            Generate and view pet care reports
          </Text>
          <Button mt="md" onClick={() => navigate('/reports')}>
            Generate Reports
          </Button>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4}>Life Management</Title>
          <Text size="sm" color="dimmed">
            Health records and life tracking
          </Text>
          <Button mt="md" onClick={() => navigate('/life-management')}>
            Life Management
          </Button>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4}>Media Memory</Title>
          <Text size="sm" color="dimmed">
            Photos and memories of your pet
          </Text>
          <Button mt="md" onClick={() => navigate('/media-memory')}>
            View Media
          </Button>
        </Card>
      </Group>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={4}>Quick Stats</Title>
        <Text size="sm">
          Total Pets: 5 | Active Reminders: 2 | Upcoming Checkups: 1
        </Text>
      </Card>
    </Stack>
  );
};

export default Dashboard;