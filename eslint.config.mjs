import { defineConfig, globalIgnores } from 'eslint/config';
import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier';

const eslintConfig = defineConfig([
  next,

  // disables conflicting ESLint formatting rules
  prettier,

  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'node_modules/**']),
]);

export default eslintConfig;
