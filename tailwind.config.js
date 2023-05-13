/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-100": "#333333",
      },
      keyframes: {
        rightToLeft: {
          "0%": { transform: "translate3d(100%, 0px, 0px)" },
          "100%": { transform: "translate3d(-50%, 0px, 0px)" },
        },
      },
      animation: {
        "font-moves": "rightToLeft 25s linear 0s infinite normal none running",
      },
    },
  },
  plugins: [],
};
