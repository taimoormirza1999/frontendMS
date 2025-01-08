import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Keep this only if deploying in a root domain
  build: {
    outDir: 'dist', // Vite default output, ensure it matches
  },
});
