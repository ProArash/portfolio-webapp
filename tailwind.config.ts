import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#1E201E',
        jungle: {
          100: '#6a994e',
          200: '#5C8544',
        },
        ocean: {
          100: '#335c67',
          200: '#284A53',
        },
      },
    },
  },
  plugins: [],
};
export default config;
