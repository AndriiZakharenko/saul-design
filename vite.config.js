import { defineConfig } from 'vite';

export default defineConfig({
  base: '/saul-design/',
  build: {
    outDir: 'dist',
    assetsInclude: ['**/*.woff', '**/*.woff2'],
  },
});
