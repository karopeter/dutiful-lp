import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'circular': ['Circular Std', 'sans-serif'],
        'recoleta': ['"Recoleta Alt"', 'serif'],
      },
      fontWeight: {
        'book': '450',
        'semibold': '600'
      },
    },
  },
  plugins: [],
};

export default config;