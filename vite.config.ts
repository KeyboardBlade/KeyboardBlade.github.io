import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/KeyboardBlade.github.io/', // Must start and end with a forward slash
  plugins: [react()],
})
