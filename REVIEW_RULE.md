# 📋 Review Rule

## Code Review Checklist

### Functionality
- [ ] Apakah function mengerjakan satu hal dengan benar?
- [ ] Edge cases sudah di-handle? (empty array, null, undefined, NaN)
- [ ] Tipe data return sesuai ekspektasi?
- [ ] Immutable? (tidak memutasi input)

### Testing
- [ ] Setiap function punya minimal 3 test case:
  - Happy path (normal case)
  - Edge case (empty, extreme values)
  - Error case (invalid input)
- [ ] Nama test deskriptif (should ... when ...)
- [ ] Coverage minimal 90%

### Code Quality
- [ ] TypeScript strict — no `any` (kecuali terpaksa)
- [ ] Naming jelas, tanpa singkatan cryptic
- [ ] No console.log di production code
- [ ] JSDoc untuk public API

### Dokumentasi
- [ ] Function didokumentasikan di README
- [ ] Contoh usage disertakan
- [ ] Complex logic ada comment inline

## Scoring System
Setiap PR akan dinilai:
- **Correctness** (40%) — semua test passing
- **Code Quality** (25%) — clean, typed, well-structured
- **Test Coverage** (20%) — minimal 90%
- **Documentation** (15%) — README, JSDoc, examples

Nilai akhir: **A** (≥90) | **B** (75-89) | **C** (60-74) | **D** (<60)
