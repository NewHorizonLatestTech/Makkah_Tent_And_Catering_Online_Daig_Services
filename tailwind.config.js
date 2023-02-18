/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/gradient.jpg')",
        'footer-texture': "url('/gradient.jpg')",
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '20rem',
      },
    },

  },
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
  ],
}

