import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A90E2',
          50: '#E6F2FF',
          100: '#B8DFFF',
          600: '#2C7CD1',
          800: '#1A5B9E'
        },
        secondary: {
          DEFAULT: '#FF6B6B',
          50: '#FFE5E5',
          100: '#FFB8B8',
          600: '#FF4242',
          800: '#CC2E2E'
        },
        accent: {
          DEFAULT: '#4ECDC4',
          50: '#E6FCFA',
          100: '#B8F5EF',
          600: '#36B5A9',
          800: '#2A8F86'
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
