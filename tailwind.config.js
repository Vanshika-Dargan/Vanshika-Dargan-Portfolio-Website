/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#edededac",
        secondary: "#6A9C89",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      backgroundImage:{
        "hero-image":"url('src/assets/herobg.jpg')"
      }
    },
  },
  plugins: [],
}

