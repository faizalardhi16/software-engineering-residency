// TODO: Implement after TDD phase
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(fn: T, ms: number): (...args: Parameters<T>) => void {
  throw new Error('Not implemented yet — TDD starts here')
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function throttle<T extends (...args: any[]) => any>(fn: T, ms: number): (...args: Parameters<T>) => void {
  throw new Error('Not implemented yet — TDD starts here')
}

export function sleep(ms: number): Promise<void> {
  throw new Error('Not implemented yet — TDD starts here')
}
