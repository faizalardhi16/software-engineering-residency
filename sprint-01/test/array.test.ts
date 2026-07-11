import { describe, it, expect } from 'vitest'
import { groupBy, unique, chunk, flatten } from '../src/array.js'

describe('groupBy', () => {
  it('should group items by a string key', () => {
    const items = [{ type: 'fruit' }, { type: 'veg' }, { type: 'fruit' }]
    expect(groupBy(items, 'type')).toEqual({
      fruit: [{ type: 'fruit' }, { type: 'fruit' }],
      veg: [{ type: 'veg' }],
    })
  })

  it('should group by a callback function', () => {
    expect(groupBy(['apple', 'apricot', 'banana'], s => s[0])).toEqual({
      a: ['apple', 'apricot'],
      b: ['banana'],
    })
  })

  it('should return empty object for empty array', () => {
    expect(groupBy([], 'key' as never)).toEqual({})
  })
})

describe('unique', () => {
  it('should remove duplicate primitives', () => {
    expect(unique([1, 2, 1, 3, 2])).toEqual([1, 2, 3])
  })

  it('should return empty array for empty input', () => {
    expect(unique([])).toEqual([])
  })

  it('should preserve order of first occurrence', () => {
    expect(unique(['b', 'a', 'b', 'c', 'a'])).toEqual(['b', 'a', 'c'])
  })

  it('should handle single item', () => {
    expect(unique([42])).toEqual([42])
  })

  it('should handle strings', () => {
    expect(unique(['apple', 'banana', 'apple'])).toEqual(['apple', 'banana'])
  })
})

describe('chunk', () => {
  it('should split array into chunks of given size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
  })

  it('should return full array as single chunk if size >= length', () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]])
  })

  it('should return empty array for empty input', () => {
    expect(chunk([], 2)).toEqual([])
  })

  it('should handle exact division', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]])
  })

  it('should throw on invalid size', () => {
    expect(() => chunk([1, 2], 0)).toThrow()
    expect(() => chunk([1, 2], -1)).toThrow()
  })
})

describe('flatten', () => {
  it('should flatten nested arrays one level deep', () => {
    expect(flatten([1, [2, 3], [4]])).toEqual([1, 2, 3, 4])
  })

  it('should return same array if already flat', () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3])
  })

  it('should return empty array for empty input', () => {
    expect(flatten([])).toEqual([])
  })

  it('should handle mixed content', () => {
    expect(flatten([[1], 2, [3, 4], 5])).toEqual([1, 2, 3, 4, 5])
  })
})
