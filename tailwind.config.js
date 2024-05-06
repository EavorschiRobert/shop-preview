/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        dark: '#0d0c22',
        primary: '#FEFAF6',
        secondary: '#EADBC8',
        tertiary: '#DAC0A3',
        action: '#102C57'
      },
      backgroundImage: {
        'home': "url('/public/store/out-1.jpg')",
        'home-png': "url('/public/images/Opera_senza_titolo-1.png')",
        'food': "url('/public/images/IMG_0898.JPG')"
      }
    },
  },
  plugins: [],
}

