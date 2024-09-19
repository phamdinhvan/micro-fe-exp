import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'hostApp',
      remotes: {
        'walletApp': 'http://localhost:5002/assets/remoteEntry.js', 
      },
      shared: ['react', 'react-dom','react-router-dom'],
    }),
  ],
  server: {
    port: 5000,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
