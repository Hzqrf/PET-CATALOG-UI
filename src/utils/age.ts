export function calculateApproxAge(birthDate?: string) {
  if (!birthDate) return { years: 0, label: 'Unknown' }
  const b = new Date(birthDate)
  const now = new Date()
  let years = now.getFullYear() - b.getFullYear()
  const m = now.getMonth() - b.getMonth()
  if (m < 0 || (m === 0 && now.getDate() < b.getDate())) years--
  return { years, label: years <= 0 ? '<1 year' : `${years} yrs` }
}
