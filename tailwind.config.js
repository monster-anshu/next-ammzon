module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fc_main : "#fff",
        fc_sec : "#cccccc",
        fc_input: "#111",
        fc_dark_sec : '#252525',
        amazon_grad: {
          start: '#f8e3ad',
          stop: '#EEBA37',

        },
        amazon_search: {
          DEFAULT: '#febd69',
          hover: '#f3a847',
        },
        // amazon_search_hover: '#f3a847',
        amazon_blue: {
          mobile: '#37475A',
          light: "#232F3E",
          sec: "#232f3e",
          DEFAULT: "#131921",
        },
      },
      screens: {
        'xs': '320px',
        'xs-m': '375px',
        'xs-l': '425px',
        'md-s': '535px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
