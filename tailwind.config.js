/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#FBFBFB",
          200: "#f4f4f6",
          300: "#b8bcbf",
          400: "#999999",
          500: "#7F7F7F",
          600: "#666666",
          700: "#4C4C4C",
          800: "#333333",
          900: "#191919",
        },
        primary: {
          100: '#BDF61D',
          200: '#95c01b'
        },
        secondary: '#000000',
      },
      boxShadow: {
        'glow': '0 0 80px #BDF61D, 0 0 80px #BDF61D, 0 0 80px #BDF61D, 0 0 80px #BDF61D',
      },
    },
  },
  darkMode: "className",
  plugins: [nextui()],
};
