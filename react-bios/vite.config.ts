import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/RUBweb/',  // Voeg dit toe om ervoor te zorgen dat de paden correct zijn
  plugins: [react(), tailwindcss()],
})
