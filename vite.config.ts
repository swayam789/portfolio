import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'portfolio_website_setup_qtrgew' with your actual repo name
export default defineConfig({
  base: '/portfolio/',  // GitHub repo name as base path
  plugins: [react()],
})
