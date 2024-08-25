import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), 'vite-plugin-react-svg'],
  plugins: [react()], 
  esbuild: {
    jsxInject: `import React from 'react'`,  // Automatically import React where JSX is used
    loader: 'jsx',  // Ensure the ESBuild loader knows to handle JSX syntax
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
