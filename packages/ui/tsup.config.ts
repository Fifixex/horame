import {type Options, defineConfig} from 'tsup'

const env = process.env.NODE_ENV

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ['src/**/*.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  minify: env === 'production',
  clean: true,
  ...options,
}))
