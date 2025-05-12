/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Mulish',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      textColor: ['hover'],
      colors: {
        back: '#ffffff'
      },
      fontFamily: {
      sans: ['Bona Nova', 'serif'],
       main: [
        'Bona Nova', 'serif'
       ]
      }
    },
  },
  plugins: [],
}

