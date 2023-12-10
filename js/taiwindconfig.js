tailwind.config = {
  darkMode: "class",
  theme: {
    fontFamily: {
      content: ['"Kalam"', '"Inter var", sans-serif'],
      header: ['"Architects Daughter"', '"Inter var", sans-serif'],
    },
    extend: {
      animation: {
        "infinite-scroll": "infiniteScroll 60s linear infinite",
      },
      keyframes: {
        infiniteScroll: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
};
