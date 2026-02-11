import React, { useState } from 'react'
import { Card, Image, Text, Stack, Badge, Group, ActionIcon, Box, Grid, Modal, TextInput, NumberInput, Textarea, Select, Button, Title } from '@mantine/core'
import { Pet } from '../types'
import { IoIosAdd } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'

type Props = {
  pets: Pet[]
  selectedId?: string | null
  onSelect: (p: Pet) => void
  onDelete: (id: string) => void
  onAdd: (payload: { name: string; species: string; age?: number; description?: string; images?: string[] }) => Promise<any>
}

export default function PetList({ pets, onSelect, selectedId, onDelete, onAdd }: Props) {
  const [addOpened, setAddOpened] = useState(false);
  const [name, setName] = useState('');
  const [species, setSpecies] = useState<'cat'|'dog'|'other' | string>('cat');
  const [age, setAge] = useState<number | undefined>(undefined);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  const [deleteOpened, setDeleteOpened] = useState(false);
  const [petToDelete, setPetToDelete] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  console.log("PetList component received pets:", pets);
  console.log("PetList selectedId:", selectedId);
  
  if (pets.length === 0) {
    return <div>No pets available</div>;
  }

  return (
    <Stack>
      <Title order={2}>Pets</Title>
      <ActionIcon variant="filled" aria-label="Add Pet" size="xl" w={150}  onClick={() => setAddOpened(true)}>Add Pet<IoIosAdd /></ActionIcon>
      <Modal opened={addOpened} onClose={() => setAddOpened(false)} title="Add Pet">
        <Stack>
          <TextInput label="Name" value={name} onChange={(e) => setName(e.currentTarget.value)} required />
          <Select label="Species" data={[{ value: 'dog', label: 'Dog' }, { value: 'cat', label: 'Cat' }, { value: 'other', label: 'Other' }]} value={species} onChange={(v) => setSpecies(v || 'other')} />
          <NumberInput label="Age" value={age} onChange={(v: number | string | undefined) => setAge(typeof v === 'number' ? v : v ? Number(v) : undefined)} min={0} />
          <Textarea label="Description" value={description} onChange={(e) => setDescription(e.currentTarget.value)} />
          <TextInput label="Image URL" placeholder="https://...jpg" value={imageUrl} onChange={(e) => setImageUrl(e.currentTarget.value)} />
          <Group style={{ justifyContent: 'flex-end' }}>
            <Button variant="default" onClick={() => setAddOpened(false)}>Cancel</Button>
            <Button loading={submitting} onClick={async () => {
              setSubmitting(true);
              try {
                const payload: any = { name, species, age, description };
                if (imageUrl) payload.images = [imageUrl];
                await onAdd(payload);
                // reset
                setName(''); setSpecies('cat'); setAge(undefined); setDescription(''); setImageUrl('');
                setAddOpened(false);
              } catch (err) {
                // error handled in parent; optionally show
              } finally {
                setSubmitting(false);
              }
            }}>Add</Button>
          </Group>
        </Stack>
      </Modal>
      <Modal opened={deleteOpened} onClose={() => setDeleteOpened(false)} title="Confirm Delete">
        <Stack>
          <Text>Are you sure you want to delete this pet? This action cannot be undone.</Text>
          <Group style={{ justifyContent: 'flex-end' }}>
            <Button variant="default" onClick={() => setDeleteOpened(false)}>Cancel</Button>
            <Button color="red" loading={deleting} onClick={async () => {
              setDeleting(true);
              try {
                if (petToDelete) {
                  await onDelete(petToDelete);
                  setDeleteOpened(false);
                  setPetToDelete(null);
                }
              } catch (err) {
                console.error('Delete error:', err);
              } finally {
                setDeleting(false);
              }
            }}>Delete</Button>
          </Group>
        </Stack>
      </Modal>
      <Grid gutter="lg">
      {pets.map((p) => {
        console.log("Rendering pet card for:", p.name, "with id:", p.id, "avatar:", p.avatar);
        return (
          <Grid.Col key={p.id} span={4}>
          <Card shadow={p.id === selectedId ? 'md' : 'sm'} withBorder className="pet-card" onClick={() => onSelect(p)}>
            <Stack gap="xs">
              {p.avatar && (
                <Box style={{ width: 180, height: 180, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <Image src={p.avatar} alt={p.name} height={180} width={180} fit="cover" radius="md" />
                </Box>
              )}
              <Group align="center" justify="space-between">
                  <Text fw={700}>{p.name}</Text>
                <ActionIcon
                  color="red"
                  variant="light"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPetToDelete(String(p.id));
                    setDeleteOpened(true);
                  }}
                  aria-label={`Delete ${p.name}`}
                >
                  <MdDelete />
                </ActionIcon>
              </Group>
              <Group justify="space-between">
                <Text size="sm" color="dimmed">{p.breed ?? p.species}</Text>
                {p.age && <Badge size="sm">{p.age} years old</Badge>}
              </Group>
              {p.description && <Text size="sm">{p.description}</Text>}
              {p.dateAdded && <Text size="xs" color="dimmed">Added: {new Date(p.dateAdded).toLocaleDateString()}</Text>}
            </Stack>
          </Card>
          </Grid.Col>
        );
      })}
      </Grid>
    </Stack>
  )
}
