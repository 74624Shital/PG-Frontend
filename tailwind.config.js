/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2dc8a0",
        "primary-dark": "#25b08c",
        "primary-light": "#b8ead8",
        "primary-bg": "#e6f7f2",
      },
    },
  },
  plugins: [],
};