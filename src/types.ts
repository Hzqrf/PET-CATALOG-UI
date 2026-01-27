export type Pet = {
  id: string
  name: string
  species: 'dog' | 'cat' | 'other'
  breed?: string
  birthDate?: string
  avatar?: string
  notes?: string[]
  photos?: string[]
  healthRecords?: Array<{ date: string; note: string }>
  feedingSchedule?: Array<{ time: string; food: string }>
}
