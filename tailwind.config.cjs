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
                light: "#f5f5f5",
                dark: "#211a1d",
                accent: "#8a938c",
                neutral: "#d5D9da",
                pop: "#c04abc",
            },
        },
    },
    plugins: [],
};
