/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['"BDO Grotesk"', 'sans-serif'],
        //   handwritten: ['FontFinal', 'cursive']
        },
      },
    },
    plugins: [],
  }
  