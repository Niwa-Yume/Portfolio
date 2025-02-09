/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",  // Cible tous les fichiers HTML et TS dans src
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          50: '#F3E6FF',
          100: '#E5CCFF',
          200: '#CC99FF',
          300: '#B266FF',
          400: '#9933FF',
          500: '#420084', // Notre couleur de base
          600: '#36006D',
          700: '#2B0057',
          800: '#1F0040',
          900: '#14002A',
        }
      }
    }
  },
  plugins: [],
}
