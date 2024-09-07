import { defineWorkspace } from 'vitest/config';

// defineWorkspace provides a nice type hinting DX
export default defineWorkspace([
  'vreact-app/*',
  {
    // add "extends" to merge two configs together
    extends: './vite.config.ts',
    test: {
      include: [
        'src/**/*.test.{ts,tsx,js,jsx}',
        'tests/**/*.test.{ts,tsx,js,jsx}',
      ],
      name: 'unit',
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./vitest.setup.ts'],
      alias: {
        '@/': new URL('./src/', import.meta.url).pathname,
      },
    },
  },
]);
