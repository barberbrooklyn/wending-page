import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'spring-pink': 'var(--spring-pink)',
        'spring-green': 'var(--spring-green)',
        'spring-yellow': 'var(--spring-yellow)',
        'spring-lavender': 'var(--spring-lavender)',
      },
      fontFamily: {
        serif: ['var(--font-playfair)'],
        sans: ['var(--font-lato)'],
      },
    },
  },
  plugins: [],
}

export default config

