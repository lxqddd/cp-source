import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  target: 'node16',
  outDir: 'dist'
})