export const formatCurrency = (
  number: string | number,
  decimal?: number,
  sections?: string
): string | number => {
  if (!number) return number

  const c = sections === '.' ? ',' : '.'
  const x = 3
  const re = `\\d(?=(\\d{${x || 3}})+${decimal || 0 > 0 ? '\\D' : '$'})`
  const num = Number(number).toFixed(Math.max(0, decimal || 0))

  return `Rp ${(c ? num.replace('.', c) : num).replace(
    new RegExp(re, 'g'),
    `$&${sections || '.'}`
  )}`
}
