/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'radial-custom': 'radial-gradient(circle at center, rgba(119,169,252,0.8) 0%, rgba(125,102,252,0.8) 20%, rgba(125,43,194,0.8) 80%)',
      },
      fontFamily: {
        daydream: ["Daydream", "sans-serif"],
        comic: ["GradientComic", "sans-serif"],
        dope: ["Dope", "sans-serif"],
        circular: ["Circular", "sans-serif"],
        grafiti: ["Graffiti", "sans-serif"],
        druk: ["Druk", "sans-serif"],
        georama: ["Georama", "sans-serif"],
        key: ["Key", "sans-serif"],
      },
      animation: {
        "star-movement-bottom":
          "star-movement-bottom linear infinite alternate",
        "star-movement-top": "star-movement-top linear infinite alternate",
      },
      keyframes: {
        "star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
        },
        "star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
