import { describe, it, expect } from 'vitest'
import { deepClone, pick, omit, isEqual } from '../src/object.js'

describe('deepClone', () => {
  it('should clone a plain object', () => {
    const obj = { a: 1, b: 2 }
    const cloned = deepClone(obj)
    expect(cloned).toEqual(obj)
    expect(cloned).not.toBe(obj)
  })

  it('should clone nested objects', () => {
    const obj = { a: { b: { c: 3 } } }
    const cloned = deepClone(obj)
    expect(cloned).toEqual(obj)
    expect(cloned.a.b).not.toBe(obj.a.b)
  })

  it('should clone arrays', () => {
    const arr = [1, [2, [3]]]
    const cloned = deepClone(arr)
    expect(cloned).toEqual(arr)
    expect(cloned[1]).not.toBe(arr[1])
  })

  it('should handle Date objects', () => {
    const obj = { date: new Date('2024-01-01') }
    const cloned = deepClone(obj)
    expect(cloned).toEqual(obj)
    expect(cloned.date).not.toBe(obj.date)
  })

  it('should handle null and undefined', () => {
    expect(deepClone(null)).toBeNull()
    expect(deepClone(undefined)).toBeUndefined()
  })

  it('should handle primitive values', () => {
    expect(deepClone(42)).toBe(42)
    expect(deepClone('hello')).toBe('hello')
    expect(deepClone(true)).toBe(true)
  })
})

describe('pick', () => {
  it('should pick specified keys', () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 })
  })

  it('should return empty object when no keys match', () => {
    expect(pick({ a: 1 }, ['b'])).toEqual({})
  })

  it('should not mutate the original object', () => {
    const obj = { a: 1, b: 2 }
    const copy = { ...obj }
    pick(obj, ['a'])
    expect(obj).toEqual(copy)
  })

  it('should handle empty keys array', () => {
    expect(pick({ a: 1 }, [])).toEqual({})
  })
})

describe('omit', () => {
  it('should omit specified keys', () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 })
  })

  it('should return full object when omitting non-existent keys', () => {
    expect(omit({ a: 1 }, ['b'])).toEqual({ a: 1 })
  })

  it('should not mutate the original object', () => {
    const obj = { a: 1, b: 2 }
    omit(obj, ['b'])
    expect(obj).toEqual({ a: 1, b: 2 })
  })

  it('should handle empty keys array', () => {
    expect(omit({ a: 1 }, [])).toEqual({ a: 1 })
  })
})

describe('isEqual', () => {
  it('should detect equal primitives', () => {
    expect(isEqual(1, 1)).toBe(true)
    expect(isEqual('a', 'a')).toBe(true)
    expect(isEqual(true, true)).toBe(true)
  })

  it('should detect unequal primitives', () => {
    expect(isEqual(1, 2)).toBe(false)
    expect(isEqual('a', 'b')).toBe(false)
  })

  it('should compare nested objects deeply', () => {
    expect(isEqual({ a: { b: 2 } }, { a: { b: 2 } })).toBe(true)
    expect(isEqual({ a: { b: 2 } }, { a: { b: 3 } })).toBe(false)
  })

  it('should compare arrays', () => {
    expect(isEqual([1, [2, 3]], [1, [2, 3]])).toBe(true)
    expect(isEqual([1, 2], [1, 2, 3])).toBe(false)
  })

  it('should handle null and undefined', () => {
    expect(isEqual(null, null)).toBe(true)
    expect(isEqual(undefined, undefined)).toBe(true)
    expect(isEqual(null, undefined)).toBe(false)
  })

  it('should detect different types', () => {
    expect(isEqual(1, '1')).toBe(false)
    expect(isEqual(0, false)).toBe(false)
  })
})
