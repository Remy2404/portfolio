import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react': 'react',
    }
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  }
})
