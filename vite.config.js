import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  // base: '/dp/',
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      '0e3d-103-240-76-70.ngrok-free.app'
    ],
  },
})
