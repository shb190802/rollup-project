import babel from 'rollup-plugin-babel'

module.exports = {
  input: 'src/index.js',
  output: [{
    file: 'dist/main.js',
    format: 'umd',
    name: 'main'
  }],
  plugins: [babel({
    exclude: '**/node_modules/**'
  })]
}