
import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
});