// TODO: Implement after TDD phase
export function groupBy<T>(_items: T[], _key: keyof T | ((item: T) => string)): Record<string, T[]> {
  throw new Error('Not implemented yet — TDD starts here')
}

export function sumBy<T>(_items: T[], _fn: (item: T) => number): number {
  throw new Error('Not implemented yet — TDD starts here')
}

export function sortBy<T>(_items: T[], _key: keyof T | ((item: T) => number | string)): T[] {
  throw new Error('Not implemented yet — TDD starts here')
}

export function uniqBy<T>(_items: T[], _key?: keyof T | ((item: T) => unknown)): T[] {
  throw new Error('Not implemented yet — TDD starts here')
}

export function chunk<T>(_items: T[], _size: number): T[][] {
  throw new Error('Not implemented yet — TDD starts here')
}
