/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bgc: "#242424",
      second: "#F5F1E6",
      green: "#E5FF00",
    },

    extend: {
      fontFamily: {
        txt: ["montserrat"],
      },
    },
  },
  plugins: [],
};
