/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#706FE5",
        secondary: "#EAEAFC",
        tertiary: "#2E3E5C",
      },
    },
  },
  plugins: [],
};
