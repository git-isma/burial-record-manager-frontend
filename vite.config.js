import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for Burial Record Manager
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  }
});
