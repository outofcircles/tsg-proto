import { defineConfig } from 'vite';

// Use dynamic import to load ESM-only plugins so esbuild/vite can evaluate the config in CommonJS contexts.
export default defineConfig(async () => {
  const reactPlugin = (await import('@vitejs/plugin-react')).default;

  return {
    plugins: [reactPlugin()],
    build: {
      target: 'es2019',
    },
  };
});
