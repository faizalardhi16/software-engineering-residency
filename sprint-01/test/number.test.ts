import { describe, it, expect } from 'vitest'
import { clamp } from '../src/number.js'

describe('clamp', () => {
  it('should clamp value within range', () => {
    expect(clamp(5, 0, 10)).toBe(5)
    expect(clamp(-5, 0, 10)).toBe(0)
    expect(clamp(15, 0, 10)).toBe(10)
  })

  it('should handle when min equals max', () => {
    expect(clamp(5, 3, 3)).toBe(3)
  })

  it('should handle floating point numbers', () => {
    expect(clamp(1.5, 0, 1)).toBe(1)
    expect(clamp(0.5, 0, 1)).toBe(0.5)
  })
})

describe('random', () => {
  it('should return a number within range', () => {
    const result = random(1, 10)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(10)
  })

  it('should return an integer', () => {
    const result = random(1, 10)
    expect(Number.isInteger(result)).toBe(true)
  })

  it('should return min when min equals max', () => {
    expect(random(5, 5)).toBe(5)
  })

  it('should handle negative ranges', () => {
    const result = random(-5, 0)
    expect(result).toBeGreaterThanOrEqual(-5)
    expect(result).toBeLessThanOrEqual(0)
  })
})
