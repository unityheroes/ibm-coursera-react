import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: "/ibm-coursera-react/",  
  plugins: [react()],
  server: {
    host: true, 
    port: 6001,  
    open: true,
  },
})