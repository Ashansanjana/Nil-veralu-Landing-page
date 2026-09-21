import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Inline (empty) PostCSS config so Vite doesn't pick up a postcss.config.js from a parent folder
  css: { postcss: {} },
});
