import { describe, it, expect, vi } from 'vitest'
import { debounce, throttle, sleep } from '../src/function.js'

describe('debounce', () => {
  it('should delay function execution', async () => {
    vi.useFakeTimers()
    const fn = vi.fn()
    const debounced = debounce(fn, 100)

    debounced()
    expect(fn).not.toHaveBeenCalled()

    vi.advanceTimersByTime(100)
    expect(fn).toHaveBeenCalledTimes(1)

    vi.useRealTimers()
  })

  it('should cancel previous calls', () => {
    vi.useFakeTimers()
    const fn = vi.fn()
    const debounced = debounce(fn, 100)

    debounced()
    debounced()
    debounced()

    vi.advanceTimersByTime(100)
    expect(fn).toHaveBeenCalledTimes(1)

    vi.useRealTimers()
  })

  it('should pass arguments to the original function', () => {
    vi.useFakeTimers()
    const fn = vi.fn()
    const debounced = debounce(fn, 100)

    debounced('hello', 42)
    vi.advanceTimersByTime(100)

    expect(fn).toHaveBeenCalledWith('hello', 42)
    vi.useRealTimers()
  })
})

describe('throttle', () => {
  it('should call function immediately on first call', () => {
    vi.useFakeTimers()
    const fn = vi.fn()
    const throttled = throttle(fn, 200)

    throttled()
    expect(fn).toHaveBeenCalledTimes(1)

    vi.useRealTimers()
  })

  it('should skip calls within the throttle window', () => {
    vi.useFakeTimers()
    const fn = vi.fn()
    const throttled = throttle(fn, 200)

    throttled()
    throttled()
    throttled()

    expect(fn).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(200)
    expect(fn).toHaveBeenCalledTimes(2)

    vi.useRealTimers()
  })

  it('should pass arguments to the original function', () => {
    vi.useFakeTimers()
    const fn = vi.fn()
    const throttled = throttle(fn, 200)

    throttled('test')
    expect(fn).toHaveBeenCalledWith('test')

    vi.useRealTimers()
  })
})

describe('sleep', () => {
  it('should resolve after specified time', async () => {
    vi.useFakeTimers()
    const promise = sleep(100)

    vi.advanceTimersByTime(100)
    await expect(promise).resolves.toBeUndefined()

    vi.useRealTimers()
  })

  it('should work with 0ms', async () => {
    // Just verify it resolves
    await expect(sleep(0)).resolves.toBeUndefined()
  })
})
