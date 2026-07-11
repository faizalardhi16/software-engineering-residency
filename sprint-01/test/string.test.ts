import { describe, it, expect } from 'vitest'
import { capitalize, camelCase, snakeCase } from '../src/string.js'

describe('capitalize', () => {
  it('should capitalize first character', () => {
    expect(capitalize('hello')).toBe('Hello')
  })

  it('should handle single character', () => {
    expect(capitalize('a')).toBe('A')
  })

  it('should handle empty string', () => {
    expect(capitalize('')).toBe('')
  })

  it('should not change already capitalized string', () => {
    expect(capitalize('Hello')).toBe('Hello')
  })

  it('should lowercase the rest of the string', () => {
    expect(capitalize('hELLO')).toBe('Hello')
  })
})

describe('camelCase', () => {
  it('should convert space-separated words', () => {
    expect(camelCase('hello world')).toBe('helloWorld')
  })

  it('should convert kebab-case', () => {
    expect(camelCase('hello-world')).toBe('helloWorld')
  })

  it('should convert snake_case', () => {
    expect(camelCase('hello_world')).toBe('helloWorld')
  })

  it('should handle single word', () => {
    expect(camelCase('hello')).toBe('hello')
  })

  it('should handle empty string', () => {
    expect(camelCase('')).toBe('')
  })
})

describe('snakeCase', () => {
  it('should convert space-separated words', () => {
    expect(snakeCase('hello world')).toBe('hello_world')
  })

  it('should convert camelCase', () => {
    expect(snakeCase('helloWorld')).toBe('hello_world')
  })

  it('should convert kebab-case', () => {
    expect(snakeCase('hello-world')).toBe('hello_world')
  })

  it('should handle single word', () => {
    expect(snakeCase('hello')).toBe('hello')
  })

  it('should handle empty string', () => {
    expect(snakeCase('')).toBe('')
  })
})
