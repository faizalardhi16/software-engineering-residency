# 🏗️ Software Engineering Residency

> A structured self-paced journey to master software engineering fundamentals — from utility functions to design patterns, SOLID principles, and beyond.

## 🎯 Tujuan

Proyek ini adalah **residency program pribadi** untuk membangun fondasi software engineering yang kokoh melalui praktik langsung, meliputi:

- Penguasaan **JavaScript/TypeScript** fundamental
- **Test-Driven Development (TDD)** sebagai habit
- **SOLID Principles** dan **Design Patterns**
- **Clean Architecture** & **Code Organization**
- **Code Review** & **Refactoring** skills
- Dokumentasi sebagai first-class citizen

## 📁 Struktur Folder

```
software-engineering-residency/
├── README.md
├── ROADMAP.md            # Rencana perjalanan belajar
├── REVIEW_RULE.md        # Aturan code review
├── SCOREBOARD.md         # Progress tracker
│
├── week-01-my-utils/     # Utility functions library
│   ├── README.md
│   ├── Reflection.md
│   ├── src/
│   ├── test/
│   └── docs/
│
├── assets/               # Diagram, screenshots, etc.
└── ...
```

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Build (TypeScript → JavaScript)
npm run build

# Run tests
npm test

# Run in development mode
npm run dev
```

## 🧪 Cara Testing

Proyek ini menggunakan **Vitest** sebagai test runner.

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📦 Daftar Function (Week 01: my-utils)

| Function | Description |
|----------|-------------|
| `groupBy` | Group array items by a key/callback |
| `sumBy` | Sum array items by a numeric key |
| `sortBy` | Sort array items by a key |
| `uniqBy` | Remove duplicates by a key |
| `chunk` | Split array into chunks |
| `deepClone` | Deep clone an object/array |
| `pick` | Pick specific keys from an object |
| `omit` | Omit specific keys from an object |
| `isEqual` | Deep equality check |
| `debounce` | Debounce a function |
| `throttle` | Throttle a function |
| `sleep` | Promise-based delay |

> 📝 Daftar akan bertambah seiring progres residensi.

---

> *"Documentation is a love letter to your future self."*
