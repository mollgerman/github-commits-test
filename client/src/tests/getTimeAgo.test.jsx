import { expect, test } from 'vitest'
import '@testing-library/jest-dom'
import { getTimeAgo } from '../scripts/getTimeAgo.jsx'

test('get time ago', () => {
  const date = new Date
  date.setFullYear(date.getFullYear() - 1)
  expect(getTimeAgo(date)).toBe('Last year')
})