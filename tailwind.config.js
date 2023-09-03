/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["IBM Plex Sans", "sans"],
        montserrat: ["Montserrat", "sans"],
        quicksand: ["Quicksand", "sans"],
        poppins: ["Poppins", "sans"],
        inter: ["Inter", "sans"],
        noto: ["Noto Sans", "sans"],
        oswald: ["Oswald", "sans"],
        raleway: ["Raleway", "sans"],
        rubik: ["Rubik", "sans"],
        kanit: ["Kanit", "sans"],
        dmsans: ["DM Sans", "sans"],
        ibmplexsans: ["IBM Plex Sans", "sans"],
      },
    },
  },
  plugins: [],
};
