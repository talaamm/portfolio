import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.GH_PAGES_BASE || '/',
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})
