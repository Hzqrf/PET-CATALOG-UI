import React from 'react';
import { Card, Stack, Title, Text, Group, Badge, Box, Grid } from '@mantine/core';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MdShoppingCart, MdFolder, MdTrendingUp, MdPeople } from 'react-icons/md';

// Mock data for charts
const petStatusData = [
  { status: 'Available', count: 18, fill: '#FFC107' },
  { status: 'Reserved', count: 21, fill: '#9CA3AF' },
  { status: 'Adopted', count: 28, fill: '#1F2937' },
  { status: 'Pending', count: 11, fill: '#D1D5DB' },
];

const leadsData = [
  { date: '1 May', leads: 78 },
  { date: '2 May', leads: 55 },
  { date: '3 May', leads: 42 },
  { date: '4 May', leads: 48 },
  { date: '5 May', leads: 88 },
  { date: '6 May', leads: 65 },
  { date: '7 May', leads: 92 },
  { date: '8 May', leads: 58 },
  { date: '9 May', leads: 72 },
  { date: '10 May', leads: 48 },
  { date: '11 May', leads: 68 },
  { date: '12 May', leads: 85 },
  { date: '13 May', leads: 52 },
  { date: '14 May', leads: 45 },
  { date: '15 May', leads: 62 },
  { date: '16 May', leads: 78 },
  { date: '17 May', leads: 55 },
];

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  subLabel?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, subLabel }) => (
  <Card shadow="sm" padding="lg" radius="md" withBorder>
    <Group justify="space-between" align="flex-start">
      <Box>
        <Text size="sm" fw={500} c="dimmed" mb={8}>
          {label}
        </Text>
        <Title order={3} fw={700}>
          {value}
        </Title>
        {subLabel && (
          <Text size="xs" c="dimmed" mt={4}>
            {subLabel}
          </Text>
        )}
      </Box>
      <Box c="blue" style={{ fontSize: '28px' }}>
        {icon}
      </Box>
    </Group>
  </Card>
);

const Dashboard: React.FC = () => {
  return (
    <Stack gap="lg" p="lg">
      <Title order={2} mb="lg">Dashboard</Title>

      {/* Stats Cards */}
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <StatCard
            icon={<MdShoppingCart />}
            label="TOTAL PETS"
            value="67"
            subLabel="All registered pets"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <StatCard
            icon={<MdFolder />}
            label="ADOPTED"
            value="28"
            subLabel="Successfully placed"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <StatCard
            icon={<MdTrendingUp />}
            label="AVAILABLE"
            value="18"
            subLabel="Ready for adoption"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <StatCard
            icon={<MdPeople />}
            label="ADOPTION RATE"
            value="41%"
            subLabel="This month"
          />
        </Grid.Col>
      </Grid>

      {/* Charts Row */}
      <Grid>
        {/* Pet Status Chart */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
            <Title order={4} mb="md">Pets per Status</Title>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                layout="vertical"
                data={petStatusData}
                margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="status" type="category" width={90} />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>

        {/* Legend */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
            <Title order={4} mb="md">Status Legend</Title>
            <Stack gap="md">
              {petStatusData.map((item) => (
                <Group key={item.status} justify="space-between">
                  <Group gap="xs">
                    <Box
                      w={16}
                      h={16}
                      style={{
                        backgroundColor: item.fill,
                        borderRadius: '4px',
                      }}
                    />
                    <Text fw={500}>{item.status}</Text>
                  </Group>
                  <Badge size="lg" variant="light">
                    {item.count}
                  </Badge>
                </Group>
              ))}
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Total Leads Chart */}
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group justify="space-between" mb="md">
          <Title order={4}>Adoption Inquiries by Day</Title>
          <Group gap="xs">
            <Badge variant="dot" color="yellow">Inquiries</Badge>
          </Group>
        </Group>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={leadsData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              style={{ fontSize: '12px' }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="leads"
              stroke="#1F2937"
              dot={{ fill: '#1F2937', r: 4 }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Stack>
  );
};

export default Dashboard;