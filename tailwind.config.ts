/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src//*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom primary color
        secondary: "#9333EA", // Custom secondary color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom font
      },
      spacing: {
        128: "32rem", // Custom spacing size
      },
      borderRadius: {
        xl: "1.5rem", // Custom border radius
      },
    },
  },
  plugins: [],
};