/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sertac: {
          DEFAULT: '#CEDB43',
          50: '#FCFBF0',
          100: '#F8F6DD',
          200: '#F1EEB6',
          300: '#EAE990',
          400: '#DEE269',
          500: '#CEDB43',
          600: '#B4C926',
          700: '#8CA31F',
          800: '#667C18',
          900: '#435610',
        },
      },
    },
  },
  plugins: [],
}
