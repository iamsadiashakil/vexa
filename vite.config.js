// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
   base: '/vexa_website/',
  plugins: [react()],
  // No need to specify postcss config path if it's in the project root
})
