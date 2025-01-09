import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vercel deployment base path
export default defineConfig({
  plugins: [react()],
  base: '/interactiveRatingCard/', // Make sure this matches your project structure
});
