// TODO: Implement after TDD phase
export function deepClone<T>(obj: T): T {
  throw new Error('Not implemented yet — TDD starts here')
}

export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  throw new Error('Not implemented yet — TDD starts here')
}

export function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  throw new Error('Not implemented yet — TDD starts here')
}

export function isEqual<T>(a: T, b: T): boolean {
  throw new Error('Not implemented yet — TDD starts here')
}
