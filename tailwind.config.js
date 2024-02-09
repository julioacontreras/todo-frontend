/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-to-left': {
          'from': { right: '-100px' },
          'to': { right: '0' },
        }
      },      
      animation: {
        'slide-to-left': 'slide-to-left 0.5s ease-out',
      }
    },
  },
  plugins: [],
}

