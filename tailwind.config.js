/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#EA9010'
      },
      fontFamily: {
        'mona': ['Mona Sans', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')
    , require('@tailwindcss/forms')
    , require('@tailwindcss/line-clamp')
    , require('@tailwindcss/typography')
  ],
};
