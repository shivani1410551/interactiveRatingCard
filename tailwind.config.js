/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightgrey: "hsl(217, 12%, 63%)",
        darkblue: "hsl(213, 19%, 18%)",
        verydarkblue: "hsl(216, 12%, 8%)",
        blue: "hsl(228, 45%, 44%)",
      },
      fontWeight: {
        primary: 400,
        bold: 700,
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      backgroundImage: {
        'card-gradient': "linear-gradient(to bottom, hsl(213, 19%, 18%), hsl(216, 12%, 8%))",
        'btn-gradient': "linear-gradient(to top, hsl(217, 12%, 63%,0.5), hsl(213, 19%, 18%))",
      },
      screens: {
        sm: { max: "480px" },

      }
      },
      },

  plugins: [],
};



