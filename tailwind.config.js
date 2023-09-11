/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,vue,js}', 'node_modules/preline/dist/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji'
        ]
      },
      colors: {
        'primary': '#16a34a',
        'secondary': '#2E2E2E',
      },
      aspectRatio: {
        '42/65': '42 / 65',
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

