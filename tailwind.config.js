/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["client/**/*.{html,js,vue}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        // Dynamic
        "theme-brand": "rgb(var(--theme-brand) / <alpha-value>)",
        "theme-background": "rgb(var(--theme-background) / <alpha-value>)",
        "theme-background-elevated":
          "rgb(var(--theme-background-elevated) / <alpha-value>)",
        "theme-background-tint":
          "rgb(var(--theme-background-tint) / <alpha-value>)",
        "theme-background-highlight":
          "rgb(var(--theme-background-highlight) / <alpha-value>)",
        "theme-text": "rgb(var(--theme-text) / <alpha-value>)",
        "theme-text-muted": "rgb(var(--theme-text-muted) / <alpha-value>)",
        "theme-text-very-muted":
          "rgb(var(--theme-text-very-muted) / <alpha-value>)",
        "theme-shadow": "rgb(var(--theme-shadow) / <alpha-value>)",
        "theme-border": "rgb(var(--theme-border) / <alpha-value>)",
        // Static
        "theme-success": colors.emerald[500],
        "theme-failure": colors.red[500],
      },
    },
  },
  plugins: [],
};
