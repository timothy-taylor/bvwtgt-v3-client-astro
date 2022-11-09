/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["OpenSans", "Helvetica", "sans-serif"],
      serif: ["Garamond", "serif"],
    },
    extend: {
      colors: {
        dark: "#211a1d",
      },
    },
  },
  plugins: [],
};
