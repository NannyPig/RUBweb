import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/RUBweb/',  // Zorg ervoor dat dit overeenkomt met je GitHub Pages submap
  plugins: [react(), tailwindcss()],
})
