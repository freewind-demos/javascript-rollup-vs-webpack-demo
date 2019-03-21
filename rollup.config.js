export default {
  input: 'main.js',
  output: {
    file: 'bundle-rollup.js',
    format: 'cjs',
  },
  external: ['lodash']
}
