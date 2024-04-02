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
      },
      colors: {
        customBackground: 'rgba(66, 66, 66, 1)',
      },
      fontSize: {
        customSize: '16px',
      },
      fontWeight: {
        customWeight: 600,
      },
      lineHeight: {
        customLineHeight: '24px',
      },
    },
  },
  plugins: [],
}

