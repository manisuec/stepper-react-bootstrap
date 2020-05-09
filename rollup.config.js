import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  entry: 'src/index.tsx',
  dest: 'dist/index.js',
  plugins: [
    sass({ insert: true }),
    typescript(),
    serve('dist'),
    livereload('dist')
  ],
  external: ['react', 'react-dom']
}
