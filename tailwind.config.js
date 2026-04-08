/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

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
    },
    colors: {
      ...colors,
      nord: {
        0: "#2E3440", // Page BG
        1: "#3B4252", // Elev surfaces/cards
        2: "#434C5E", // Alternate surfaces
        3: "#4C566A", // Borders
        4: "#D8DEE9", // Sec text
        5: "#E5E9F0", // Sec text
        6: "#ECEFF4", // Primary text
        7: "#8FBCBB", // Accent
        8: "#88C0D0", // Primary accent/link
        9: "#81A1C1", // Secondary accent
        10: "#5E81AC", // Emphasized accent
      },
      primary: {
        300: "#88C0D0", // nord8
        400: "#88C0D0", // nord8
        500: "#81A1C1", // nord9
        600: "#5E81AC", // nord10
        800: "#4C566A", // nord3
        900: "#434C5E", // nord2
      },
      secondary: colors.slate
    },
  },
  plugins: [],
};
