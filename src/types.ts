export type Pet = {
  id: string | number
  name: string
  species: 'dog' | 'cat' | 'other'
  breed?: string
  birthDate?: string
  avatar?: string
  notes?: string[]
  photos?: string[]
  healthRecords?: Array<{ date: string; note: string }>
  feedingSchedule?: Array<{ time: string; food: string }>
  age?: number
  description?: string
  images?: string[]
  dateAdded?: string
}
