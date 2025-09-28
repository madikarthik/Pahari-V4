/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#FAF6EF',  // cream background
          100: '#F3EAD7',
          200: '#E8D8B4',
          300: '#DCC48E',
          400: '#C9A769',
          500: '#B58B47',  // warm gold
          600: '#9E7738',
          700: '#7B5A2A',  // brown (links on hover)
          800: '#5A4122',  // deep brown (headers)
          900: '#3E2C1A',  // near-black brown
        },
        gold: {
          500: '#D4AF37',  // metallic gold accent
          600: '#C39A2E',
        }
      },
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui'],
        body: ['ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}