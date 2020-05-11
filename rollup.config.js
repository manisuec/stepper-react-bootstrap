import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    sass({ insert: true }),
    typescript(),
    serve('dist'),
    livereload('dist')
  ],
  external: ['react', 'react-dom']
};
