import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Generate timestamp for versioned builds
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
const buildDir = `dist-${timestamp}`;

// Vite configuration for Burial Application
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: buildDir,
  }
});
