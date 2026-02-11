import { Pet } from '../types'

export const mockPets: Pet[] = [
  {
    id: 'p1',
    name: 'Milo',
    species: 'dog',
    breed: 'Beagle',
    birthDate: '2019-06-12',
    avatar: 'https://placedog.net/400/300?id=1',
    notes: ['Loves walks', 'Afraid of thunder'],
    photos: ['https://placedog.net/800/600?id=11', 'https://placedog.net/800/600?id=12'],
    healthRecords: [
      { date: '2024-01-10', note: 'Vaccination update' },
      { date: '2023-07-03', note: 'Dental cleaning' },
    ],
    feedingSchedule: [
      { time: '08:00', food: 'Dry kibble - 1 cup' },
      { time: '18:00', food: 'Wet food - 1 can' },
    ],
    dateAdded: '2025-01-15',
  },
  {
    id: 'p2',
    name: 'Luna',
    species: 'cat',
    breed: 'Siamese',
    birthDate: '2021-11-02',
    avatar: 'https://placekitten.com/400/300',
    notes: ['Indoor cat', 'Prefers slow play'],
    photos: ['https://placekitten.com/800/600', 'https://placekitten.com/801/600'],
    healthRecords: [{ date: '2025-03-12', note: 'Annual checkup' }],
    feedingSchedule: [{ time: '07:30', food: 'Wet food - 70g' }],
    dateAdded: '2025-02-01',
  },
]
