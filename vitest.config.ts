import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['week-01-my-utils/test/**/*.test.ts'],
  },
})
