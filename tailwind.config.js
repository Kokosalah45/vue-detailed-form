/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'base-layout': '150px 1fr'
      }
    }
  },
  plugins: []
}
