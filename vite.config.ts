import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwind()],
  server: {
    // file-change events get dropped in this checkout (git worktree under a
    // dot-directory), so poll instead of relying on fsevents
    watch: {
      usePolling: true,
    },
  },
});

