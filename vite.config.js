import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
        {
            // this is required for the SCSS modules
            find: /^~(.*)$/,
            replacement: '$1',
        },
    ],
},
  plugins: [react()],
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
    hmr: { overlay: false },
  },
})
