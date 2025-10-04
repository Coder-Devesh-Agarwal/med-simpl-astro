// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://coder-devesh-agarwal.github.io',
  base: '/med-simpl-astro',
  vite: {
    plugins: [tailwindcss()],
  },
});
