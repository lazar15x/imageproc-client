import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const fullPath = (str: string) => path.resolve(__dirname, str);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fullPath('./src'),
    },
  },
});
