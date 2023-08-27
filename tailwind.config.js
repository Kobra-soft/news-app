/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        /* custom: ["Montserrat", "sans"], */
        /* custom: ["Quicksand", "sans"], */
        custom: ["IBM Plex Sans", "sans"],
        montserrat: ["Montserrat", "sans"],
        quicksand: ["Quicksand", "sans"],
        poppins: ["Poppins", "sans"],
      },
    },
  },
  plugins: [],
};
