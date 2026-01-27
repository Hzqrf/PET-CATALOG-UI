import React, { useState } from 'react';
import { Card, Stack, Title, Text, Button, Table, Group, Select, TextInput } from '@mantine/core';

interface Report {
  id: string;
  type: string;
  dateGenerated: string;
  period: string;
  summary: string;
}

const Reports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([
    {
      id: '1',
      type: 'Health Summary',
      dateGenerated: '2024-01-15',
      period: '2023',
      summary: 'Annual health overview for all pets'
    },
    {
      id: '2',
      type: 'Expense Report',
      dateGenerated: '2024-02-01',
      period: 'January 2024',
      summary: 'Monthly expense breakdown'
    }
  ]);

  const [newReport, setNewReport] = useState({
    type: '',
    period: '',
    startDate: '',
    endDate: ''
  });

  const handleGenerateReport = () => {
    if (newReport.type && newReport.period) {
      const report: Report = {
        id: Date.now().toString(),
        type: newReport.type,
        dateGenerated: new Date().toISOString().split('T')[0],
        period: newReport.period,
        summary: `${newReport.type} report for ${newReport.period}`
      };
      setReports([...reports, report]);
      setNewReport({ type: '', period: '', startDate: '', endDate: '' });
    }
  };

  return (
    <Stack>
      <Title order={2}>Reports</Title>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={4} mb="md">Generate New Report</Title>
        <Group grow>
          <Select
            label="Report Type"
            placeholder="Select type"
            data={[
              { value: 'Health Summary', label: 'Health Summary' },
              { value: 'Expense Report', label: 'Expense Report' },
              { value: 'Vaccination History', label: 'Vaccination History' },
              { value: 'Appointment Summary', label: 'Appointment Summary' }
            ]}
            value={newReport.type}
            onChange={(value) => setNewReport({ ...newReport, type: value || '' })}
          />
          <TextInput
            label="Period"
            placeholder="e.g., January 2024, 2023"
            value={newReport.period}
            onChange={(e) => setNewReport({ ...newReport, period: e.target.value })}
          />
        </Group>
        <Group grow mt="md">
          <div>
            <label>Start Date</label>
            <input
              type="date"
              value={newReport.startDate}
              onChange={(e) => setNewReport({ ...newReport, startDate: e.target.value })}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              type="date"
              value={newReport.endDate}
              onChange={(e) => setNewReport({ ...newReport, endDate: e.target.value })}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
        </Group>
        <Button mt="md" onClick={handleGenerateReport}>Generate Report</Button>
      </Card>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={4} mb="md">Generated Reports</Title>
        <Table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Date Generated</th>
              <th>Period</th>
              <th>Summary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.type}</td>
                <td>{report.dateGenerated}</td>
                <td>{report.period}</td>
                <td>{report.summary}</td>
                <td>
                  <Button size="xs" variant="outline">View</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={4} mb="md">Quick Stats</Title>
        <Group grow>
          <div>
            <Text fw={700}>Total Reports</Text>
            <Text size="xl">{reports.length}</Text>
          </div>
          <div>
            <Text fw={700}>Health Reports</Text>
            <Text size="xl">{reports.filter(r => r.type === 'Health Summary').length}</Text>
          </div>
          <div>
            <Text fw={700}>Expense Reports</Text>
            <Text size="xl">{reports.filter(r => r.type === 'Expense Report').length}</Text>
          </div>
        </Group>
      </Card>
    </Stack>
  );
};

export default Reports;