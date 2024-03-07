import { describe, expect, it } from 'vitest'
import { one } from '../src'

describe('should', () => {
  it('export', () => {
    expect(one).toEqual(1)
  })
})
