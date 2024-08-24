import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), 'vite-plugin-react-svg'],
  plugins: [react()], 
  base: '/react-vite/',
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
