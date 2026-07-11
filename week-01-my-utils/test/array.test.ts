import { describe, it, expect } from 'vitest'
import { groupBy, sumBy, sortBy, uniqBy, chunk } from '../src/array.js'

describe('groupBy', () => {
  it('should group items by a string key', () => {
    const items = [{ type: 'fruit' }, { type: 'veg' }, { type: 'fruit' }]
    const result = groupBy(items, 'type')
    expect(result).toEqual({
      fruit: [{ type: 'fruit' }, { type: 'fruit' }],
      veg: [{ type: 'veg' }],
    })
  })

  it('should group by a callback function', () => {
    const result = groupBy(['apple', 'apricot', 'banana'], s => s[0])
    expect(result).toEqual({
      a: ['apple', 'apricot'],
      b: ['banana'],
    })
  })

  it('should return empty object for empty array', () => {
    expect(groupBy([], 'key')).toEqual({})
  })

  it('should handle single item', () => {
    expect(groupBy([{ x: 1 }], 'x')).toEqual({ 1: [{ x: 1 }] })
  })
})

describe('sumBy', () => {
  it('should sum numeric values from callback', () => {
    expect(sumBy([{ n: 1 }, { n: 2 }, { n: 3 }], x => x.n)).toBe(6)
  })

  it('should return 0 for empty array', () => {
    expect(sumBy([], x => x)).toBe(0)
  })

  it('should handle negative values', () => {
    expect(sumBy([{ n: -1 }, { n: 5 }, { n: -2 }], x => x.n)).toBe(2)
  })

  it('should handle single item', () => {
    expect(sumBy([{ n: 42 }], x => x.n)).toBe(42)
  })
})

describe('sortBy', () => {
  it('should sort by string key ascending', () => {
    const items = [{ name: 'Charlie' }, { name: 'Alice' }, { name: 'Bob' }]
    const result = sortBy(items, 'name')
    expect(result.map(i => i.name)).toEqual(['Alice', 'Bob', 'Charlie'])
  })

  it('should not mutate the original array', () => {
    const items = [{ n: 3 }, { n: 1 }, { n: 2 }]
    const copy = [...items]
    sortBy(items, 'n')
    expect(items).toEqual(copy)
  })

  it('should return empty array for empty input', () => {
    expect(sortBy([], 'key')).toEqual([])
  })

  it('should handle numbers via callback', () => {
    expect(sortBy([3, 1, 2], n => n)).toEqual([1, 2, 3])
  })
})

describe('uniqBy', () => {
  it('should remove duplicate primitives', () => {
    expect(uniqBy([1, 2, 1, 3, 2])).toEqual([1, 2, 3])
  })

  it('should remove duplicates by key', () => {
    const items = [{ id: 1 }, { id: 2 }, { id: 1 }]
    expect(uniqBy(items, 'id')).toEqual([{ id: 1 }, { id: 2 }])
  })

  it('should return empty array for empty input', () => {
    expect(uniqBy([])).toEqual([])
  })

  it('should handle single item', () => {
    expect(uniqBy([42])).toEqual([42])
  })

  it('should preserve order of first occurrence', () => {
    expect(uniqBy(['b', 'a', 'b', 'c', 'a'])).toEqual(['b', 'a', 'c'])
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
