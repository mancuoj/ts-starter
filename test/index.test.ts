import { expect, it } from 'vitest'
import { greet } from '../src'

it('should greet correctly', () => {
  expect(greet('World')).toBe('Hello, World!')
})
