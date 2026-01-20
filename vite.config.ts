import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use root base path so assets (including PDFs in /public) resolve correctly in production
  base: '/',
});
