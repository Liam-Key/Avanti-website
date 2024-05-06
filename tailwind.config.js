/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "avanti-black": "#1F1F1D",
        "avanti-gold": "#C5B381",
      },
      fontFamily: {
        Baskervville: ["Baskervville"],
      },
      fontSize: {
        "cstm-lrge": "64px",
        "cstm-med": "32px",
        "cstm-sml": "24px",
        "cstm-xsml": "16px",
      },
    },
  },
  plugins: [],
};
