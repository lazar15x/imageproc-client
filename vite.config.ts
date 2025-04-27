import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import stylex from 'vite-plugin-stylex';

const fullPath = (str: string) => path.resolve(__dirname, str);

export default defineConfig({
  //@ts-expect-error stylex plugin has some problems with types
  plugins: [react(), stylex()],
  resolve: {
    alias: {
      '@': fullPath('./src'),
    },
  },
});
