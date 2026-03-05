import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gt: {
          bg: '#0B0F19',
          panel: '#111827',
          line: 'rgba(148,163,184,0.20)',
          glowBlue: '#3B82F6',
          glowViolet: '#7C3AED'
        }
      },
      boxShadow: {
        glass: '0 0 0 1px rgba(148,163,184,0.16), 0 12px 40px rgba(0,0,0,0.55)'
      },
      backdropBlur: {
        glass: '18px'
      }
    }
  },
  plugins: []
}

export default config
