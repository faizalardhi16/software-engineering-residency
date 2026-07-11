# 📦 Week 01: my-utils

> A collection of utility functions built from scratch in TypeScript — learning by implementing what lodash does.

## 🎯 Tujuan

- Memperdalam **TypeScript** (generics, type inference, utility types)
- **Test-Driven Development** habit
- **Functional programming** mindset (immutability, pure functions)
- Dokumentasi sebagai **first-class citizen**

## 📂 Struktur

```
week-01-my-utils/
├── README.md
├── Reflection.md
├── src/
│   ├── index.ts          # barrel export
│   ├── array.ts          # groupBy, sumBy, sortBy, uniqBy, chunk
│   ├── object.ts         # deepClone, pick, omit, isEqual
│   └── function.ts       # debounce, throttle, sleep
├── test/
│   ├── array.test.ts
│   ├── object.test.ts
│   └── function.test.ts
└── docs/
    └── API.md
```

## 📋 Daftar Function

### Array Utilities (`src/array.ts`)

#### `groupBy<T>(items: T[], key: keyof T | ((item: T) => string)): Record<string, T[]>`
Mengelompokkan array berdasarkan key atau callback.

```ts
groupBy(['apple', 'apricot', 'banana'], s => s[0])
// → { a: ['apple', 'apricot'], b: ['banana'] }
```

#### `sumBy<T>(items: T[], fn: (item: T) => number): number`
Menjumlahkan nilai numerik dari setiap item.

```ts
sumBy([{ n: 1 }, { n: 2 }, { n: 3 }], x => x.n)
// → 6
```

#### `sortBy<T>(items: T[], key: keyof T | ((item: T) => number | string)): T[]`
Mengurutkan array berdasarkan key atau comparator.

```ts
sortBy([{ name: 'Charlie' }, { name: 'Alice' }], 'name')
// → [{ name: 'Alice' }, { name: 'Charlie' }]
```

#### `uniqBy<T>(items: T[], key: keyof T | ((item: T) => unknown)): T[]`
Menghapus duplikat berdasarkan key.

```ts
uniqBy([1, 2, 1, 3, 2])
// → [1, 2, 3]
```

#### `chunk<T>(items: T[], size: number): T[][]`
Membagi array menjadi potongan-potongan kecil.

```ts
chunk([1, 2, 3, 4, 5], 2)
// → [[1, 2], [3, 4], [5]]
```

### Object Utilities (`src/object.ts`)

#### `deepClone<T>(obj: T): T`
Deep clone object/array (handle nested, Date, Map, Set, RegExp).

```ts
deepClone({ a: 1, b: { c: 2 } })
// → { a: 1, b: { c: 2 } } (reference berbeda)
```

#### `pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>`
Memilih keys tertentu dari object.

```ts
pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])
// → { a: 1, c: 3 }
```

#### `omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>`
Menghapus keys tertentu dari object.

```ts
omit({ a: 1, b: 2, c: 3 }, ['b'])
// → { a: 1, c: 3 }
```

#### `isEqual<T>(a: T, b: T): boolean`
Deep equality check untuk dua nilai.

```ts
isEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })
// → true
```

### Function Utilities (`src/function.ts`)

#### `debounce<T extends (...args: any[]) => any>(fn: T, ms: number): (...args: Parameters<T>) => void`
Membatasi eksekusi function sampai jeda tertentu setelah pemanggilan terakhir.

```ts
const log = debounce(console.log, 100)
log('hello') // tidak langsung jalan
log('world') // hanya 'world' yang kepanggil setelah 100ms
```

#### `throttle<T extends (...args: any[]) => any>(fn: T, ms: number): (...args: Parameters<T>) => void`
Membatasi eksekusi function maksimal sekali per interval.

```ts
const log = throttle(console.log, 200)
log('a') // jalan
log('b') // di-skip (belum 200ms)
```

#### `sleep(ms: number): Promise<void>`
Promise-based delay.

```ts
await sleep(1000)
// pause 1 detik
```

## 🧪 Testing

```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

## 📐 TDD Workflow

1. Tulis **test** dulu (akan fail — RED)
2. Implementasi **minimal** (test passing — GREEN)
3. **Refactor** code (bikin bersih — REFACTOR)

> *"Test-first is not about testing. It's about design."*
