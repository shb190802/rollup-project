import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

module.exports = {
	input: 'src/index.js',
	output: [{
		file: 'dist/main.js',
		format: 'umd',
		name: 'main'
	}, {
		file: 'dist/main.esm.js',
		format: 'esm'
	}],
	plugins: [babel({
		exclude: '**/node_modules/**'
	}), terser()]
}