/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom_shadow: "-3px 5px var(--color_text)",
      },
      colors: {
        color_text: "var(--color-text)",
        color_background: "var(--color-background)",
        color_main: "var(--color-main)",
      },
    },
  },
  plugins: [],
};
