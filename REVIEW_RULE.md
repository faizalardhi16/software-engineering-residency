# 📋 REVIEW RULE

## Code Review Checklist

### Functionality
- [ ] Apakah function mengerjakan satu hal dengan benar?
- [ ] Edge cases sudah di-handle? (empty, null, undefined, boundary)
- [ ] Tipe data return sesuai ekspektasi?
- [ ] Immutable? (tidak memutasi input)

### Testing
- [ ] Setiap function punya minimal 3 test case:
  - Happy path (normal case)
  - Edge case (empty, extreme values)
  - Error case (invalid input)
- [ ] Nama test deskriptif (`should ... when ...`)
- [ ] Coverage minimal 80%

### Code Quality
- [ ] TypeScript strict — no `any`
- [ ] Naming jelas, tanpa singkatan cryptic
- [ ] No `console.log` di production code
- [ ] JSDoc untuk public API
- [ ] SRP/DRY/KISS/YAGNI dipertimbangkan

### Dokumentasi
- [ ] Function didokumentasikan di README
- [ ] Contoh usage disertakan
- [ ] Complex logic ada comment inline
- [ ] Reflection.md diisi

## Review Rubric

| Category | Weight |
|-----------|-------:|
| Logic | 30% |
| Clean Code | 20% |
| SOLID | 20% |
| Maintainability | 15% |
| Performance | 10% |
| Testing | 5% |
| **Total** | **100%** |

**Passing Score:** 80/100

**Grade:** A (≥90) | B (80-89) | C (70-79) | D (<70)
