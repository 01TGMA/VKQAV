/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0F3D35',
          700: '#134E4A',
          800: '#0F3D35',
          900: '#0B2E28',
        },
        accent: {
          DEFAULT: '#E5A93B',
          600: '#D97706',
        },
        mint: '#F4F7F6',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display: '-0.025em',
      },
    },
  },
  plugins: [],
}
