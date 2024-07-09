import {defineConfig} from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'api/index.ts'],
  outDir: './dist',
  shims: true,
})
