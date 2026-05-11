import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}', 
    './src/components/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f4f7f4',
          100: '#e6ede6',
          200: '#cddccd',
          400: '#8aab8a',
          600: '#5a7d5a',
          700: '#3f5f3f',
          800: '#2d452d',
          900: '#1a2a1a',
        },
        rose: {
          50:  '#fdf4f4',
          100: '#fae8e8',
          200: '#f4cecd',
          400: '#d98a88',
          600: '#b85c5a',
        },
        sand: {
          50:  '#faf8f5',
          100: '#f2ede6',
          200: '#e4dbd0',
        },
      },
      fontFamily: {
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading':  ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subhead':  ['1.375rem', { lineHeight: '1.4' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}

export default config