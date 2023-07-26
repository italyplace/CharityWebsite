module.exports = {
  content: ['./src/**/*.{svelte,js,ts}'],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#550091"
        },
      },
      {
        garden: {
          ...require("daisyui/src/colors/themes")["[data-theme=garden]"],
          primary: "#550091"
        },
      }
    ],
    darkTheme: "dracula"
  },
  theme: {
    extend: {
      fontFamily: {
        'pixl': ['Handjet', 'cursive'],
      }
    }
  },
  plugins: [require('daisyui')],
  important: true
};
