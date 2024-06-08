import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
        serif: ['var(--font-source-serif)'],
      },
    },
  },
  plugins: [],
};
export default config;
