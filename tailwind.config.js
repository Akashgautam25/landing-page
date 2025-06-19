// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        'loader-animation': {
          to: {
            backgroundPosition: 'calc(50% + 1.6em) 0, calc(50% + 3.2em) 0.8em',
          },
        },
      },
      animation: {
        'loader-animation': 'loader-animation 2s linear infinite',
      },
    },
  },
  plugins: [],
};
