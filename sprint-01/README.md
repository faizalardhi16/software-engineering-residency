# Sprint 01: Utility Library

> Membangun utility functions dari scratch — melatih function design, naming, dan edge case handling.

## 📋 Daftar Function

### Array Utilities (`src/array.ts`)

| Function | Description |
|----------|-------------|
| `groupBy` | Group array items by a key/callback |
| `unique` | Remove duplicate values from array |
| `chunk` | Split array into chunks of given size |
| `flatten` | Flatten nested arrays (single level) |

### String Utilities (`src/string.ts`)

| Function | Description |
|----------|-------------|
| `capitalize` | Capitalize the first character |
| `camelCase` | Convert string to camelCase |
| `snakeCase` | Convert string to snake_case |

### Number Utilities (`src/number.ts`)

| Function | Description |
|----------|-------------|
| `clamp` | Clamp a number within a range |
| `random` | Generate random number in range |

## 🧪 Testing

```bash
npm test                # Run all tests
npm run test:watch      # Watch mode
npm run test:coverage   # Coverage report
```

## 📐 TDD Workflow

1. **RED** — Tulis test (akan fail)
2. **GREEN** — Implementasi minimal (test passing)
3. **REFACTOR** — Bersihkan kode

---

> 📝 Reflection di `Reflection.md` (diisi setelah sprint selesai)
