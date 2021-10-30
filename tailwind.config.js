module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#DEE8F5",
          secondary: "#003366",
          footer: "#336699",
        },
        gray: {
          primary: "#3F3F3F",
          secondary: "#858585",
        },
      },
      fontFamily: {
        body: ["Montserrat"],
      },
    },
    screens: {
      minilappy: "927px",
      // => @media (min-width: 927px) { ... }

      phone: "550px",
      // => @media (min-width: 550px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
